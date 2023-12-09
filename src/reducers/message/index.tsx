import { Action } from '../../actions/action';
import { ActionTypes } from '../../actions/actionTypes';

interface MessageAction extends Action<MessageState | PingState> {
}

export type PingState = string | null;

export interface MessageState {
  text?: string | null;
}

export const defaultMessageState: MessageState = {
  text: null
};

export const messageReducer = (state: MessageState = defaultMessageState, action: MessageAction): MessageState => {
  switch (action.type) {
    case ActionTypes.HELLO_ACTION:
      return action.payload as MessageState;
    case ActionTypes.PING_ACTION:
      return {
        text: action.payload as PingState,
      };
    default:
      return state;
  }
};
