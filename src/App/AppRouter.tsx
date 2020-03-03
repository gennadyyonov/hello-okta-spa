import {ImplicitCallback, SecureRoute, Security} from '@okta/okta-react';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HomeConnected} from '../components/Home/HomeConnected';
import {AppRouterProps} from './AppRouterConnected';

export const AppRouter: React.FC<AppRouterProps> = (props) => {
  const oktaConfig = {
    issuer: props.oktaIssuer,
    redirectUri: window.location.origin + '/implicit/callback',
    clientId: props.oktaClientId,
    scope: ['email', 'profile', 'openid'],
    responseType: 'token',
  };

  return (
    <Router>
      <Security {...oktaConfig}>
        <Switch>
          <SecureRoute exact path="/" component={HomeConnected}/>
          <Route path='/implicit/callback' component={ImplicitCallback}/>
        </Switch>
      </Security>
    </Router>
  )
};
