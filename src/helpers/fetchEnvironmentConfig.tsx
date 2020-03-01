export const environmentConfigUrl =
  process.env.NODE_ENV === 'production'
    ? '/bff/config/environment'
    : process.env.REACT_APP_ENVIRONMENT_CONFIG;

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