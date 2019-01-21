import React, { Component } from 'react';
import {Grid, Segment} from 'semantic-ui-react';
import Weather from './Weather';
import Stocks from './Stocks'
import Sports from './Sports'
import News from './News'
import Calendar from './Calendar'
import Activity from './Activity'



const MainGrid = () => (
  <Grid columns={3} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment><News /></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment><Weather /></Segment>
        <Segment><Stocks /></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment><Activity /></Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid columns={1} >
      <Calendar />
    </Grid>
  </Grid>
)



export default MainGrid;
