import { combineReducers } from 'redux';
import { defaultMessageState, messageReducer, MessageState } from './message';
import { defaultUserInfoState, userInfoReducer, UserInfoState } from './userInfo';

export interface AppState {
  message: MessageState;
  userInfo: UserInfoState;
}

export const defaultState: AppState = {
  message: defaultMessageState,
  userInfo: defaultUserInfoState,
};

export const rootReducer = combineReducers(
  {
    userInfo: userInfoReducer,
    message: messageReducer,
  }
);
