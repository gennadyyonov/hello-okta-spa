import { Config } from '../helpers/config';

export const csrfTokenInfoUrl = Config.baseUrl + '/bff/config/csrfTokenInfo';

export const fetchCsrfInfo = async () => {
  const headers = { 'content-type': 'application/json' };
  const response = await fetch(csrfTokenInfoUrl, { headers });
  return response.json();
};
