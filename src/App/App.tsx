import {LoginCallback, SecureRoute, Security} from '@okta/okta-react';
import {environmentConfig} from 'helpers/environmentConfig';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AppHeader} from '../components/AppHeader/AppHeader';
import {HomeConnected} from '../components/Home/HomeConnected';
import {fetchTranslations} from '../helpers/fetchTranslations';
import AppWrapper from './AppWrapper';
import {store} from './store';

interface TranslationState {
  initialized: boolean;
}

const withTranslations = Component =>
  class extends React.PureComponent<{}, TranslationState> {

    state: TranslationState = {
      initialized: false
    };

    async componentDidMount() {
      await fetchTranslations();
      this.setState({initialized: true});
    }

    render() {
      const {initialized} = this.state;
      if (!initialized) {
        return null;
      }
      const {...props} = this.props;
      return (
        <>
          <AppWrapper>
            <AppHeader/>
            <Component {...props} />
          </AppWrapper>
        </>
      );
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
