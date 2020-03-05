import { AuthService } from '@okta/okta-react';
import {fetchEnvironmentConfig} from '../helpers/fetchEnvironmentConfig';

export interface AccessToken {
  tokenType: string;
  accessToken: string;
}

export let authService: AuthService;

export const initAuth = async (callback) => {
  const {oktaClientId, oktaIssuer} = await fetchEnvironmentConfig();
  authService = new AuthService({
    issuer: oktaIssuer,
    redirectUri: window.location.origin + '/implicit/callback',
    clientId: oktaClientId,
    scope: ['email', 'profile', 'openid'],
    responseType: 'token',
  });
  callback();
};

export const getAccessToken = (): AccessToken | null => {
  if (!authService) {
    return null;
  }
  const authState = authService.getAuthState();
  return authState ? {tokenType: 'Bearer', accessToken: authState.accessToken} : null;
};