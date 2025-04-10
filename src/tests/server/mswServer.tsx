// https://mswjs.io/docs/api/setup-server/
import { setupServer } from 'msw/node';

import { mswHandlers } from './mswHandlers';

export const mswServer = setupServer(...mswHandlers);
