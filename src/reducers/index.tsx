import {messageReducer} from 'reducers/message';
import {pingReducer} from 'reducers/ping';
import {AppState, defaultState} from 'reducers/root';
import {userInfoReducer} from 'reducers/userInfo';

export const rootReducer = (state: AppState = defaultState, action): AppState => {
  const reducers = [userInfoReducer, messageReducer, pingReducer];
  let finalState = state;
  let i;
  for (i = 0; i < reducers.length; i++) {
    finalState = reducers[i](finalState, action);
  }
  return finalState
};
