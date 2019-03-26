import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p class="title">
            My travels
          </p>
        </header>
        <div>
          <Travels />
        </div>
      </div>
    );
  }
}

export default App;
