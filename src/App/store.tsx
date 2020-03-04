import {createStore} from 'redux';
import {setEnvironmentConfig} from '../actions/setEnvironmentConfig';
import {fetchEnvironmentConfig} from '../helpers/fetchEnvironmentConfig';
import {rootReducer} from '../reducers';
import thunk from "redux-thunk";
import {applyMiddleware} from "redux";

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const initStore = async (callback) => {
  const {oktaClientId, oktaIssuer} = await fetchEnvironmentConfig();
  store.dispatch(setEnvironmentConfig({oktaClientId, oktaIssuer}));
  callback();
};
