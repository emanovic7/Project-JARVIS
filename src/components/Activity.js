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
    alert('sports')
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
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
                    be found as a welcome guest in many households across the world.
                  </p>
                </Accordion.Content>




          </Accordion>
      </React.Fragment>
    )
  }


}


export default Activity;
