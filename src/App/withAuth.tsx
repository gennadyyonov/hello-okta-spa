import { TokenManagerError, toRelativeUrl } from '@okta/okta-auth-js';
import { useOktaAuth } from '@okta/okta-react';
import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { AppSpinner } from '../components/AppLayout/AppSpinner';
import AuthService from '../services/AuthService';
import { useAppContext } from './useAppContext';

export const withAuth = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAuth = () => {
    const { authState } = useOktaAuth();
    const { setOriginalUri } = useAppContext();
    const navigate = useNavigate();
    const [isRedirecting, setIsRedirecting] = useState(false);

    const oktaAuth = AuthService.getOktaAuth();

    const logError = (context: string, error: unknown) => {
      console.error(`[RequireAuth] ${context}:`, error);
    };

    useEffect(() => {
      if (!oktaAuth || !authState || isRedirecting) {
        return;
      }

      if (!authState.isAuthenticated) {
        setIsRedirecting(true);
        const originalUri = toRelativeUrl(window.location.href, window.location.origin);
        AuthService.login({ originalUri, setOriginalUri }).catch((err) => {
          logError('login failed', err);
          navigate('/error/401');
        });
      }
    }, [oktaAuth, authState, setOriginalUri, navigate, isRedirecting]);

    const logout = useCallback(() => AuthService.logout(), []);

    useEffect(() => {
      const handleAuthError = (tmErr: TokenManagerError) => {
        logError('TokenManager error', tmErr);

        if (tmErr.errorCode === 'invalid_grant') {
          logout().catch((err) => {
            logError('logout failed', err);
            navigate('/error/401');
          });
        } else {
          navigate('/error/401');
        }
      };

      oktaAuth?.tokenManager.on('error', handleAuthError);
      return () => oktaAuth?.tokenManager.off('error', handleAuthError);
    }, [oktaAuth, logout, navigate]);

    if (!authState || !authState?.isAuthenticated) {
      return <AppSpinner />;
    }

    return (
      <Suspense fallback={<AppSpinner />}>
        <WrappedComponent />
      </Suspense>
    );
  };
  ComponentWithAuth.displayName = `withAuth(
    ${WrappedComponent.displayName || WrappedComponent.name || 'Component'}
  )`;

  return ComponentWithAuth;
};
