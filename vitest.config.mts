import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        logHeapUsage: true,
        allowOnly: true,
        silent: false,
        globals: true,
        mockReset: true,
        clearMocks: true,
        hookTimeout: 60_000,
        testTimeout: 10_000,
        coverage: {
            all: true,
            include: ["src/**"],
            thresholds: {
                branches: 100,
                lines: 100,
                functions: 100,
                statements: 100,
            },
        },
    },
});
