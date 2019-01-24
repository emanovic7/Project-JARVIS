import React, {Component} from 'react';
import {Button, Search} from 'semantic-ui-react'

const API_KEY = '8aef1181042e4066a428c268e4e1078d'

class News extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      news: null
    }
  }

  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=8aef1181042e4066a428c268e4e1078d')
    .then(response => response.json())
    .then(({articles}) => this.setState({
        isLoaded: true,
        news: articles
      }),
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    );
  };

  handleTechnology = () => {
    function componentDidMount(){
      fetch('https://newsapi.org/v2/sources?apiKey=8aef1181042e4066a428c268e4e1078d')
      .then(response => response.json())
      .then(({sources}) => this.setState({
        news: sources.category ==="technology"
      }));
    };
    return(
      <div>
        {this.state.news}
      </div>
    )
  }






  render(){

    return(
      <React.Fragment>
        <div className="news-articles">
            <h3>Headlines</h3>
            <ol>
              add link to read "read"{this.state.news && this.state.news.slice(0,5).map((item) => <li><p>{item.title}</p></li>)}
            </ol>
        </div>
        <Search aligned="left" value="filter by subject"/>
      </React.Fragment>
    )
  }
}


export default News;
