import react from '@vitejs/plugin-react';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import { defineConfig, loadEnv } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import proxyConfig from './proxy-config';

export default defineConfig(({ command, mode }) => {
  // Load app-level env vars to node-level env vars.
  const env = loadEnv(mode, process.cwd(), '');

  const backendBaseUrl = env.VITE_BACKEND_BASE_URL;
  const backendCorporateProxy = env.VITE_BACKEND_CORPORATE_PROXY;

  console.info(`"${command}" command is about to be executed in "${mode}" mode...`);

  if (command === 'serve') {
    console.info(`DEV Server Config:
- Backend Base URL=[${backendBaseUrl}], Corporate Proxy=[${backendCorporateProxy}].`);
  }

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
      proxy: proxyConfig({ backendBaseUrl, backendCorporateProxy }),
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
          lines: 0.8,
          statements: 0.8,
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
