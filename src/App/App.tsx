import {HomeConnected} from 'components/Home/HomeConnected';
import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import {store} from './store';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomeConnected} />
      </Switch>
    </Router>
  </Provider>
);
