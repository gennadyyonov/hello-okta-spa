import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router';
import { AppRoutes } from './AppRoutes';
import { store } from './store';

export const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>
);
