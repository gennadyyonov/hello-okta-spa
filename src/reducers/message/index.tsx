import {Action} from 'actions/action';
import {ActionTypes} from 'actions/actionTypes';

interface MessageAction extends Action<MessageState> {
}

export interface MessageState {
  text?: string | null;
}

export const defaultMessageState: MessageState = {
  text: null
};

export const messageReducer = (state: MessageState = defaultMessageState, action: MessageAction): MessageState => {
  if (action.type === ActionTypes.HELLO_ACTION) {
    return action.payload
  } else {
    return state;
  }
};