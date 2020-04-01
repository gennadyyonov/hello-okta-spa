import {defaultMessageState, MessageState} from 'reducers/message';
import {defaultUserInfoState, UserInfoState} from 'reducers/userInfo';
import {defaultPingState, PingState} from 'reducers/ping';

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