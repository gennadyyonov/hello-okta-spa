import { CircularProgress } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { initEnvironment } from '../helpers/environmentConfig';
import { App } from './App';

const root = document.getElementById('root');

ReactDOM.render(<CircularProgress/>, root);

(async () => {
  await initEnvironment();

  ReactDOM.render(<App/>, root);
})();
