// Visitor labeling endpoint for the disguised 404 stats dashboard. Same
// auth as the stats function (x-stats-key header or ?key=, sha256 against
// stats_keys). Upserts a manual label for a visitor_id, or deletes it when
// the label is empty. Labels with is_self mark the owner's own traffic,
// which get_stats can exclude via p_exclude_self.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const ALLOWED_ORIGINS = new Set([
  'https://harikrishnan-pv.github.io',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:4173',
  'http://127.0.0.1:4173',
]);

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function cors(origin: string | null): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': origin ?? 'https://harikrishnan-pv.github.io',
    'Access-Control-Allow-Headers': 'x-stats-key, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Max-Age': '86400',
  };
}

async function sha256Hex(input: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: cors(req.headers.get('origin')) });
  }

  const url = new URL(req.url);
  const origin = req.headers.get('origin');
  const headers = {
    ...cors(origin && ALLOWED_ORIGINS.has(origin) ? origin : null),
    'Content-Type': 'application/json',
  };
  if (req.method !== 'POST') {
    return new Response(null, { status: 405, headers });
  }

  const key = req.headers.get('x-stats-key') ?? url.searchParams.get('key');
  if (!key) {
    return new Response('{"error":"unauthorized"}', { status: 401, headers });
  }

  let body: { visitor_id?: unknown; label?: unknown; is_self?: unknown };
  try {
    body = await req.json();
  } catch {
    return new Response('{"error":"bad request"}', { status: 400, headers });
  }
  const visitorId = typeof body.visitor_id === 'string' ? body.visitor_id : '';
  if (!UUID_RE.test(visitorId)) {
    return new Response('{"error":"bad visitor_id"}', { status: 400, headers });
  }
  const label = typeof body.label === 'string' ? body.label.trim().slice(0, 80) : '';
  const isSelf = body.is_self === true;

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    { auth: { persistSession: false } }
  );

  const hash = await sha256Hex(key);
  const { data: keyRow } = await supabase
    .from('stats_keys')
    .select('key_hash')
    .eq('key_hash', hash)
    .maybeSingle();
  if (!keyRow) {
    return new Response('{"error":"unauthorized"}', { status: 401, headers });
  }

  if (!label) {
    const { error } = await supabase.from('visitor_labels').delete().eq('visitor_id', visitorId);
    return new Response(error ? '{"error":"delete failed"}' : '{"ok":true}', {
      status: error ? 500 : 200,
      headers,
    });
  }

  const { error } = await supabase
    .from('visitor_labels')
    .upsert({ visitor_id: visitorId, label, is_self: isSelf });
  return new Response(error ? '{"error":"upsert failed"}' : '{"ok":true}', {
    status: error ? 500 : 200,
    headers,
  });
});
