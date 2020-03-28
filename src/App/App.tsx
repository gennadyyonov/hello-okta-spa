import React from 'react';
import {Provider} from 'react-redux';
import {fetchTranslations} from '../helpers/fetchTranslations';
import {store} from './store';
import {environmentConfig} from 'helpers/environmentConfig';
import {HomeConnected} from '../components/Home/HomeConnected';
import {LoginCallback, SecureRoute, Security} from '@okta/okta-react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const withTranslations = Component =>
  class WithTranslations extends React.Component {
    render() {
      fetchTranslations();
      const {...props} = this.props;
      return <Component {...props} />;
    }
  };

export const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Security authService={environmentConfig.authService}>
        <Switch>
          <SecureRoute exact path="/" component={withTranslations(HomeConnected)}/>
          <Route path='/implicit/callback' component={LoginCallback}/>
        </Switch>
      </Security>
    </Router>
  </Provider>
);
