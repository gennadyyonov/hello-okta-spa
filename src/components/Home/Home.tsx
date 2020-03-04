import React from 'react';
import logo from '../../logo.svg';
import {HomeProps} from './HomeConnected';

export const Home: React.FC<HomeProps> = (props) => {
  const { message, onPing } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
        <button type="submit" onClick={onPing}>Ping</button>
      </header>
    </div>
  )
};
