import { Config } from './config';

export const environmentConfigUrl = Config.baseUrl + '/bff/config/environment';

export const fetchEnvironmentConfig = async () => {
  const response = await fetch(environmentConfigUrl || '', {
    credentials: 'include',
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate',
      pragma: 'no-cache',
    },
  });
  return response.json();
};
