import { HttpResponse } from 'msw';

import ping from '../responses/ping.json';
import { backend } from './graphqlLink';

export const pingGraphqlHandler = () => backend.query('Ping', () => HttpResponse.json(ping));
