import {connect} from 'react-redux';
import {compose} from 'redux';
import {AppState, SecurityConfigProps} from '../reducers';
import {AppRouter} from './AppRouter';

interface MapStateToProps extends Pick<SecurityConfigProps, 'oktaClientId' | 'oktaIssuer'> {
}

export interface AppRouterProps extends SecurityConfigProps {
}

export const AppRouterConnected = compose(
  connect<MapStateToProps, {}, {}, AppRouterProps, AppState>(
    (state) => {
      const {
        securityConfig: {
          oktaClientId,
          oktaIssuer
        }
      } = state;
      return {oktaClientId, oktaIssuer};
    },
    null,
    ({oktaClientId, oktaIssuer}): AppRouterProps => ({oktaClientId, oktaIssuer})
  )
)(AppRouter);
