import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router';
import { AppRoutes } from './AppRoutes';
import { store } from './store';
import { CircularProgress } from '@mui/material';
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
    return <CircularProgress />;
  }

  return (
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  );
};
