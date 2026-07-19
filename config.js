// config.js - deployment override for static hosts (e.g. GitHub Pages).
// Loaded BEFORE socket-proxy.js (gh-pages.sh patches the pages to do so).
//
// Point this at the ORIGIN of your running bridge (see ../vps or
// ../cloudflare). It MUST be a wss:// (or https://) origin: the Pages site
// is served over https and browsers block ws:// sockets from https pages
// (mixed content).
//
// Example:
//   window.BRIDGE_ORIGIN = 'wss://habbo-origins-bridge.jererobles.workers.dev';
//
// Leave it unset (or delete this file) to fall back to the stock behavior
// (bridge on the same origin as the page).
window.BRIDGE_ORIGIN = 'wss://habbo-origins-bridge.jererobles.workers.dev';
