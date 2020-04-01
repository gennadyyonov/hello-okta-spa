import {UserInfoState} from 'reducers/userInfo';

export interface AppState {
  message: string | null;
  userInfo: UserInfoState;
}

export const defaultState: AppState = {
  message: null,
  userInfo: {}
};