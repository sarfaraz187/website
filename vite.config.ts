import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {},
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
    },
  },
});
