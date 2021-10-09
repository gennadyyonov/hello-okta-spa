import {CircularProgress} from '@material-ui/core';
import {toRelativeUrl} from '@okta/okta-auth-js';
import {LoginCallback, SecureRoute, Security} from '@okta/okta-react';
import AppWrapper from 'App/AppWrapper';
import {AppHeader} from 'components/AppHeader/AppHeader';
import {environmentConfig} from 'helpers/environmentConfig';
import {initTranslations} from 'helpers/initTranslations';
import React, {lazy, Suspense} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import {initCsrfInfo} from '../csrf/initCsrfInfo';

const LazyHomeConnected = lazy(() =>
  import('components/Home/HomeConnected').then(({HomeConnected}) => ({default: HomeConnected}))
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
      await initCsrfInfo();
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

export const AppRoutes: React.FC = () => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };
  const {oktaAuth} = environmentConfig;
  if (!oktaAuth) {
    return null;
  }
  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Switch>
        <SecureRoute exact path="/" component={withTranslations(LazyHomeConnected)}/>
        <Route exact path='/implicit/callback' component={LoginCallback}/>
      </Switch>
    </Security>
  );
};
