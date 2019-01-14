import React, { Component } from 'react';
import Weather from './components/Weather';
import Stocks from './components/Stocks'
import Geolocation from './Geolocation'
import News from './News'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <h3>
        JARVIS
      </h3>
      
          <Weather />
          <Stocks />
          <Geolocation />
          <News />

      </div>
    );
  }
}

export default App;
