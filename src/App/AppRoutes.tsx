import OktaAuth, { toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security } from '@okta/okta-react';
import React, { lazy } from 'react';
import { Route, Routes, useNavigate } from 'react-router';

import { AppLayout } from '../components/AppLayout/AppLayout';
import { ErrorPage } from '../components/Error/ErrorPage';
import { withTranslations } from '../features/i18n/withTranslations';
import AuthService from '../services/AuthService';
import { withAuth } from './withAuth';

const LazyHome = lazy(() => import('../components/Home/Home').then(({ Home }) => ({ default: Home })));

export const ProtectedLayout = withAuth(AppLayout);

const AppRoutesComponent: React.FC = () => {
  const navigate = useNavigate();
  const restoreOriginalUri = async (_: OktaAuth, originalUri: string) => {
    navigate(toRelativeUrl(originalUri, window.location.origin));
  };
  const oktaAuth = AuthService.getOktaAuth();
  if (!oktaAuth) {
    return null;
  }
  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Routes>
        <Route path="/implicit/callback" element={<LoginCallback />} />
        <Route path="/" element={<ProtectedLayout />}>
          <Route path="" element={<LazyHome />} />
        </Route>
        <Route path="/error" element={<AppLayout />}>
          <Route path="401" element={<ErrorPage id="HO.ER.UNAUTHORIZED" />} />
        </Route>
      </Routes>
    </Security>
  );
};

export const AppRoutes = withTranslations(AppRoutesComponent);
