import { AuthService } from '@okta/okta-react';
import { fetchEnvironmentConfig } from 'helpers/fetchEnvironmentConfig';

export interface AccessToken {
  tokenType: string;
  accessToken: string;
}

interface EnvironmentConfig {
  authService?: AuthService;
}

export const environmentConfig: EnvironmentConfig = {};

export const initEnvironment = async () => {
  const {oktaClientId, oktaIssuer} = await fetchEnvironmentConfig();
  environmentConfig.authService = new AuthService({
    issuer: oktaIssuer,
    redirectUri: window.location.origin + '/implicit/callback',
    clientId: oktaClientId,
    scope: ['email', 'profile', 'openid'],
    pkce: true,
  });
};

export const getAccessToken = (): AccessToken | null => {
  if (!environmentConfig.authService) {
    return null;
  }
  const authState = environmentConfig.authService.getAuthState();
  return authState ? {tokenType: 'Bearer', accessToken: authState.accessToken} : null;
};