import { graphql, HttpResponse } from 'msw';

import ping from '../responses/ping.json';

export const pingGraphqlHandler = () => graphql.query('Ping', () => HttpResponse.json(ping));
