import {ActionTypes} from '../constants/actionTypes';
import {SecurityConfigAction, SecurityConfigProps} from '../reducers';

export const setEnvironmentConfig = (config: SecurityConfigProps): SecurityConfigAction => ({
  type: ActionTypes.SET_ENVIRONMENT_CONFIG_ACTION, payload: config
});
