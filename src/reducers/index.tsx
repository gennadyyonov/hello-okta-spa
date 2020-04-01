import {defaultMessageState, messageReducer, MessageState} from 'reducers/message';
import {defaultUserInfoState, userInfoReducer, UserInfoState} from 'reducers/userInfo';
import {combineReducers} from 'redux';

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
