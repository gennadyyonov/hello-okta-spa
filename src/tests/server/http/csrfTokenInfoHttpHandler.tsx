import { http, HttpResponse } from 'msw';

import { getFullUrl } from '../index';
import csrfTokenInfo from '../responses/csrfTokenInfo.json';

export const csrfTokenInfoHttpHandler = () =>
  http.get(getFullUrl('/bff/config/csrfTokenInfo'), async () => HttpResponse.json(csrfTokenInfo));
