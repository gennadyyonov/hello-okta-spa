import {defaultState, rootReducer} from 'reducers';
import {applyMiddleware, createStore} from 'redux';
import thunk from "redux-thunk";

export const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));
