import React, { Component } from 'react';
import Weather from './Weather';
import Stocks from './Stocks'
import Geolocation from './Geolocation'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <h3>
        Emmanuel Owusu
      </h3>

        <div className = "work-profiles">
          <a className="github-link" href="https://github.com/emanovic7" target="_blank" rel="noopener noreferrer">
            Github
          </a><br />
          <a className="linkedin-link" href="https://www.linkedin.com/in/emmanuel-owusu-007/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>


          <Weather />
          <Stocks />
          <Geolocation />




      </div>
    );
  }
}

export default App;
