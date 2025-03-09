import { defineConfig } from "vite";
import { adex } from "adex";
import preact from "@preact/preset-vite";
import path from "node:path";

export default defineConfig({
  plugins: [adex(), preact()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
