import { defineConfig } from "vite";

import { createArenaServer } from "./tools/number-duel/monster-arena-server.mjs";

function attachNumberDuel(server) {
  const handleRequest = createArenaServer().listeners("request")[0];
  server.middlewares.use((req, res, next) => {
    if (req.url !== "/number-duel") return next();
    res.writeHead(308, { Location: "/number-duel/" });
    res.end();
  });
  server.middlewares.use("/number-duel", handleRequest);
}

export default defineConfig({
  plugins: [{
    name: "number-duel-local",
    configureServer: attachNumberDuel,
    configurePreviewServer: attachNumberDuel,
  }],
  build: { rollupOptions: { input: { main: "index.html" } } },
  server: {
    port: 5177,
    strictPort: true
  }
});