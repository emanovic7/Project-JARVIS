import React, {Component} from 'react';
import { Accordion, Icon, Form, Select, Button, Divider, Grid, Segment, Search } from 'semantic-ui-react';
import Weather from './Weather';
import Stocks from './Stocks'




class Activity extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      activeIndex: 0
    };
  }


  handleSports = (event, titleProps) => {
    const {index} = titleProps
    const {activeIndex} = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({
      activeIndex: newIndex
    })
  }

  handleEvents = (event, titleProps) => {
    const {index} = titleProps
    const {activeIndex} = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({
      activeIndex: newIndex
    })
  }

  handleTraffic = (event, titleProps) => {
    const {index} = titleProps
    const {activeIndex} = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({
      activeIndex: newIndex
    })
  }

  handleRestaurants = (event, titleProps) => {
    const {index} = titleProps
    const {activeIndex} = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({
      activeIndex: newIndex
    })
  }





  render(){
    const {activeIndex} = this.state
    return(
      <React.Fragment>
          <Accordion>

                <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleSports}>
                  <Icon name='dropdown' />
                  Sports
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <p>
                    Return Sports API
                  </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleEvents}>
                  <Icon name='dropdown' />
                  Events Near Me
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <p>
                    Return Events API
                  </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleTraffic}>
                  <Icon name='dropdown' />
                  Traffic
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                  <p>
                    Return Traffic API
                  </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleRestaurants}>
                  <Icon name='dropdown' />
                  Restaurants near me
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                  <p>
                    Return Restaurants API
                  </p>
                </Accordion.Content>




          </Accordion>
      </React.Fragment>
    )
  }


}


export default Activity;
