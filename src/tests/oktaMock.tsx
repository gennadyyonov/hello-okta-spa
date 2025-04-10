import OktaAuth, { AuthState } from '@okta/okta-auth-js';
import { AuthStateManagerInterface } from '@okta/okta-auth-js/types/lib/core/types/AuthState';
import { TokenManagerInterface } from '@okta/okta-auth-js/types/lib/oidc/types/TokenManager';

const authState: AuthState = {
  isAuthenticated: true,
  accessToken: {
    accessToken: 'mock-access-token',
  },
} as AuthState;

const authStateManager: AuthStateManagerInterface = {
  getAuthState: vi.fn(() => authState),
  subscribe: vi.fn(),
  unsubscribe: vi.fn(),
} as unknown as AuthStateManagerInterface;

const tokenManager: TokenManagerInterface = {
  on: vi.fn(),
  off: vi.fn(),
} as unknown as TokenManagerInterface;

const options: OktaAuth['options'] = {} as OktaAuth['options'];

const oktaAuth: Partial<OktaAuth> = {
  signInWithRedirect: vi.fn(),
  signOut: vi.fn(),
  getAccessToken: vi.fn(() => authState.accessToken?.accessToken),
  authStateManager,
  tokenManager,
  options,
  start: vi.fn().mockResolvedValue({}),
};

vi.mock('../services/AuthService', () => {
  return {
    default: {
      getOktaAuth: vi.fn(() => oktaAuth),
      initialize: vi.fn(),
      addAuthorizationHeader: vi.fn(),
      isInitialized: vi.fn(() => true),
    },
  };
});

vi.mock('@okta/okta-react', async () => {
  const actual = await vi.importActual<typeof import('@okta/okta-react')>('@okta/okta-react');
  return {
    ...actual,
    useOktaAuth: vi.fn(() => ({ authState, oktaAuth })),
  };
});
