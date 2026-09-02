/* First-party analytics beacon for harikrishnan-pv.github.io.
 * Sends pageviews, section views, scroll depth, outbound clicks and
 * engagement time to the Supabase `track` edge function. No cookies,
 * no third parties; visitor/session ids live in localStorage only.
 * Endpoint source: supabase/functions/track/index.ts
 */
(function () {
  'use strict';

  var ENDPOINT = 'https://trequcbcigtswlolgxfc.supabase.co/functions/v1/track';
  var SESSION_MS = 30 * 60 * 1000;
  var SCROLL_MARKS = [25, 50, 75, 100];

  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0;
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
  }

  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } }

  var visitorId = lsGet('pk_vid');
  if (!visitorId) { visitorId = uuid(); lsSet('pk_vid', visitorId); }

  var sessionId = null;
  try {
    var s = JSON.parse(lsGet('pk_sid') || 'null');
    if (s && Date.now() - s.ts < SESSION_MS) sessionId = s.id;
  } catch (e) { /* corrupted session entry */ }
  if (!sessionId) sessionId = uuid();

  function touchSession() {
    lsSet('pk_sid', JSON.stringify({ id: sessionId, ts: Date.now() }));
  }

  function utmParams() {
    var out = {};
    try {
      var q = new URLSearchParams(location.search);
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid', 'ref']
        .forEach(function (k) {
          var v = q.get(k);
          if (v) out[k] = v.slice(0, 200);
        });
    } catch (e) { /* search parsing unsupported */ }
    return Object.keys(out).length ? out : null;
  }

  function env() {
    var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    return {
      path: location.pathname,
      title: (document.title || '').slice(0, 300),
      referrer: (document.referrer || '').slice(0, 1024) || null,
      utm: utmParams(),
      language: (navigator.language || '').slice(0, 35),
      languages: (navigator.languages || []).slice(0, 5).join(',').slice(0, 200) || null,
      timezone: (Intl.DateTimeFormat().resolvedOptions().timeZone || '').slice(0, 64) || null,
      screen_w: screen.width,
      screen_h: screen.height,
      viewport_w: window.innerWidth,
      viewport_h: window.innerHeight,
      dpr: window.devicePixelRatio,
      color_scheme: window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
      touch: navigator.maxTouchPoints > 0,
      hardware_concurrency: navigator.hardwareConcurrency || null,
      device_memory: navigator.deviceMemory || null,
      connection_type: conn && conn.effectiveType ? conn.effectiveType : null,
      webdriver: !!navigator.webdriver
    };
  }

  function payload(type, props) {
    touchSession();
    return JSON.stringify({ type: type, props: props || null, visitor_id: visitorId, session_id: sessionId, env: env() });
  }

  function send(type, props) {
    var body = payload(type, props);
    try {
      fetch(ENDPOINT, {
        method: 'POST',
        keepalive: true,
        headers: { 'Content-Type': 'application/json' },
        body: body
      }).catch(function () { /* analytics must never break the page */ });
    } catch (e) { /* ignore */ }
  }

  function sendOnExit(type, props) {
    var body = payload(type, props);
    try {
      if (navigator.sendBeacon && navigator.sendBeacon(ENDPOINT, new Blob([body], { type: 'application/json' }))) return;
    } catch (e) { /* fall through to keepalive fetch */ }
    send(type, props);
  }

  /* scroll depth */
  var maxScroll = 0;
  var marksSent = {};
  var lastScrollAt = 0;

  function measureScroll() {
    var now = Date.now();
    if (now - lastScrollAt < 200) return;
    lastScrollAt = now;
    var doc = document.documentElement;
    var total = doc.scrollHeight;
    if (total <= 0) return;
    var pct = Math.max(0, Math.min(100, Math.round(((window.scrollY || doc.scrollTop || 0) + window.innerHeight) / total * 100)));
    if (pct > maxScroll) maxScroll = pct;
    for (var i = 0; i < SCROLL_MARKS.length; i++) {
      var m = SCROLL_MARKS[i];
      if (maxScroll >= m && !marksSent[m]) {
        marksSent[m] = true;
        send('scroll', { depth: m });
      }
    }
  }
  window.addEventListener('scroll', measureScroll, { passive: true });

  /* section views via the site's hash navigation */
  function trackSection() {
    if (location.hash) send('section_view', { section: location.hash.slice(0, 64) });
  }
  window.addEventListener('hashchange', trackSection);

  /* outbound / mailto / tel / download clicks */
  document.addEventListener('click', function (ev) {
    var t = ev.target;
    var a = t && t.closest ? t.closest('a') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var external = /^https?:/i.test(href) && a.origin !== location.origin;
    var special = /^(mailto:|tel:)/i.test(href);
    var download = a.hasAttribute('download') || /\.(pdf|zip|docx?|xlsx?|pptx?)(\?|#|$)/i.test(href);
    if (external || special || download) {
      send('click_out', {
        href: href.slice(0, 1024),
        text: (a.textContent || '').trim().slice(0, 200),
        kind: special ? href.split(':')[0].toLowerCase() : download ? 'download' : 'link'
      });
    }
  }, true);

  /* engagement time: accumulate visible time, flush once on exit */
  var visibleSince = Date.now();
  var visibleMs = 0;
  var ended = false;

  function flushEnd() {
    if (ended) return;
    if (document.visibilityState === 'hidden') {
      visibleMs += Date.now() - visibleSince;
      ended = true;
      sendOnExit('engage_end', {
        visible_seconds: Math.round(visibleMs / 100) / 10,
        max_scroll: maxScroll
      });
    }
  }

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      flushEnd();
    } else {
      visibleSince = Date.now();
    }
  });
  window.addEventListener('pagehide', flushEnd);

  /* go */
  send('pageview');
})();
