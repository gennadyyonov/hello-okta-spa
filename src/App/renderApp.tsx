import { CircularProgress } from '@mui/material';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { initEnvironment } from '../helpers/environmentConfig';
import { App } from './App';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container!);

root.render(<CircularProgress />);

(async () => {
  await initEnvironment();

  root.render(<App />);
})();
