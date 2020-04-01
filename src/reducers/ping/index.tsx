import {Action} from 'actions/action';
import {ActionTypes} from 'actions/actionTypes';
import {AppState, defaultState} from 'reducers/root';

interface PingAction extends Action<string> {
}

export const pingReducer = (state: AppState = defaultState, action: PingAction): AppState => {
  if (action.type === ActionTypes.PING_ACTION) {
    return {
      ...state,
      message: action.payload
    };
  } else {
    return state;
  }
};