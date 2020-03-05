import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App/App';
import {initAuth} from './App/auth';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

const initCallback = () => ReactDOM.render(<App />, root);

initAuth(initCallback);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
