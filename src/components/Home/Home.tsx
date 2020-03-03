import React from 'react';
import {HomeProps} from 'reducers/index';
import logo from '../../logo.svg';

export const Home: React.FC<HomeProps> = (props) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{props.message}</p>
    </header>
  </div>
);
