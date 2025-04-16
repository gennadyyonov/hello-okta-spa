import { useOktaAuth } from '@okta/okta-react';
import React from 'react';
import { Outlet } from 'react-router';

import { AppHeader } from '../AppHeader/AppHeader';
import AppWrapper from './AppWrapper';

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
