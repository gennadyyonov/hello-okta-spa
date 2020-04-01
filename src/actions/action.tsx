import {ActionTypes} from 'actions/actionTypes';

export interface Action<T> {
  type: ActionTypes;
  payload: T;
}