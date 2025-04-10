import { http, HttpResponse } from 'msw';

import { getFullUrl } from '../index';
import translationmap from '../responses/translationmap.json';

export const translationMapHttpHandler = () =>
  http.get(getFullUrl('/bff/translationmap'), async () => HttpResponse.json(translationmap));
