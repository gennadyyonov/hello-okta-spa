import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {authService} from './auth';
import {HomeConnected} from '../components/Home/HomeConnected';
import {LoginCallback, SecureRoute, Security} from '@okta/okta-react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Security authService={authService}>
        <Switch>
          <SecureRoute exact path="/" component={HomeConnected}/>
          <Route path='/implicit/callback' component={LoginCallback}/>
        </Switch>
      </Security>
    </Router>
  </Provider>
);
