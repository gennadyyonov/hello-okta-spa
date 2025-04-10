import { graphql, HttpResponse } from 'msw';

import me from '../responses/me.json';

export const meGraphqlHandler = () => graphql.query('Me', () => HttpResponse.json(me));
