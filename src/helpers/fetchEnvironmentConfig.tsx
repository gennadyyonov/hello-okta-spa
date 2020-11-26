import {Config} from "./config";

export const environmentConfigUrl = Config.nodeEnv === 'production' ? '/bff/config/environment' : Config.environmentConfigUrl;

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