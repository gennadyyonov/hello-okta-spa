import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import {AppRouterConnected} from './AppRouterConnected';
import {store} from './store';

export const App: React.FC = () => (
  <Provider store={store}>
    <AppRouterConnected/>
  </Provider>
);
