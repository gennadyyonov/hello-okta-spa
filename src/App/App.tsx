import React from 'react';
import {Provider} from 'react-redux';
import {AppContainerConnected} from './AppContainerConnected';
import {store} from './store';

export const App: React.FC = () => (
  <Provider store={store}>
    <AppContainerConnected/>
  </Provider>
);
