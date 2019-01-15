import React, {Component} from 'react';

const API_KEY = '8aef1181042e4066a428c268e4e1078d'

class News extends React.Component {

  constructor(){
    super()
    this.state = {
      news: null
    }
  }

  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=8aef1181042e4066a428c268e4e1078d')
    .then(response => response.json())
    .then(({articles}) => this.setState({
      news: articles
    }))
  }

  render(){

    return(
      <div className="news-articles">
      <h3>Headlines</h3>
      <ol>
        {this.state.news && this.state.news.slice(0,5).map((item) => <li><p>{item.title}</p></li>)}
      </ol>
      </div>
    )
  }
}


export default News;
