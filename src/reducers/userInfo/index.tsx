import {Action} from 'actions/action';
import {ActionTypes} from 'actions/actionTypes';
import {AppState, defaultState} from 'reducers/root';

interface UserInfoAction extends Action<UserInfoState> {
}

export interface UserInfoState {
  userId?: string;
  firstName?: string;
  lastName?: string;
}

export const userInfoReducer = (state: AppState = defaultState, action: UserInfoAction): AppState => {
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