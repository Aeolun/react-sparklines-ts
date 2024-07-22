import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      all: true,
      exclude: ["demo/**"],
      provider: "istanbul",
      reporter: ["text-summary", "lcov"],
    },
  },
});
