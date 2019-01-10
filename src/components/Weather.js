import React, {Component} from "react";


const API_KEY = "61c81d3631a11bb37b8536b428f3b45b"

class Weather extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      temp: null
    };
  }



  componentDidMount() {
    {/*fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=61c81d3631a11bb37b8536b428f3b45b')*/}
    fetch('http://api.openweathermap.org/data/2.5/weather?lat=40.8357625&lon=-73.9270205&APPID=61c81d3631a11bb37b8536b428f3b45b')
    .then(response => response.json())
    .then(response => {
                console.log(response);
                return response;
            })
    .then(({weather}) => this.setState({temp: weather}))
  }


  render(){
    return(
      <div>
      <h4>Weather:</h4>
      <input type="text" value="search by city"></input>
        {
          this.state.temp && this.state.temp.map((item, id) =>
            <p key={id}>{item.main} -- {item.description}</p>)
          }
      </div>
    )
  }
}


export default Weather;
