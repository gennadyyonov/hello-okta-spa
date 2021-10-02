import {OktaAuth} from '@okta/okta-auth-js';
import {fetchEnvironmentConfig} from 'helpers/fetchEnvironmentConfig';
import {Config} from "./config";
import {prepareHeaders} from './prepareHeaders';

export const logoutUrl = Config.nodeEnv === 'production' ? '/bff/logout' : Config.logoutUrl;

export interface AccessToken {
  tokenType: string;
  accessToken: string;
}

interface EnvironmentConfig {
  oktaAuth?: OktaAuth;
}

export const environmentConfig: EnvironmentConfig = {};

export const initEnvironment = async () => {
  const {oktaClientId, oktaIssuer} = await fetchEnvironmentConfig();
  environmentConfig.oktaAuth = new OktaAuth({
    issuer: oktaIssuer,
    redirectUri: window.location.origin + '/implicit/callback',
    clientId: oktaClientId,
  });
};

export const getAccessToken = (): AccessToken | null => {
  if (!environmentConfig.oktaAuth) {
    return null;
  }
  const accessToken = environmentConfig.oktaAuth.getAccessToken();
  return accessToken ? {tokenType: 'Bearer', accessToken: accessToken} : null;
};

const logoutFromApp = async () => {
  const context = prepareHeaders({});
  await fetch(logoutUrl || '', {
    method: 'POST', credentials: 'include', headers: context.headers
  });
};

export const logout = async () => {
  if (!environmentConfig.oktaAuth) {
    return;
  }
  await logoutFromApp();
  await environmentConfig.oktaAuth.signOut({postLogoutRedirectUri: window.location.origin + '/'});
};
