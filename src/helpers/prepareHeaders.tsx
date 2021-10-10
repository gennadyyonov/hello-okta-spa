import Cookies from 'js-cookie';
import {csrfInfoSingleton} from '../csrf/csrf';
import {environmentConfig, getAccessToken} from './environmentConfig';

interface PrepareHeadersReturn {
  headers: string[][];
}

export const prepareHeaders = (headers): PrepareHeadersReturn => {
  const context = {
    headers: {...headers},
  };
  addAuthorizationHeader(context.headers);
  addCsrfToken(context.headers);
  return context;
};

export const addAuthorizationHeader = (headers): void => {
  const token = getAccessToken();
  if (token) {
    headers['Authorization'] = `${token.tokenType} ${token.accessToken}`;
  }
};

export const addCsrfToken = (headers): void => {
  if (!environmentConfig.csrfEnabled) {
    return;
  }
  const {csrfInfo} = csrfInfoSingleton;
  const csrfToken = Cookies.get(csrfInfo.cookieName!);
  if (csrfToken) {
    headers[csrfInfo.headerName!] = csrfToken;
  }
};
