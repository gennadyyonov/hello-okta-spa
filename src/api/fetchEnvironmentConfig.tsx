export const environmentConfigUrl = '/bff/config/environment';

export const fetchEnvironmentConfig = async () => {
  const headers = { 'content-type': 'application/json' };
  const response = await fetch(environmentConfigUrl, { headers });
  return response.json();
};
