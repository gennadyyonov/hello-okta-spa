import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import { defaultState, rootReducer } from '../reducers';

export const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));
