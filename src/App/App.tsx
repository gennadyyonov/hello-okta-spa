import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router';

import { AppSpinner } from '../components/AppLayout/AppSpinner';
import AuthService, { OktaAuthOptions } from '../services/AuthService';
import CsrfService from '../services/CsrfService';
import { AppRoutes } from './AppRoutes';
import { store } from './store';
import { theme } from './theme';

export interface AppProps {
  okta?: OktaAuthOptions;
}

export const App: React.FC<AppProps> = ({ okta }) => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      await AuthService.initialize(okta);
      await CsrfService.initialize();
      if (AuthService.isInitialized() && CsrfService.isInitialized()) {
        setIsAppReady(true);
      }
    };

    initializeApp().catch((error) => console.error('Failed to initialize application:', error));
  }, [okta]);

  if (!isAppReady) {
    return <AppSpinner />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Router>
          <AppRoutes />
        </Router>
      </Provider>
    </ThemeProvider>
  );
};
