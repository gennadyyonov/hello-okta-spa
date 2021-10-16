import {Config} from '../helpers/config';
import {addAuthorizationHeader} from '../helpers/prepareHeaders';

export const csrfTokenInfoUrl = Config.baseUrl + '/bff/config/csrfTokenInfo';

export const fetchCsrfInfo = async () => {
  const headers = {
    'cache-control': 'no-cache, no-store, must-revalidate',
    pragma: 'no-cache',
  };
  addAuthorizationHeader(headers);
  const response = await fetch(csrfTokenInfoUrl || '', {
    credentials: 'include',
    headers,
  });
  return response.json();
};
