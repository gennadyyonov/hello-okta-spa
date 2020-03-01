import {createStore} from 'redux';
import {rootReducer} from '../reducers';

export let store;

export const initStore = async (callback) => {
  store = createStore(rootReducer);
  callback();
};
