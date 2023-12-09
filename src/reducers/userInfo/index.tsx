import { Action } from '../../actions/action';
import { ActionTypes } from '../../actions/actionTypes';

interface UserInfoAction extends Action<UserInfoState> {
}

export interface UserInfoState {
  userId?: string;
  firstName?: string;
  lastName?: string;
}

export const defaultUserInfoState: UserInfoState = {};

export const userInfoReducer = (state: UserInfoState = defaultUserInfoState, action: UserInfoAction): UserInfoState => {
  if (action.type === ActionTypes.USER_INFO_ACTION) {
    return action.payload;
  } else {
    return state;
  }
};
