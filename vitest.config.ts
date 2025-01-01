import path from "path";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true, // Use global `describe`, `test`, etc.
    environment: "jsdom", // Simulates a browser-like environment.
    setupFiles: "./src/setupTests.ts", // Setup file for test configuration.
    coverage: {
      reporter: ["text", "lcov"], // Terminal text and lcov for CI/CD.
      include: ["src/**/*.{ts,tsx}"], // Include source files for coverage.
    },
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
    },
  },
});
