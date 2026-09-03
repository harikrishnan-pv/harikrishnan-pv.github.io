// Public analytics beacon for harikrishnan-pv.github.io.
// Accepts only allowlisted origins, enriches the event server-side
// (user-agent parse, client IP, best-effort geo lookup), inserts via the
// service role. The site_events table has RLS with no policies, so this
// function is the only write path.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { UAParser } from 'npm:ua-parser-js@2';

const ALLOWED_ORIGINS = new Set([
  'https://harikrishnan-pv.github.io',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:4173',
  'http://127.0.0.1:4173',
]);

const EVENT_TYPES = new Set(['pageview', 'section_view', 'scroll', 'click_out', 'engage_end']);

const BOT_RE =
  /bot|crawl|spider|slurp|bingpreview|lighthouse|headless|phantom|puppeteer|playwright|curl|wget|python-requests|monitor|fetcher/i;

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function cors(origin: string | null): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': origin ?? 'https://harikrishnan-pv.github.io',
    'Access-Control-Allow-Headers': 'content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Max-Age': '86400',
  };
}

function allowedOrigin(req: Request): string | null {
  const origin = req.headers.get('origin');
  if (origin && ALLOWED_ORIGINS.has(origin)) return origin;
  const referer = req.headers.get('referer');
  if (referer) {
    for (const o of ALLOWED_ORIGINS) {
      if (referer.startsWith(o + '/')) return o;
    }
  }
  return null;
}

const str = (v: unknown, max = 512): string | null => {
  if (typeof v !== 'string') return null;
  const s = v.trim();
  return s ? s.slice(0, max) : null;
};
const int = (v: unknown): number | null =>
  typeof v === 'number' && Number.isFinite(v) ? Math.round(v) : null;
const num = (v: unknown): number | null =>
  typeof v === 'number' && Number.isFinite(v) ? Math.round(v * 100) / 100 : null;
const bool = (v: unknown): boolean | null => (typeof v === 'boolean' ? v : null);

function clientIp(req: Request): string | null {
  const candidates = [
    (req.headers.get('x-forwarded-for') || '').split(',')[0].trim(),
    req.headers.get('cf-connecting-ip'),
    req.headers.get('x-real-ip'),
  ];
  for (const c of candidates) {
    if (c && (/^\d{1,3}(\.\d{1,3}){3}$/.test(c) || (/^[0-9a-fA-F:]+$/.test(c) && c.includes(':')))) {
      return c;
    }
  }
  return null;
}

// ipwho.is primary, geojs fallback; both free, no key, HTTPS.
async function fetchGeo(ip: string): Promise<Record<string, unknown> | null> {
  const attempt = async (url: string, map: (j: Record<string, any>) => Record<string, unknown>) => {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 2000);
    try {
      const res = await fetch(url, { signal: ctrl.signal });
      const j = await res.json();
      const row = map(j);
      return row.country ? row : null;
    } catch {
      return null;
    } finally {
      clearTimeout(timer);
    }
  };

  const viaIpwho = await attempt(`https://ipwho.is/${ip}`, (j) => ({
    country: j.success === false ? null : str(j.country_code, 2),
    region: str(j.region, 100),
    city: str(j.city, 100),
    lat: num(j.latitude),
    lon: num(j.longitude),
    timezone: str(j.timezone?.id, 64),
    asn: j.connection?.asn != null ? `AS${j.connection.asn}` : null,
    org: str(j.connection?.org, 128),
  }));
  if (viaIpwho) return viaIpwho;

  return attempt(`https://get.geojs.io/v1/ip/geo/${ip}.json`, (j) => ({
    country: str(j.country_code, 2),
    region: str(j.region, 100),
    city: str(j.city, 100),
    lat: num(j.latitude),
    lon: num(j.longitude),
    timezone: str(j.timezone, 64),
    asn: j.asn != null ? str(j.asn, 20) : null,
    org: str(j.organization_name ?? j.organization, 128),
  }));
}

async function lookupGeo(supabase: ReturnType<typeof createClient>, ip: string) {
  const { data: cached } = await supabase
    .from('ip_geo_cache')
    .select('country,region,city,lat,lon,timezone,asn,org')
    .eq('ip', ip)
    .maybeSingle();
  if (cached) return cached;
  const geo = await fetchGeo(ip);
  if (geo) {
    await supabase.from('ip_geo_cache').upsert({ ip, ...geo });
  }
  return geo;
}

const DC_ORG_RE =
  /(microsoft|amazon|digitalocean|hetzner|linode|vultr|choopa|leaseweb|contabo|m247|datacamp|packethub|ovh)/i;

