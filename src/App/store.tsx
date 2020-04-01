import {rootReducer} from 'reducers';
import {applyMiddleware, createStore} from 'redux';
import thunk from "redux-thunk";
import {defaultState} from 'reducers/root';

export const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));
