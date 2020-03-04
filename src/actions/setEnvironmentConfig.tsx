import {ActionTypes} from '../constants/actionTypes';
import {SecurityConfigAction, SecurityConfigState} from '../reducers';

export const setEnvironmentConfig = (config: SecurityConfigState): SecurityConfigAction => ({
  type: ActionTypes.SET_ENVIRONMENT_CONFIG_ACTION, payload: config
});
