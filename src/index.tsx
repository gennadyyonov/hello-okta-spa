import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import { App } from './App/App';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container!);
root.render(<App />);
