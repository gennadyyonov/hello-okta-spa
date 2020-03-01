import {createStore} from 'redux';
import {setEnvironmentConfig} from '../actions/setEnvironmentConfig';
import {fetchEnvironmentConfig} from '../helpers/fetchEnvironmentConfig';
import {securityConfigReducer as rootReducer} from '../reducers';

export let store;

export const initStore = async (callback) => {
  store = createStore(rootReducer);
  const {oktaClientId, oktaIssuer} = await fetchEnvironmentConfig();
  store.dispatch(setEnvironmentConfig({oktaClientId, oktaIssuer}));
  callback();
};
