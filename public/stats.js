/* Private dashboard logic for stats.html. Fetches aggregates from the
 * Supabase `stats` edge function using a key stored locally (or passed
 * once via stats.html#key=...). Endpoint source: supabase/functions/stats/index.ts
 */
(function () {
  'use strict';

  var ENDPOINT = 'https://trequcbcigtswlolgxfc.supabase.co/functions/v1/stats';
  var KEY_LS = 'pk_stats_key';

  var state = { key: null, days: 30, data: null };

  var $ = function (id) { return document.getElementById(id); };

  function getKey() {
    var m = location.hash.match(/^#key=(.+)$/);
    if (m) {
      try { localStorage.setItem(KEY_LS, m[1]); } catch (e) { /* private mode */ }
      history.replaceState(null, '', location.pathname);
      return m[1];
    }
    try { return localStorage.getItem(KEY_LS); } catch (e) { return null; }
  }

  function showGate(err) {
    $('dash').hidden = true;
    $('gate').hidden = false;
    $('gate-error').textContent = err || '';
    $('key-input').focus();
  }

  function showDash() {
    $('gate').hidden = true;
    $('dash').hidden = false;
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function nf(n) {
    try { return new Intl.NumberFormat().format(n == null ? 0 : n); }
    catch (e) { return String(n == null ? 0 : n); }
  }

  function barList(items, valueKey, labelKey, opts) {
    opts = opts || {};
    if (!items || !items.length) return '<div class="muted">No data yet.</div>';
    var max = 0;
    items.forEach(function (it) { max = Math.max(max, it[valueKey] || 0); });
    if (!max) max = 1;
    return items.map(function (it) {
      var label = labelKey(it);
      var href = opts.link && it.href ? '<a href="' + esc(it.href) + '" target="_blank" rel="noopener">' + esc(shorten(label, 44)) + '</a>' : esc(shorten(label, 44));
      return '<div class="row' + (opts.blue ? ' blue' : '') + '" title="' + esc(label) + '">' +
        '<span class="name">' + href + '</span>' +
        '<span class="track"><span class="fill" style="width:' + Math.max(2, Math.round((it[valueKey] || 0) / max * 100)) + '%"></span></span>' +
        '<span class="count">' + nf(it[valueKey]) + '</span></div>';
    }).join('');
  }

  function shorten(s, n) {
    s = String(s == null ? '' : s);
    return s.length > n ? s.slice(0, n - 1) + '…' : s;
  }

  function kpi(label, value, sub) {
    return '<div class="kpi"><div class="label">' + esc(label) + '</div>' +
      '<div class="value">' + esc(value) + '</div>' +
      (sub ? '<div class="sub">' + esc(sub) + '</div>' : '') + '</div>';
  }

  function render() {
    var d = state.data;
    if (!d) return;
    var t = d.totals || {};
    var mins = Math.round((t.avg_visible_seconds || 0) / 60 * 10) / 10;

    $('kpis').innerHTML =
      kpi('Pageviews', nf(t.pageviews), nf(t.bot_hits) + ' bot hits filtered out of all lists') +
      kpi('Visitors', nf(t.visitors), nf(t.sessions) + ' sessions') +
      kpi('Returning', nf(t.returning_visitors), 'multi-session visitors') +
      kpi('Avg. time', (mins >= 1 ? mins + 'm' : (t.avg_visible_seconds || 0) + 's'), 'visible time per visit') +
      kpi('Avg. scroll', (t.avg_max_scroll || 0) + '%', 'max scroll depth');

    /* daily chart */
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

    var recent = (d.recent || []).filter(function (r) { return !r.is_bot; });
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
  }

  function load() {
    if (!state.key) { showGate(); return; }
    $('status').textContent = 'loading…';
    fetch(ENDPOINT + '?days=' + state.days, { headers: { 'x-stats-key': state.key } })
      .then(function (res) {
        if (res.status === 401) throw new Error('badkey');
        if (!res.ok) throw new Error('http ' + res.status);
        return res.json();
      })
      .then(function (data) {
        state.data = data;
        $('status').textContent = 'updated ' + new Date().toLocaleTimeString();
        showDash();
        render();
      })
      .catch(function (err) {
        if (String(err.message) === 'badkey') {
          try { localStorage.removeItem(KEY_LS); } catch (e) { /* ignore */ }
          state.key = null;
          showGate('That key was not accepted. Try again.');
        } else {
          $('status').textContent = 'load failed — retrying on refresh';
          if (state.data) { showDash(); render(); }
          else showGate('Could not reach the stats service. Try again.');
        }
      });
  }

  $('key-save').addEventListener('click', function () {
    var v = $('key-input').value.trim();
    if (!v) return;
    try { localStorage.setItem(KEY_LS, v); } catch (e) { /* private mode */ }
    state.key = v;
    load();
  });

  $('key-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') $('key-save').click();
  });

  $('ranges').addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    document.querySelectorAll('#ranges button').forEach(function (x) { x.classList.remove('active'); });
    b.classList.add('active');
    state.days = parseInt(b.dataset.days, 10) || 30;
    load();
  });

  $('refresh').addEventListener('click', load);

  state.key = getKey();
  if (state.key) load(); else showGate();
})();
