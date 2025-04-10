import { http, HttpResponse } from 'msw';

import { getFullUrl } from '../index';
import environment from '../responses/environment.json';

export const environmentHttpHandler = () =>
  http.get(getFullUrl('/bff/config/environment'), async () => HttpResponse.json(environment));
