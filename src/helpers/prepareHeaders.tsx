import Cookies from 'js-cookie';
import {csrfInfoSingleton} from '../csrf/csrf';
import {getAccessToken} from './environmentConfig';

interface PrepareHeadersReturn {
  headers: string[][];
}

export const prepareHeaders = (headers): PrepareHeadersReturn => {
  const context = {
    headers: {...headers},
  };
  addAuthorizationHeader(context.headers);
  const {csrfInfo} = csrfInfoSingleton;
  const csrfToken = Cookies.get(csrfInfo.cookieName!);
  if (csrfToken) {
    context.headers[csrfInfo.headerName!] = csrfToken;
  }
  return context;
};

export const addAuthorizationHeader = (headers): void => {
  const token = getAccessToken();
  if (token) {
    headers['Authorization'] = `${token.tokenType} ${token.accessToken}`;
  }
};
