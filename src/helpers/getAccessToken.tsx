export interface AccessToken {
  tokenType: string;
  accessToken: string;
}

export const getAccessToken = (): AccessToken | null => {
  const oktaTokenStorage = localStorage && localStorage.getItem('okta-token-storage');
  if (oktaTokenStorage) {
    const oktaToken = JSON.parse(oktaTokenStorage);
    return oktaToken.accessToken;
  }
  return null;
};
