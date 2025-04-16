import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintOnlyWarn from 'eslint-plugin-only-warn';
import vitest from '@vitest/eslint-plugin';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
  {ignores: ['dist', 'coverage']},
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'only-warn': eslintOnlyWarn,
      'simple-import-sort': simpleImportSort,
      vitest,
    },
    settings: {
      'only-warn': true,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...vitest.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'always',
          allowObjectTypes: 'always',
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          paths: [
            // Material imports
            {
              name: '@mui/material',
              message:
                "Import specific components directly from '@mui/material/<Component>' instead of the top-level module.",
            },
            // Icons imports
            {
              name: '@mui/icons-material',
              message:
                "Import specific icons directly from '@mui/icons-material/<Icon>' instead of the top-level module.",
            },
            // System imports
            {
              name: '@mui/system',
              message:
                "Import specific components directly from '@mui/system/<Component>' instead of the top-level module.",
            },
          ],
          patterns: [
            '@mui/material/*/*',
            '!@mui/material/*',
            '@mui/icons-material/*/*',
            '!@mui/icons-material/*',
            '@mui/system/*/*',
            '!@mui/system/*',
          ],
        },
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'vitest/expect-expect': [
        'error',
        {
          assertFunctionNames: [
            'expect',
            'expectAppHeader',
            'expectHome',
            'expectUnauthorizedErrorPage',
          ],
        },
      ],
    },
  },
);
