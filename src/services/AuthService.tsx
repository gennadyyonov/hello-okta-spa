import OktaAuth from '@okta/okta-auth-js';
import { fetchEnvironmentConfig } from '../api/fetchEnvironmentConfig';
import CsrfService from './CsrfService';

export interface AccessToken {
  tokenType: string;
  accessToken: string;
}

class AuthService {
  private static instance: AuthService;

  private initialized = false;
  private oktaAuth?: OktaAuth;

  private constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async initialize() {
    if (this.initialized) {
      return;
    }

    try {
      const { oktaClientId, oktaIssuer, csrfEnabled } = await fetchEnvironmentConfig();

      this.oktaAuth = new OktaAuth({
        issuer: oktaIssuer,
        redirectUri: window.location.origin + '/implicit/callback',
        clientId: oktaClientId,
        scopes: ['email', 'profile', 'openid', 'offline_access'],
        pkce: true,
        tokenManager: {
          autoRenew: true,
          autoRemove: true,
          storage: 'sessionStorage',
        },
      });
      CsrfService.setCsrfEnabled(csrfEnabled);
      this.initialized = true;
      console.info('OktaAuth initialized');
    } catch (error) {
      console.error('Failed to initialize OktaAuth:', error);
    }
  }

  addAuthorizationHeader(headers): void {
    const token = this.getAccessToken();
    if (token) {
      headers['Authorization'] = `${token.tokenType} ${token.accessToken}`;
    }
  }

  getAccessToken(): AccessToken | null {
    if (!this.oktaAuth) {
      return null;
    }
    const accessToken = this.oktaAuth.getAccessToken();
    return accessToken ? { tokenType: 'Bearer', accessToken: accessToken } : null;
  }

  async login() {
    if (!this.oktaAuth) {
      return;
    }
    await this.oktaAuth.signInWithRedirect();
  }

  async logout() {
    if (!this.oktaAuth) {
      return;
    }
    await this.oktaAuth.signOut({ postLogoutRedirectUri: window.location.origin + '/' });
  }

  getOktaAuth(): OktaAuth | undefined {
    return this.oktaAuth;
  }

  isInitialized(): boolean {
    return this.initialized;
  }
}

const authService = AuthService.getInstance();

export default authService;
