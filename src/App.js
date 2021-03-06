import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styles from './style.css';
import CssModules from 'react-css-modules';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <button styleName='button'>Submit</button>
        </p>
      </div>
    );
  }
}

export default CssModules(App, styles);
