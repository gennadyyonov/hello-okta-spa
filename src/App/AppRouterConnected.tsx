import {connect} from 'react-redux';
import {compose} from 'redux';
import {AppState, SecurityConfigState} from '../reducers';
import {AppRouter} from './AppRouter';

interface MapStateToProps extends Pick<SecurityConfigState, 'oktaClientId' | 'oktaIssuer'> {
}

export interface AppRouterProps {
  oktaClientId?: string;
  oktaIssuer?: string;
}

const mapStateToProps = (state) => {
  const {
    securityConfig: {
      oktaClientId,
      oktaIssuer
    }
  } = state;
  return {oktaClientId, oktaIssuer};
};

const mergeProps = ({oktaClientId, oktaIssuer}: MapStateToProps): AppRouterProps => ({oktaClientId, oktaIssuer});

export const AppRouterConnected = compose(
  connect<MapStateToProps, {}, {}, AppRouterProps, AppState>(mapStateToProps, null, mergeProps)
)(AppRouter);
