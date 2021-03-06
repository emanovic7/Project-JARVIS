import React, {Component} from "react";
import Geolocation from '../Geolocation'


const API_KEY = "61c81d3631a11bb37b8536b428f3b45b"

class Weather extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      temperature: {
        degrees: null,
        wind: null,
        city: null,
        degs: null
    }
    };
  }



  componentDidMount() {
    {/*fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=61c81d3631a11bb37b8536b428f3b45b')*/}
    fetch('http://api.openweathermap.org/data/2.5/weather?lat=40.7428561&lon=-73.9270205&APPID=61c81d3631a11bb37b8536b428f3b45b')
    .then(response => response.json())
    .then(({weather, wind, main, name}) => this.setState({
      temperature: {
        ...this.state.temperature,
        degrees: weather,
        wind: wind,
        degs: main,
        city: name
      }
    })
    )
  }




  render(){
    return(
      <div>
      <h4>Weather:</h4>
        {
          this.state.temperature.degrees && this.state.temperature.degrees.map((item, id) =>
            <p key={id}>{item.main} -- {item.description}</p>)
          }
          <p>Temperature: {this.state.temperature.degs && this.state.temperature.degs.temp} Kelvins</p>
          <p>City: {this.state.temperature && this.state.temperature.city}</p>
          <p>Wind Speed: {this.state.temperature.wind && this.state.temperature.wind.speed}</p>



      </div>
    )
  }
}


export default Weather;
