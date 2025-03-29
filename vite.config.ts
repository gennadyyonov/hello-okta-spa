import react from '@vitejs/plugin-react';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import { defineConfig, loadEnv } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  // Load app-level env vars to node-level env vars.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // depending on your application, base can also be '/'
    base: '/',
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      viteTsconfigPaths(),
      eslintPlugin({
        cache: false,
        include: ['./src/**/*.ts', './src/**/*.tsx'],
        exclude: [],
      }),
    ],
    server: {
      // this ensures that the browser opens upon server start
      open: true,
      // this sets a default port to 3000
      port: 3000,
      proxy: {
        '/bff': {
          target: env.BASE_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    build: {
      // --> ["chrome79", "edge92", "firefox91", "safari13.1"]
      target: browserslistToEsbuild(['>0.2%', 'not dead', 'not op_mini all']),
    },
    // https://vitest.dev/config/
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: ['./src/setupTests.ts', './src/setupStylesTests.ts'],
      testTimeout: 10000,
      mockReset: true,
      coverage: {
        enabled: false,
        thresholds: {
          branches: 20,
          functions: 18,
          lines: 1,
          statements: 1,
        },
        include: ['src/**/*.tsx'],
        exclude: [
          'src/tests/**',
          '**/node_modules/**',
          '**/dist/**',
          '**/out/**',
          '**/out/**',
          'src/setupTests.ts',
          'src/setupStylesTests.ts',
          'src/**/*.test.tsx',
        ],
      },
    },
  };
});
