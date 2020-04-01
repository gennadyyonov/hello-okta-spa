import {ActionTypes} from './actionTypes';

export interface Action<T> {
  type: ActionTypes;
  payload: T;
}