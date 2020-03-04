import {ActionTypes} from '../constants/actionTypes';

export interface Action<T> {
  type: ActionTypes;
  payload: T;
}

export interface SecurityConfigAction extends Action<SecurityConfigProps> {
}

export interface PingAction extends Action<string> {
}

export interface UserInfoAction extends Action<UserInfoProps> {
}

export interface SecurityConfigProps {
  oktaClientId?: string;
  oktaIssuer?: string;
}

export interface UserInfoProps {
  userId?;
  firstName?: string;
  lastName?: string;
}

interface HomeProps {
  message: string;
}

export interface AppState extends HomeProps {
  securityConfig: SecurityConfigProps;
  userInfo: UserInfoProps;
}

export const defaultState: AppState = {
  message: 'Loading...',
  securityConfig: {},
  userInfo: {}
};

const securityConfigReducer = (state: AppState = defaultState, action: SecurityConfigAction): AppState => {
  if (action.type === ActionTypes.SET_ENVIRONMENT_CONFIG_ACTION) {
    const securityConfigProps = action.payload;
    return {
      ...state,
      securityConfig: {
        oktaClientId: securityConfigProps.oktaClientId,
        oktaIssuer: securityConfigProps.oktaIssuer
      }
    };
  } else {
    return state;
  }
};

const pingReducer = (state: AppState = defaultState, action: PingAction): AppState => {
  if (action.type === ActionTypes.PING_ACTION) {
    return {
      ...state,
      message: action.payload
    };
  } else {
    return state;
  }
};

const userInfoReducer = (state: AppState = defaultState, action: UserInfoAction): AppState => {
  if (action.type === ActionTypes.USER_INFO_ACTION) {
    const userInfo = action.payload;
    return {
      ...state,
      userInfo: {
        userId: userInfo.userId,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
      }
    };
  } else {
    return state;
  }
};

export const rootReducer = (state: AppState = defaultState, action) : AppState => {
  const reducers = [securityConfigReducer, userInfoReducer, pingReducer];
  let finalState = state;
  let i;
  for (i = 0; i < reducers.length; i++) {
    finalState = reducers[i](finalState, action);
  }
  return finalState
};
