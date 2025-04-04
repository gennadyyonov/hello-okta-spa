import { useOktaAuth } from '@okta/okta-react';
import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { TokenManagerError } from '@okta/okta-auth-js';
import { CircularProgress } from '@mui/material';
import AuthService from '../services/AuthService';

export const withAuth = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAuth = () => {
    const { authState } = useOktaAuth();
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
        AuthService.login().catch((err) => {
          logError('login failed', err);
          navigate('/error/401');
        });
      }
    }, [oktaAuth, authState, navigate, isRedirecting]);

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
      return <CircularProgress />;
    }

    return (
      <Suspense fallback={<CircularProgress />}>
        <WrappedComponent />
      </Suspense>
    );
  };
  ComponentWithAuth.displayName = `withAuth(
    ${WrappedComponent.displayName || WrappedComponent.name || 'Component'}
  )`;

  return ComponentWithAuth;
};
