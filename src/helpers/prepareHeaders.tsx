import {getAccessToken} from './environmentConfig';
import Cookies from 'js-cookie';

interface PrepareHeadersReturn {
  headers: string[][];
}

export const prepareHeaders = (headers): PrepareHeadersReturn => {
  const context = {
    headers: {...headers},
  };
  const token = getAccessToken();
  if (token) {
    context.headers['Authorization'] = `${token.tokenType} ${token.accessToken}`;
  }
  const csrfToken = Cookies.get('XSRF-TOKEN');
  if (csrfToken) {
    context.headers['X-XSRF-TOKEN'] = csrfToken;
  }
  return context;
};
