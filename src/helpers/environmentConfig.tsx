import { OktaAuth } from '@okta/okta-auth-js';
import { fetchEnvironmentConfig } from './fetchEnvironmentConfig';

export interface AccessToken {
  tokenType: string;
  accessToken: string;
}

interface EnvironmentConfig {
  oktaAuth?: OktaAuth;
  csrfEnabled: boolean;
}

export const environmentConfig: EnvironmentConfig = {csrfEnabled: false};

export const initEnvironment = async () => {
  const {oktaClientId, oktaIssuer, csrfEnabled} = await fetchEnvironmentConfig();
  environmentConfig.oktaAuth = new OktaAuth({
    issuer: oktaIssuer,
    redirectUri: window.location.origin + '/implicit/callback',
    clientId: oktaClientId,
    scopes: ['email', 'profile', 'openid'],
  });
  environmentConfig.csrfEnabled = csrfEnabled;
};

export const getAccessToken = (): AccessToken | null => {
  if (!environmentConfig.oktaAuth) {
    return null;
  }
  const accessToken = environmentConfig.oktaAuth.getAccessToken();
  return accessToken ? {tokenType: 'Bearer', accessToken: accessToken} : null;
};

export const logout = async () => {
  if (!environmentConfig.oktaAuth) {
    return;
  }
  await environmentConfig.oktaAuth.signOut({postLogoutRedirectUri: window.location.origin + '/'});
};
