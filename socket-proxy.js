// socket-proxy.js - gh-pages variant of app/public/socket-proxy.js.
//
// Identical to the stock file, PLUS one optional override: if config.js
// (loaded BEFORE this file) set window.BRIDGE_ORIGIN, the bridge URLs are
// derived from that origin instead of the page origin. This lets a static
// host (GitHub Pages) serve the client while the WS->TCP bridge runs
// elsewhere (e.g. the VPS recipe, ../vps).
//
// Backward compatible: with no config.js / no window.BRIDGE_ORIGIN, the
// behavior is byte-for-byte the stock behavior - derive ws(s)://<page-host>
// from location (wss on https pages, ws on http pages).
//
// BRIDGE_ORIGIN accepts wss:// (canonical), ws://, or http(s):// (mapped to
// ws(s)://); trailing slashes are ignored. NOTE: an https page can only
// open wss:// sockets (mixed content), so for GitHub Pages the bridge must
// be https/wss - see README.md.
(function () {
  'use strict';
  function toWsBase(origin) {
    var o = String(origin).replace(/\/+$/, ''); // strip trailing slashes
    if (/^https:\/\//i.test(o)) return 'wss://' + o.slice(8);
    if (/^http:\/\//i.test(o)) return 'ws://' + o.slice(7);
    return o; // already ws:// or wss://
  }
  var base;
  if (window.BRIDGE_ORIGIN) {
    base = toWsBase(window.BRIDGE_ORIGIN);
  } else {
    var wsScheme = (location.protocol === 'https:') ? 'wss://' : 'ws://';
    base = wsScheme + location.host; // host includes :port when non-default
  }
  window.__dirplayerFlashConfig = {
    socketProxy: [
      { host: 'game-ous.habbo.com', port: 40001, proxyUrl: base + '/ws/info' },
      { host: 'game-ous.habbo.com', port: 40002, proxyUrl: base + '/ws/mus' }
    ]
  };
})();
