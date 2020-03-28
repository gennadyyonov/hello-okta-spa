import React from 'react';
import ReactDOM from 'react-dom';
import {initEnvironment} from 'helpers/environmentConfig';
import {ShadowAppLoader} from 'App/ShadowAppLoader';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

ReactDOM.render(<ShadowAppLoader />, root);

(async () => {
  await initEnvironment();

  import('./App/App').then(({ App }) => ReactDOM.render(<App />, root));
})();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
