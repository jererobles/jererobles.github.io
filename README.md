# jererobles.github.io

Habbo Hotel: Origins web port - the official Shockwave client running in the
browser via DirPlayer (WASM), served statically from GitHub Pages.

- Client entry: `index.html` (= `ios.html`)
- Bridge (separate Cloudflare Worker): `wss://habbo-origins-bridge.jererobles.workers.dev` (`/ws/info` + `/ws/mus`)
- `config.js` sets `window.BRIDGE_ORIGIN`; `socket-proxy.js` points the
  Multiuser xtra at the bridge. No build step on this repo - static files only.
