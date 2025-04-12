import React from 'react';
import { Outlet } from 'react-router';
import AppWrapper from './AppWrapper';
import { AppHeader } from '../AppHeader/AppHeader';
import { useOktaAuth } from '@okta/okta-react';

export const AppLayout: React.FC = () => {
  const { authState } = useOktaAuth();

  return (
    <>
      {authState && authState.isAuthenticated && <AppHeader />}
      <AppWrapper>
        <Outlet />
      </AppWrapper>
    </>
  );
};
