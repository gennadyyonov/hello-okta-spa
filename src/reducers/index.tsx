import {ActionTypes} from '../constants/actionTypes';

export interface Action<T> {
  type: ActionTypes;
  payload: T;
}

export interface SecurityConfigAction extends Action<SecurityConfigProps> {
}

export interface SecurityConfigProps {
  oktaClientId?: string;
  oktaIssuer?: string;
}

export interface HomeProps {
  message: string;
}

export interface AppState extends HomeProps {
  securityConfig: SecurityConfigProps;
}

export const defaultState: AppState = {
  message: 'Hello, World!',
  securityConfig: {}
};

export const securityConfigReducer = (state: AppState = defaultState, action: SecurityConfigAction): AppState => {
  switch (action.type) {
    case ActionTypes.SET_ENVIRONMENT_CONFIG_ACTION:
      const securityConfigProps = action.payload;
      return {
        ...state,
        securityConfig: {
          oktaClientId: securityConfigProps.oktaClientId,
          oktaIssuer: securityConfigProps.oktaIssuer
        }
      };
    default:
      return state;
  }
};

