/* Chameleon stats dashboard. This file is served on every 404 of
 * harikrishnan-pv.github.io (via the custom 404.html, a clone of GitHub's
 * default). The page stays a perfect "File not found" until the owner types
 * the dashboard password and presses Enter; the password is verified
 * server-side (stats edge function, sha256 against stats_keys) and never
 * appears in any source file. A failed attempt leaves the 404 untouched.
 */
(function () {
  'use strict';

  var ENDPOINT = 'https://trequcbcigtswlolgxfc.supabase.co/functions/v1/stats';
  var LABEL_ENDPOINT = 'https://trequcbcigtswlolgxfc.supabase.co/functions/v1/label';
  var KEY_LS = 'pk_k';
  var PAGE = 50; // must match the server-side recent limit in get_stats()
  var state = {
    key: null,
    days: 30,
    offset: 0,
    data: null,
    unlocked: false,
    self: (function () { try { return localStorage.getItem('pk_self') === '1'; } catch (e) { return false; } })(),
  };

  /* ---------- stealth keystroke capture ---------- */

  var buffer = '';
  var listening = true;

  document.addEventListener('keydown', function (e) {
    if (!listening) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    if (e.key === 'Enter') {
      if (buffer) { attempt(buffer, false); }
      return;
    }
    if (e.key === 'Escape') { buffer = ''; return; }
    if (e.key === 'Backspace') { buffer = buffer.slice(0, -1); return; }
    if (e.key && e.key.length === 1 && buffer.length < 128) buffer += e.key;
  });

  function attempt(candidate, silent) {
    buffer = '';
    fetch(ENDPOINT + '?days=' + state.days + '&offset=' + state.offset + '&self=' + (state.self ? '1' : '0'), { headers: { 'x-stats-key': candidate } })
      .then(function (res) {
        if (res.status === 401) {
          if (!silent && state.unlocked) setStatus('wrong key');
          if (silent) clearStored();
          return null;
        }
        if (!res.ok) throw new Error('http ' + res.status);
        return res.json();
      })
      .then(function (data) {
        if (!data) return;
        state.key = candidate;
        store(candidate);
        if (!state.unlocked) reveal();
        state.data = data;
        render();
        setStatus('updated ' + istNow());
      })
      .catch(function () { /* stay silent: a 404 page must not show errors */ });
  }

  function store(k) { try { localStorage.setItem(KEY_LS, k); } catch (e) { /* private mode */ } }
  function clearStored() { try { localStorage.removeItem(KEY_LS); } catch (e) { /* ignore */ } }
  function stored() { try { return localStorage.getItem(KEY_LS); } catch (e) { return null; } }

  /* ---------- dashboard shell (injected only after a valid key) ---------- */

  var CSS = [
    'html { background: #0d0d0d; }',
    'body { background: #0d0d0d !important; color: #e5e5e5; font-family: "JetBrains Mono", ui-monospace, Menlo, monospace !important; font-size: 14px; line-height: 1.5; margin: 0; padding: 24px clamp(16px, 4vw, 48px) 64px; }',
    '.pk a { color: #60a5fa; text-decoration: none; } .pk a:hover { text-decoration: underline; }',
    '.pk header { display: flex; flex-wrap: wrap; align-items: center; gap: 16px; margin-bottom: 24px; }',
    '.pk h1 { font-size: 18px; font-weight: 600; letter-spacing: 0.02em; margin: 0; }',
    '.pk h1 span { color: #8a8a8a; font-weight: 400; }',
    '.pk .spacer { flex: 1; }',
    '.pk .ranges { display: flex; gap: 4px; }',
    '.pk button { background: #151515; color: #8a8a8a; border: 1px solid #262626; border-radius: 8px; padding: 6px 14px; font: inherit; cursor: pointer; }',
    '.pk button.active, .pk button:hover { color: #e5e5e5; border-color: #3d3d3d; }',
    '.pk button.active { background: #1b1b1b; color: #34d399; }',
    '.pk .status { color: #8a8a8a; font-size: 12px; }',
    '.pk .kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; margin-bottom: 24px; }',
    '.pk .kpi { background: #151515; border: 1px solid #262626; border-radius: 12px; padding: 14px 16px; }',
    '.pk .kpi .label { color: #8a8a8a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; }',
    '.pk .kpi .value { font-size: 26px; font-weight: 600; margin-top: 2px; }',
    '.pk .kpi .sub { color: #8a8a8a; font-size: 12px; }',
    '.pk .card { background: #151515; border: 1px solid #262626; border-radius: 12px; padding: 16px; margin-bottom: 24px; }',
    '.pk h2 { font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em; color: #8a8a8a; margin: 0 0 12px 0; }',
    '.pk .chart { display: flex; align-items: flex-end; gap: 3px; height: 160px; }',
    '.pk .bar-col { flex: 1; min-width: 6px; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; gap: 2px; height: 100%; }',
    '.pk .bar-stack { width: 100%; display: flex; flex-direction: column; justify-content: flex-end; height: 100%; }',
    '.pk .bar-views { background: #34d399; border-radius: 3px 3px 0 0; }',
    '.pk .bar-visitors { background: #60a5fa; border-radius: 3px 3px 0 0; }',
    '.pk .tooltip { opacity: 0; position: relative; bottom: -22px; background: #1b1b1b; border: 1px solid #262626; border-radius: 6px; padding: 3px 8px; font-size: 11px; white-space: nowrap; pointer-events: none; transition: opacity .1s; z-index: 2; }',
    '.pk .bar-col:hover .tooltip { opacity: 1; }',
    '.pk .x-labels { display: flex; gap: 3px; margin-top: 26px; }',
    '.pk .x-labels span { flex: 1; min-width: 6px; text-align: center; font-size: 10px; color: #8a8a8a; overflow: hidden; }',
    '.pk .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; margin-bottom: 24px; }',
    '.pk .row { display: grid; grid-template-columns: minmax(90px, 38%) 1fr auto; align-items: center; gap: 10px; padding: 3px 0; }',
    '.pk .row .name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }',
    '.pk .row .track { background: #1b1b1b; border-radius: 4px; height: 8px; overflow: hidden; }',
    '.pk .row .fill { background: #34d399; height: 100%; border-radius: 4px; }',
    '.pk .row.blue .fill { background: #60a5fa; }',
    '.pk .row .count { color: #8a8a8a; font-size: 12px; min-width: 40px; text-align: right; }',
    '.pk table { width: 100%; border-collapse: collapse; font-size: 13px; }',
    '.pk th { text-align: left; color: #8a8a8a; font-weight: 500; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; padding: 6px 10px 6px 0; }',
    '.pk td { padding: 6px 10px 6px 0; border-top: 1px solid #262626; overflow-wrap: anywhere; }',
    '.pk .muted { color: #8a8a8a; }',
    '.pk .tag { font-size: 10px; border: 1px solid #262626; border-radius: 4px; padding: 1px 6px; color: #8a8a8a; }',
    '.pk .tag.ret { color: #34d399; border-color: rgba(52, 211, 153, 0.4); }',
    '.pk .tag.me { color: #60a5fa; border-color: rgba(96, 165, 250, 0.4); }',
    '.pk .mini { background: #151515; border: 1px solid #262626; border-radius: 6px; color: #8a8a8a; font: inherit; font-size: 11px; padding: 2px 8px; cursor: pointer; margin-left: 6px; white-space: nowrap; }',
    '.pk .mini:hover { color: #e5e5e5; border-color: #3d3d3d; }',
    '.pk input[type="text"] { background: #0d0d0d; border: 1px solid #3d3d3d; border-radius: 6px; color: #e5e5e5; font: inherit; font-size: 12px; padding: 3px 8px; width: 150px; }',
    '.pk input[type="checkbox"] { accent-color: #34d399; }',
    '.pk .mini-l { color: #8a8a8a; font-size: 11px; margin-left: 8px; white-space: nowrap; }',
    '.pk .lblcell { white-space: nowrap; }',
    '.pk .hint { color: #8a8a8a; font-size: 11px; margin-top: 8px; }',
    '.pk .pager { display: flex; align-items: center; gap: 12px; margin-top: 12px; }',
    '.pk .pg-info { color: #8a8a8a; font-size: 12px; }',
    '.pk button:disabled { opacity: 0.35; cursor: default; }',
    '.pk button:disabled:hover { color: #8a8a8a; border-color: #262626; }',
    '.pk footer { margin-top: 32px; color: #8a8a8a; font-size: 11px; text-align: center; }'
  ].join('\n');

  var HTML =
    '<header>' +
    '<h1>Stats <span>· harikrishnan-pv.github.io</span></h1>' +
    '<div class="spacer"></div>' +
    '<div class="ranges" id="ranges">' +
    '<button data-days="7">7d</button><button data-days="30" class="active">30d</button><button data-days="90">90d</button>' +
    '</div>' +
    '<button id="refresh">Refresh</button>' +
    '<button id="self">Hide my visits</button>' +
    '<span class="status" id="status"></span>' +
    '</header>' +
    '<div class="kpis" id="kpis"></div>' +
    '<div class="card"><h2>Traffic — green: pageviews · blue: unique visitors</h2><div class="chart" id="chart"></div><div class="x-labels" id="x-labels"></div></div>' +
    '<div class="grid">' +
    '<div class="card"><h2>Referrers</h2><div id="referrers"></div></div>' +
    '<div class="card"><h2>Campaign sources</h2><div id="utm"></div></div>' +
    '<div class="card"><h2>Countries</h2><div id="countries"></div></div>' +
    '<div class="card"><h2>Browsers</h2><div id="browsers"></div></div>' +
    '<div class="card"><h2>Operating systems</h2><div id="os"></div></div>' +
    '<div class="card"><h2>Devices</h2><div id="devices"></div></div>' +
    '<div class="card"><h2>Sections viewed</h2><div id="sections"></div></div>' +
    '<div class="card"><h2>Top clicks</h2><div id="links"></div></div>' +
    '</div>' +
    '<div class="card"><h2>Viewers — recurring visitors</h2><div style="overflow-x: auto;"><table><thead><tr>' +
    '<th>Viewer</th><th>IDs</th><th>Sessions</th><th>Days</th><th>Views</th><th>First seen</th><th>Last seen</th><th>Label</th>' +
    '</tr></thead><tbody id="viewers"></tbody></table></div>' +
    '<div class="hint">Grouped by IP + browser + OS — one human with cleared storage appears as several IDs in one row. Tag a viewer “me”, then use “Hide my visits” to keep your own traffic out of every number. Bots and suspected stealth traffic are excluded.</div></div>' +
    '<div class="card"><h2>Recent visits</h2><div style="overflow-x: auto;"><table><thead><tr>' +
    '<th>When (IST)</th><th>Where</th><th>Browser / OS</th><th>Device</th><th>Theme</th><th>Referrer</th><th>Type</th>' +
    '</tr></thead><tbody id="recent"></tbody></table></div>' +
    '<div class="pager"><button id="pg-prev">← Prev</button><span class="pg-info" id="pg-info"></span><button id="pg-next">Next →</button></div></div>' +
    '<footer>Data: Supabase portfolio-analytics · first-party tracking, no cookies</footer>';

  function reveal() {
    state.unlocked = true;
    listening = false;
    document.title = 'Stats';
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);
    document.body.innerHTML = '<div class="pk" id="pk-dash">' + HTML + '</div>';
    document.getElementById('ranges').addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      document.querySelectorAll('#ranges button').forEach(function (x) { x.classList.remove('active'); });
      b.classList.add('active');
      state.days = parseInt(b.dataset.days, 10) || 30;
      state.offset = 0;
      load();
    });
    document.getElementById('refresh').addEventListener('click', load);
    var selfBtn = document.getElementById('self');
    if (state.self) selfBtn.classList.add('active');
    selfBtn.addEventListener('click', function () {
      state.self = !state.self;
      try { localStorage.setItem('pk_self', state.self ? '1' : '0'); } catch (e) { /* private mode */ }
      selfBtn.classList.toggle('active', state.self);
      state.offset = 0;
      load();
    });
    document.getElementById('pg-prev').addEventListener('click', function () {
      if (state.offset >= PAGE) { state.offset -= PAGE; load(); }
    });
    document.getElementById('pg-next').addEventListener('click', function () {
      var total = state.data && state.data.recent_total || 0;
      if (state.offset + PAGE < total) { state.offset += PAGE; load(); }
    });
    wireViewers();
  }

  /* ---------- viewer labeling (inline editor in the Viewers table) ---------- */

  function wireViewers() {
    var tbody = document.getElementById('viewers');

    tbody.addEventListener('click', function (e) {
      var cell = e.target.closest('.lblcell');
      if (!cell || cell.querySelector('input')) return;
      var save = e.target.closest('button.save');
      var cancel = e.target.closest('button.cancel');
      if (save || cancel) return; // handled after the editor exists
      if (!e.target.closest('button.mini')) return;
      var current = '';
      var val = cell.querySelector('.lblval');
      if (val) current = val.textContent;
      var isSelf = cell.dataset.self === '1';
      cell.innerHTML =
        '<input type="text" maxlength="60" value="' + esc(current) + '" placeholder="name or note">' +
        '<label class="mini-l"><input type="checkbox" class="me-chk"' + (isSelf ? ' checked' : '') + '> me</label>' +
        '<button class="mini save">Save</button><button class="mini cancel">✕</button>';
      var inp = cell.querySelector('input[type="text"]');
      inp.focus();
      inp.select();
    });

    tbody.addEventListener('click', function (e) {
      var cell = e.target.closest('.lblcell');
      if (!cell) return;
      if (e.target.closest('button.cancel')) { render(); return; }
      var save = e.target.closest('button.save');
      if (!save) return;
      saveLabel(cell.dataset.vid, cell.querySelector('input[type="text"]').value, cell.querySelector('.me-chk').checked);
    });

    tbody.addEventListener('keydown', function (e) {
      var cell = e.target.closest('.lblcell');
      if (!cell) return;
      if (e.key === 'Enter') {
        saveLabel(cell.dataset.vid, cell.querySelector('input[type="text"]').value, cell.querySelector('.me-chk').checked);
      } else if (e.key === 'Escape') {
        render();
      }
    });
  }

  function saveLabel(vid, label, isSelf) {
    setStatus('saving label…');
    fetch(LABEL_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-stats-key': state.key },
      body: JSON.stringify({ visitor_id: vid, label: label, is_self: isSelf }),
    })
      .then(function (res) {
        if (!res.ok) throw new Error('http ' + res.status);
        load();
      })
      .catch(function () { setStatus('label save failed'); });
  }

  function setStatus(text) {
    var el = document.getElementById('status');
    if (el) el.textContent = text;
  }

  function load() {
    if (!state.key) return;
    setStatus('loading…');
    attempt(state.key, false);
  }

  /* ---------- rendering (unchanged logic from the previous dashboard) ---------- */

  var $ = function (id) { return document.getElementById(id); };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function nf(n) {
    try { return new Intl.NumberFormat().format(n == null ? 0 : n); }
    catch (e) { return String(n == null ? 0 : n); }
  }

  var IST_TIME = null;
  try {
    IST_TIME = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit', hour12: true });
  } catch (e) { IST_TIME = null; }

  function istNow() {
    var t = null;
    if (IST_TIME) { try { t = IST_TIME.format(new Date()).toUpperCase(); } catch (e) { t = null; } }
    return (t || new Date().toTimeString().slice(0, 5)) + ' IST';
  }

  function shorten(s, n) {
    s = String(s == null ? '' : s);
    return s.length > n ? s.slice(0, n - 1) + '…' : s;
  }

  function barList(items, valueKey, labelKey, opts) {
    opts = opts || {};
    if (!items || !items.length) return '<div class="muted">No data yet.</div>';
    var max = 0;
    items.forEach(function (it) { max = Math.max(max, it[valueKey] || 0); });
    if (!max) max = 1;
    return items.map(function (it) {
      var label = labelKey(it);
      var name = opts.link && it.href
        ? '<a href="' + esc(it.href) + '" target="_blank" rel="noopener">' + esc(shorten(label, 44)) + '</a>'
        : esc(shorten(label, 44));
      return '<div class="row' + (opts.blue ? ' blue' : '') + '" title="' + esc(label) + '">' +
        '<span class="name">' + name + '</span>' +
        '<span class="track"><span class="fill" style="width:' + Math.max(2, Math.round((it[valueKey] || 0) / max * 100)) + '%"></span></span>' +
        '<span class="count">' + nf(it[valueKey]) + '</span></div>';
    }).join('');
  }

  function kpi(label, value, sub) {
    return '<div class="kpi"><div class="label">' + esc(label) + '</div>' +
      '<div class="value">' + esc(value) + '</div>' +
      (sub ? '<div class="sub">' + esc(sub) + '</div>' : '') + '</div>';
  }

  function render() {
    var d = state.data;
    if (!d || !state.unlocked) return;
    var t = d.totals || {};
    var mins = Math.round((t.avg_visible_seconds || 0) / 60 * 10) / 10;

    $('kpis').innerHTML =
      kpi('Pageviews', nf(t.pageviews), nf(t.bot_hits) + ' bots + ' + nf(t.suspected_bot_hits || 0) + ' stealth hits excluded' + (state.self ? ' · your visits hidden' : '')) +
      kpi('Visitors', nf(t.visitors), nf(t.sessions) + ' sessions') +
      kpi('Returning', nf(t.returning_visitors), 'multi-session visitors') +
      kpi('Avg. time', (mins >= 1 ? mins + 'm' : (t.avg_visible_seconds || 0) + 's'), 'visible time per visit') +
      kpi('Avg. scroll', (t.avg_max_scroll || 0) + '%', 'max scroll depth');

    var daily = d.daily || [];
    var maxV = 0;
    daily.forEach(function (x) { maxV = Math.max(maxV, x.pageviews || 0, x.visitors || 0); });
    if (!maxV) maxV = 1;
    var chart = $('chart'), labels = $('x-labels');
    chart.innerHTML = '';
    labels.innerHTML = '';
    var showEvery = Math.ceil(daily.length / 15);

    daily.forEach(function (x, i) {
      var col = document.createElement('div');
      col.className = 'bar-col';
      var viewsH = Math.max(2, Math.round((x.pageviews || 0) / maxV * 100));
      var visH = Math.max(1, Math.round((x.visitors || 0) / maxV * 100));
      col.innerHTML =
        '<div class="tooltip">' + esc(x.day) + ' · ' + nf(x.pageviews) + ' views · ' + nf(x.visitors) + ' visitors</div>' +
        '<div class="bar-stack">' +
        '<div class="bar-views" style="height:' + (viewsH - Math.min(viewsH, visH)) + '%"></div>' +
        '<div class="bar-visitors" style="height:' + Math.min(viewsH, visH) + '%"></div>' +
        '</div>';
      chart.appendChild(col);

      var l = document.createElement('span');
      l.textContent = i % showEvery === 0 ? x.day.slice(5) : '\u00a0';
      labels.appendChild(l);
    });

    $('referrers').innerHTML = barList(d.referrers, 'visitors', function (it) { return it.referrer; });
    $('utm').innerHTML = barList(d.utm_sources, 'visitors', function (it) { return it.source; }, { blue: true });
    $('countries').innerHTML = barList(d.countries, 'visitors', function (it) { return it.country; });
    $('browsers').innerHTML = barList(d.browsers, 'visitors', function (it) { return it.browser; }, { blue: true });
    $('os').innerHTML = barList(d.os, 'visitors', function (it) { return it.os; });
    $('devices').innerHTML = barList(d.devices, 'visitors', function (it) { return it.device; }, { blue: true });
    $('sections').innerHTML = barList(d.sections, 'views', function (it) { return it.section; });
    $('links').innerHTML = barList(d.links, 'clicks', function (it) { return it.href; }, { link: true });

    var viewers = d.visitors || [];
    $('viewers').innerHTML = viewers.length ? viewers.map(function (v) {
      var name = v.label
        ? '<strong>' + esc(shorten(v.label, 26)) + '</strong>' + (v.is_self ? ' <span class="tag me">you</span>' : '')
        : '<span class="muted" title="' + esc(v.ip || '') + '">' + esc(shorten((v.location || '?') + ' · ' + (v.sw || '?'), 40)) + '</span>';
      return '<tr>' +
        '<td>' + name + '</td>' +
        '<td class="muted">' + nf(v.ids) + (v.ids > 1 ? ' <span class="tag">stitched</span>' : '') + '</td>' +
        '<td>' + nf(v.sessions) + '</td>' +
        '<td>' + nf(v.days) + '</td>' +
        '<td>' + nf(v.views) + '</td>' +
        '<td class="muted">' + esc(v.first_seen) + '</td>' +
        '<td class="muted">' + esc(v.last_seen) + '</td>' +
        '<td class="lblcell" data-vid="' + esc(v.latest_vid) + '" data-self="' + (v.is_self ? '1' : '0') + '">' +
        (v.label ? '<span class="lblval">' + esc(shorten(v.label, 18)) + '</span>' : '') +
        '<button class="mini">' + (v.label ? '✎' : '＋ tag') + '</button>' +
        '</td></tr>';
    }).join('') : '<tr><td colspan="8" class="muted">No viewers yet.</td></tr>';

    // bots are excluded server-side; every page holds PAGE rows
    var recent = d.recent || [];
    $('recent').innerHTML = recent.length ? recent.map(function (r) {
      var where = [r.city, r.country].filter(Boolean).join(', ') || '—';
      return '<tr>' +
        '<td class="muted">' + esc(r.at) + '</td>' +
        '<td>' + esc(where) + '</td>' +
        '<td>' + esc((r.browser || '?') + ' / ' + (r.os || '?')) + '</td>' +
        '<td>' + esc(r.device || 'desktop') + '</td>' +
        '<td class="muted">' + esc(r.color_scheme || '—') + '</td>' +
        '<td>' + esc(shorten(r.referrer, 40)) + '</td>' +
        '<td><span class="tag' + (r.returning ? ' ret' : '') + '">' + (r.returning ? 'returning' : 'new') + '</span></td>' +
        '</tr>';
    }).join('') : '<tr><td colspan="7" class="muted">No visits yet.</td></tr>';

    var total = d.recent_total || 0;
    var from = total === 0 ? 0 : state.offset + 1;
    var to = Math.min(state.offset + PAGE, total);
    var pages = Math.max(1, Math.ceil(total / PAGE));
    var page = Math.floor(state.offset / PAGE) + 1;
    $('pg-info').textContent = total
      ? nf(from) + '–' + nf(to) + ' of ' + nf(total) + ' visits · page ' + page + ' / ' + pages
      : '';
    $('pg-prev').disabled = state.offset <= 0;
    $('pg-next').disabled = state.offset + PAGE >= total;
  }

  /* auto-unlock for the owner (stored key), otherwise stay a plain 404 */
  var saved = stored();
  if (saved) attempt(saved, true);
})();
