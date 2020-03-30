import {CircularProgress} from '@material-ui/core';
import {LoginCallback, SecureRoute, Security} from '@okta/okta-react';
import {environmentConfig} from 'helpers/environmentConfig';
import React, {lazy, Suspense} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AppHeader} from '../components/AppHeader/AppHeader';
import {initTranslations} from '../helpers/initTranslations';
import AppWrapper from './AppWrapper';
import {store} from './store';

const LazyHomeConnected = lazy(() =>
  import('../components/Home/HomeConnected').then(({HomeConnected}) => ({default: HomeConnected}))
);

interface TranslationState {
  initialized: boolean;
}

const withTranslations = Component =>
  class extends React.PureComponent<{}, TranslationState> {

    state: TranslationState = {
      initialized: false
    };

    async componentDidMount() {
      await initTranslations();
      this.setState({initialized: true});
    }

    render() {
      const {initialized} = this.state;
      if (!initialized) {
        return <CircularProgress/>;
      }
      const {...props} = this.props;
      return (
        <>
          <AppWrapper>
            <AppHeader/>
            <Suspense fallback={<CircularProgress/>}>
              <Component {...props} />
            </Suspense>
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
          <SecureRoute exact path="/" component={withTranslations(LazyHomeConnected)}/>
          <Route path='/implicit/callback' component={LoginCallback}/>
        </Switch>
      </Security>
    </Router>
  </Provider>
);
