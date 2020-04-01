import {Action} from 'actions/action';
import {ActionTypes} from 'actions/actionTypes';
import {AppState, defaultState} from 'reducers/root';

interface MessageAction extends Action<MessageState> {
}

export interface MessageState {
  text?: string;
}

export const messageReducer = (state: AppState = defaultState, action: MessageAction): AppState => {
  if (action.type === ActionTypes.HELLO_ACTION) {
    const message = action.payload;
    const text = message.text ? message.text : state.message;
    return {
      ...state,
      message: text
    }
  } else {
    return state;
  }
};