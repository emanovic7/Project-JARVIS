import React, { Component } from 'react';

import MainGrid from './components/MainGrid'
import Weather from './components/Weather';
import Stocks from './components/Stocks'
import Geolocation from './Geolocation'
import News from './components/News'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <h2>
        JARVIS
      </h2>

          <MainGrid />

      </div>
    );
  }
}

export default App;
