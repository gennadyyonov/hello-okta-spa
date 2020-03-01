export interface SecurityConfigProps {
  oktaClientId: string;
  oktaIssuer: string;
}

export interface HomeProps {
  message: string;
}

export interface AppState extends HomeProps {
  securityConfig: SecurityConfigProps;
}

export const defaultState: AppState = {
  message: 'Hello, World!',
  securityConfig: {
    oktaClientId: '0oa26efk122CnG3k3357',
    oktaIssuer: 'https://dev-220281.okta.com/oauth2/aus26efk9hrb1yASy357'
  }
};

export const rootReducer = (state: AppState = defaultState) => state;
