import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss(), jsxLocPlugin()],
  resolve: { alias: { "@": path.resolve(root, "client/src") } },
  root: path.resolve(root, "client"),
  build: { outDir: path.resolve(root, "dist/public"), emptyOutDir: true },
  server: { port: 3000, host: true },
});
