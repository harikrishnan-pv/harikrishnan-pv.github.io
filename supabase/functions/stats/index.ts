// Private dashboard data endpoint. Requires an x-stats-key header (or ?key=)
// whose sha256 exists in stats_keys; returns get_stats() aggregates for the
// disguised 404 stats page (public/404.html + public/404.js in the site repo).
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const ALLOWED_ORIGINS = new Set([
  'https://harikrishnan-pv.github.io',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:4173',
  'http://127.0.0.1:4173',
]);

function cors(origin: string | null): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': origin ?? 'https://harikrishnan-pv.github.io',
    'Access-Control-Allow-Headers': 'x-stats-key, content-type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
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
  if (req.method !== 'GET') {
    return new Response(null, { status: 405, headers: cors(req.headers.get('origin')) });
  }

  const url = new URL(req.url);
  const origin = req.headers.get('origin');
  const headers = {
    ...cors(origin && ALLOWED_ORIGINS.has(origin) ? origin : null),
    'Content-Type': 'application/json',
  };

  const key = req.headers.get('x-stats-key') ?? url.searchParams.get('key');
  if (!key) {
    return new Response('{"error":"unauthorized"}', { status: 401, headers });
  }

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

  const days = Math.min(Math.max(parseInt(url.searchParams.get('days') ?? '30', 10) || 30, 1), 365);
  const offset = Math.min(Math.max(parseInt(url.searchParams.get('offset') ?? '0', 10) || 0, 0), 100000);
  const voffset = Math.min(Math.max(parseInt(url.searchParams.get('voffset') ?? '0', 10) || 0, 0), 100000);
  const excludeSelf = ['1', 'true', 'yes'].includes((url.searchParams.get('self') ?? '').toLowerCase());
  const { data, error } = await supabase.rpc('get_stats', {
    p_days: days,
    p_recent_offset: offset,
    p_exclude_self: excludeSelf,
    p_visitors_offset: voffset,
  });
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers });
  }
  return new Response(JSON.stringify(data), { headers });
});
