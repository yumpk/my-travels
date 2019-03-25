import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

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
        <Travel
          destination="Asia"
          country="Cambodia"
          photo="https://static01.nyt.com/images/2015/05/17/travel/20150517CAMBODIA-slide-U2FN/20150517CAMBODIA-slide-U2FN-master1050.jpg"
          distance="9952"
        />
        <Travel
          destination="Latin America"
        country="Argentina"
          photo="https://media.audleytravel.com/-/media/images/home/south-america/argentina/letterbox-images/new-istock/istock_000019452951_iguazu_falls_2400x800.jpg?w=1800&q=80"
          distance="11458"
        />
      </div>
    );
  }
}

export default App;
