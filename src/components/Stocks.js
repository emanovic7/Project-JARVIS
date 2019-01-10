import React, {Component} from 'react';




class Stocks extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      stock: null
    };
  }

  componentDidMount() {
    fetch('http://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(response => this.setState({stock: response}))
  }



  render(){
    return(
      <div>
        <p>{this.state.stock && this.state.stock.bpi.USD.rate}</p>
        <p>{this.state.stock && this.state.stock.chartName}</p>
      </div>
    )
  }
}



export default Stocks;
