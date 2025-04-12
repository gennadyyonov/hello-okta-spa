import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { AppRoutes } from './AppRoutes';
import { AppSpinner } from '../components/AppLayout/AppSpinner';
import { store } from './store';
import AuthService from '../services/AuthService';
import CsrfService from '../services/CsrfService';

export const App: React.FC = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      await AuthService.initialize();
      await CsrfService.initialize();
      if (AuthService.isInitialized() && CsrfService.isInitialized()) {
        setIsAppReady(true);
      }
    };

    initializeApp().catch((error) => console.error('Failed to initialize application:', error));
  }, []);

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
