import AuthService from '../services/AuthService';
import CsrfService from '../services/CsrfService';

interface PrepareHeadersReturn {
  headers: string[][];
}

export const prepareHeaders = (headers): PrepareHeadersReturn => {
  const context = {
    headers: { ...headers },
  };
  AuthService.addAuthorizationHeader(context.headers);
  CsrfService.addCsrfToken(context.headers);
  return context;
};
