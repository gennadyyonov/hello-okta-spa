import {Action} from 'actions/action';
import {ActionTypes} from 'actions/actionTypes';

interface PingAction extends Action<string> {
}

export type PingState = string | null;

export const defaultPingState: PingState = null;

export const pingReducer = (state: PingState = defaultPingState, action: PingAction): PingState => {
  if (action.type === ActionTypes.PING_ACTION) {
    return action.payload;
  } else {
    return state;
  }
};