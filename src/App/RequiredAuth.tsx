import { useOktaAuth } from '@okta/okta-react';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import { environmentConfig } from '../helpers/environmentConfig';

export const RequiredAuth: React.FC = () => {
  const { authState } = useOktaAuth();
  const { oktaAuth } = environmentConfig;

  useEffect(() => {
    if (!oktaAuth || !authState) {
      return;
    }

    if (!authState?.isAuthenticated) {
      oktaAuth.signInWithRedirect();
    }
  }, [oktaAuth, authState]);

  if (!authState || !authState?.isAuthenticated) {
    return null;
  }

  return (<Outlet />);
};
