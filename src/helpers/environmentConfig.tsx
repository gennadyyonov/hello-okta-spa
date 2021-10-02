import {AuthService} from '@okta/okta-react';
import {fetchEnvironmentConfig} from 'helpers/fetchEnvironmentConfig';
import {Config} from "./config";
import {prepareHeaders} from './prepareHeaders';

export const logoutUrl = Config.nodeEnv === 'production' ? '/bff/logout' : Config.logoutUrl;

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
  return authState && authState.accessToken ? {tokenType: 'Bearer', accessToken: authState.accessToken} : null;
};

const logoutFromApp = async () => {
  const context = prepareHeaders({});
  await fetch(logoutUrl || '', {
    method: 'POST', credentials: 'include', headers: context.headers
  });
};

export const logout = async () => {
  if (!environmentConfig.authService) {
    return;
  }
  await logoutFromApp();
  await environmentConfig.authService.logout('/');
};