// Stealth-bot heuristics applied before insert. Strong signals (2 pts):
// device_memory varying within one visitor, or >=3 distinct visitor_ids from
// one IP within an hour. Weak signals (1 pt): viewport exactly equal to
// screen, browser timezone disagreeing with IP-geo timezone, datacenter org.
// Real browsers cannot vary deviceMemory, and VPN users only ever trip the
// weak tz/org signals, so the threshold is score >= 3.
async function stealthScore(
  supabase: ReturnType<typeof createClient>,
  row: Record<string, unknown>
): Promise<{ suspected: boolean; reason: string | null }> {
  const reasons: string[] = [];

  if (row.visitor_id && row.device_memory != null) {
    const { count } = await supabase
      .from('site_events')
      .select('id', { count: 'exact', head: true })
      .eq('visitor_id', row.visitor_id as string)
      .not('device_memory', 'is', null)
      .neq('device_memory', row.device_memory as number)
      .limit(1);
    if ((count ?? 0) > 0) reasons.push('memory-varies');
  }

  if (row.ip) {
    const hourAgo = new Date(Date.now() - 3_600_000).toISOString();
    const { data } = await supabase
      .from('site_events')
      .select('visitor_id')
      .eq('ip', row.ip as string)
      .gt('created_at', hourAgo)
      .limit(10);
    const ids = new Set((data ?? []).map((r) => r.visitor_id).filter(Boolean));
    ids.add(row.visitor_id as string);
    if (ids.size >= 3) reasons.push('ip-burst');
  }

  if (
    row.viewport_w != null && row.screen_w != null &&
    row.viewport_w === row.screen_w && row.viewport_h === row.screen_h
  ) reasons.push('viewport=screen');

  if (row.timezone && row.geo_timezone && row.timezone !== row.geo_timezone) {
    reasons.push('tz-mismatch');
  }
  if (row.org && DC_ORG_RE.test(row.org as string)) reasons.push('datacenter-org');

  const weight = (r: string) => (r === 'memory-varies' || r === 'ip-burst' ? 2 : 1);
  const score = reasons.reduce((s, r) => s + weight(r), 0);
  return { suspected: score >= 3, reason: score >= 3 ? reasons.join('+') : null };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: cors(req.headers.get('origin')) });
  }

  const origin = allowedOrigin(req);
  const headers = cors(origin);
  if (!origin || req.method !== 'POST') {
    return new Response(null, { status: 403, headers });
  }

  let body: Record<string, unknown>;
  try {
    const text = await req.text();
    if (text.length > 8192) return new Response(null, { status: 413, headers });
    body = JSON.parse(text);
  } catch {
    return new Response(null, { status: 400, headers });
  }
  const type = str(body.type, 32);
  if (!type || !EVENT_TYPES.has(type)) {
    return new Response(null, { status: 400, headers });
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    { auth: { persistSession: false } }
  );

  const env = (body.env ?? {}) as Record<string, unknown>;
  const ua = req.headers.get('user-agent');
  const parsed = ua ? new UAParser(ua).getResult() : null;

  const row: Record<string, unknown> = {
    type,
    visitor_id: typeof body.visitor_id === 'string' && UUID_RE.test(body.visitor_id) ? body.visitor_id : null,
    session_id: typeof body.session_id === 'string' && UUID_RE.test(body.session_id) ? body.session_id : null,
    path: str(env.path, 512),
    title: str(env.title, 300),
    referrer: str(env.referrer, 1024),
    utm: env.utm && typeof env.utm === 'object' ? env.utm : null,
    language: str(env.language, 35),
    languages: str(env.languages, 200),
    timezone: str(env.timezone, 64),
    screen_w: int(env.screen_w),
    screen_h: int(env.screen_h),
    viewport_w: int(env.viewport_w),
    viewport_h: int(env.viewport_h),
    dpr: num(env.dpr),
    color_scheme: str(env.color_scheme, 12),
    touch: bool(env.touch),
    hardware_concurrency: int(env.hardware_concurrency),
    device_memory: num(env.device_memory),
    connection_type: str(env.connection_type, 16),
    webdriver: bool(env.webdriver),
    user_agent: str(ua, 512),
    accept_language: str(req.headers.get('accept-language'), 200),
    props: body.props && typeof body.props === 'object' ? body.props : null,
    is_bot: bool(env.webdriver) || (ua ? BOT_RE.test(ua) : false),
  };

  if (parsed) {
    row.browser = parsed.browser?.name ?? null;
    row.browser_version = str(parsed.browser?.version, 40);
    row.engine = parsed.engine?.name ?? null;
    row.os = parsed.os?.name ?? null;
    row.os_version = str(parsed.os?.version, 40);
    row.device_type = parsed.device?.type ?? 'desktop';
    row.device_vendor = parsed.device?.vendor ?? null;
    row.device_model = parsed.device?.model ?? null;
  }

  const ip = clientIp(req);
  if (ip) {
    row.ip = ip;
    const geo = await lookupGeo(supabase, ip);
    if (geo) {
      row.country = geo.country ?? null;
      row.region = geo.region ?? null;
      row.city = geo.city ?? null;
      row.lat = geo.lat ?? null;
      row.lon = geo.lon ?? null;
      row.geo_timezone = geo.timezone ?? null;
      row.asn = geo.asn ?? null;
      row.org = geo.org ?? null;
    }
  }

  const { suspected, reason } = await stealthScore(supabase, row);
  row.suspected_bot = suspected;
  row.bot_reason = reason;

  let { error } = await supabase.from('site_events').insert(row);
  if (error && row.ip !== undefined) {
    // an unparseable client IP (bad inet) is the only expected insert failure
    delete row.ip;
    ({ error } = await supabase.from('site_events').insert(row));
  }

  return new Response(null, { status: error ? 500 : 204, headers });
});
