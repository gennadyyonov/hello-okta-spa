import {defaultMessageState, messageReducer, MessageState} from 'reducers/message';
import {defaultPingState, pingReducer, PingState} from 'reducers/ping';
import {defaultUserInfoState, userInfoReducer, UserInfoState} from 'reducers/userInfo';
import {combineReducers} from 'redux';

export interface AppState {
  message: MessageState;
  userInfo: UserInfoState;
  ping: PingState;
}

export const defaultState: AppState = {
  message: defaultMessageState,
  userInfo: defaultUserInfoState,
  ping: defaultPingState,
};

export const rootReducer = combineReducers(
  {
    userInfo: userInfoReducer,
    message: messageReducer,
    ping: pingReducer
  }
);
