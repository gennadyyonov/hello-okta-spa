// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/vitest';

import { mswServer } from './tests/server/mswServer';

beforeAll(() => {
  // Enable API mocking before all the tests.
  mswServer.listen();
});

afterEach(() => {
  // Reset the request handlers between each test.
  // This way the handlers we add on a per-test basis
  // do not leak to other, irrelevant tests.
  mswServer.resetHandlers();
});

afterAll(() => {
  // Finally, disable API mocking after the tests are done.
  mswServer.close();
});
