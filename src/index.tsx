import '@okta/okta-auth-js/polyfill';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import {CircularProgress} from '@material-ui/core';
import {initEnvironment} from 'helpers/environmentConfig';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from 'App/App';

const root = document.getElementById('root');

ReactDOM.render(<CircularProgress/>, root);

(async () => {
  await initEnvironment();

  ReactDOM.render(<App/>, root);
})();
