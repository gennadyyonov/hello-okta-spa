/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  },
  modulePaths: [
    "<rootDir>/src"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/out/**",
    "!src/**/*.test.tsx"
  ],
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
  setupFiles: ['<rootDir>/jest.polyfills.ts'],
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
};
