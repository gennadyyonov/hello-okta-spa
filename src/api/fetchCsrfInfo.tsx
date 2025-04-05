export const csrfTokenInfoUrl = '/bff/config/csrfTokenInfo';

export const fetchCsrfInfo = async () => {
  const headers = { 'content-type': 'application/json' };
  const response = await fetch(csrfTokenInfoUrl, { headers });
  return response.json();
};
