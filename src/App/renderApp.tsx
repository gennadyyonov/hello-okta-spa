import { CircularProgress } from '@mui/material';
import { App } from 'App/App';
import { initEnvironment } from 'helpers/environmentConfig';
import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

ReactDOM.render(<CircularProgress/>, root);

(async () => {
  await initEnvironment();

  ReactDOM.render(<App/>, root);
})();
