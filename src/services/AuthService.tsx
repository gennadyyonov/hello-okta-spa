import OktaAuth, { StorageType } from '@okta/okta-auth-js';

import { fetchEnvironmentConfig } from '../api/fetchEnvironmentConfig';
import CsrfService from './CsrfService';

export interface OktaAuthOptions {
  storageType: StorageType;
}

export interface AccessToken {
  tokenType: string;
  accessToken: string;
}

export interface LoginOptions {
  originalUri: string;
  setOriginalUri(uri: string): void;
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

  async initialize(options?: OktaAuthOptions) {
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
          storage: options?.storageType ?? 'sessionStorage',
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

  async login(options: LoginOptions) {
    if (!this.oktaAuth) {
      return;
    }
    const { originalUri, setOriginalUri } = options;
    setOriginalUri(originalUri);
    await this.oktaAuth.signInWithRedirect({ originalUri });
  }

  async logout() {
    if (!this.oktaAuth) {
      return;
    }
    const postLogoutRedirectUri = window.location.origin + '/';
    console.debug(`[AuthService] Logging out: ${postLogoutRedirectUri}`);
    await this.oktaAuth.signOut({ postLogoutRedirectUri });
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
