// site-urls.js - runtime site/navigation URL auto-config (shared snippet,
// loaded identically by ios.html and index_m2.html AFTER socket-proxy.js and
// BEFORE dirplayer-polyfill.js).
//
// The embed's sw4/sw5 params (site.url, url.prefix, client.reload.url,
// client.fatal.error.url) historically pointed at http://localhost:8000/,
// which only controls where the client navigates on reload/fatal error -
// broken for any real deployment. The polyfill forwards every non-standard
// <embed> attribute to the movie's externalParamValue() verbatim when it
// boots, so rewriting the attributes here (synchronously, before the polyfill
// script executes) is enough.
//
// Values derive from location.origin: scheme is preserved (https stays
// https), host includes any non-default port. Trailing slash kept to match
// the original param format.
(function () {
  'use strict';
  var base = location.origin + '/'; // e.g. "https://origins.example.com/"
  var embed = document.querySelector('embed[type="application/x-director"]');
  if (!embed) return;
  embed.setAttribute('sw4', 'site.url=' + base + ';url.prefix=' + base);
  embed.setAttribute('sw5', 'client.reload.url=' + base + ';client.fatal.error.url=' + base);
})();
