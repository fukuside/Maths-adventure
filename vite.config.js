import { defineConfig } from "vite";

export default defineConfig({
  build: { rollupOptions: { input: { main: "index.html" } } },
  server: {
    port: 5177,
    strictPort: true
  }
});