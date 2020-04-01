import {messageReducer} from 'reducers/message';
import {pingReducer} from 'reducers/ping';
import {userInfoReducer} from 'reducers/userInfo';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers(
  {
    userInfo: userInfoReducer,
    message: messageReducer,
    ping: pingReducer
  }
);
