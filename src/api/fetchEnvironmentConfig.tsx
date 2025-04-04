import { Config } from '../helpers/config';

export const environmentConfigUrl = Config.baseUrl + '/bff/config/environment';

export const fetchEnvironmentConfig = async () => {
  const headers = { 'content-type': 'application/json' };
  const response = await fetch(environmentConfigUrl, { headers });
  return response.json();
};
