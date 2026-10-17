import { HttpResponse } from 'msw';

import me from '../responses/me.json';
import { backend } from './graphqlLink';

export const meGraphqlHandler = () => backend.query('Me', () => HttpResponse.json(me));
