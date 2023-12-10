import { CircularProgress } from '@mui/material';
import { toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security } from '@okta/okta-react';
import React, { Suspense, lazy } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AppHeader } from '../components/AppHeader/AppHeader';
import { initCsrfInfo } from '../csrf/initCsrfInfo';
import { environmentConfig } from '../helpers/environmentConfig';
import { initTranslations } from '../helpers/initTranslations';
import AppWrapper from './AppWrapper';
import { RequiredAuth } from './RequiredAuth';

const LazyHomeConnected = lazy(() =>
  import('../components/Home/HomeConnected').then(({ HomeConnected }) => ({ default: HomeConnected }))
);

interface TranslationState {
  initialized: boolean;
}

const withTranslations = Component =>
  class extends React.PureComponent<unknown, TranslationState> {

    state: TranslationState = {
      initialized: false
    };

    async componentDidMount() {
      await initCsrfInfo();
      await initTranslations();
      this.setState({ initialized: true });
    }

    render() {
      const { initialized } = this.state;
      if (!initialized) {
        return <CircularProgress />;
      }
      const { ...props } = this.props;
      return (
        <>
          <AppWrapper>
            <AppHeader />
            <Suspense fallback={<CircularProgress />}>
              <Component {...props} />
            </Suspense>
          </AppWrapper>
        </>
      );
    }
  };

const Home = withTranslations(LazyHomeConnected);

export const AppRoutes: React.FC = () => {
  const navigate = useNavigate();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    navigate(toRelativeUrl(originalUri, window.location.origin));
  };
  const { oktaAuth } = environmentConfig;
  if (!oktaAuth) {
    return null;
  }
  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Routes>
        <Route path='/implicit/callback' element={<LoginCallback />} />
        <Route path="/" element={<RequiredAuth />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </Security>
  );
};
