import OktaAuth from '@okta/okta-auth-js';
import { Security } from '@okta/okta-react';
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router';

import { AppLayout } from '../components/AppLayout/AppLayout';
import { ErrorPage } from '../components/Error/ErrorPage';
import { withTranslations } from '../features/i18n/withTranslations';
import AuthService from '../services/AuthService';
import { AppContextProvider } from './AppContextProvider';
import { LoginCallbackHandler } from './LoginCallbackHandler';
import { withAuth } from './withAuth';

const LazyHome = lazy(() => import('../components/Home/Home').then(({ Home }) => ({ default: Home })));

export const ProtectedLayout = withAuth(AppLayout);

const AppRoutesComponent: React.FC = () => {
  const restoreOriginalUri = async (_oktaAuth: OktaAuth, _originalUri: string) => {
    // No-op: original URI restoration logic is implemented in LoginCallbackHandler.
  };
  const oktaAuth = AuthService.getOktaAuth();
  if (!oktaAuth) {
    return null;
  }
  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <AppContextProvider>
        <Routes>
          <Route path="/implicit/callback" element={<LoginCallbackHandler />} />
          <Route path="/" element={<ProtectedLayout />}>
            <Route path="" element={<LazyHome />} />
          </Route>
          <Route path="/error" element={<AppLayout />}>
            <Route path="401" element={<ErrorPage id="HO.ER.UNAUTHORIZED" />} />
          </Route>
        </Routes>
      </AppContextProvider>
    </Security>
  );
};

export const AppRoutes = withTranslations(AppRoutesComponent);
