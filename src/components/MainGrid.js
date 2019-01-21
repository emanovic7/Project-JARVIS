import React, { Component } from 'react';
import {Grid, Segment} from 'semantic-ui-react';
import Weather from './Weather';
import Stocks from './Stocks'
import Sports from './Sports'

import News from './News'



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
        <Segment>Calendar</Segment>
        <Segment><Sports /></Segment>
        <Segment>Traffic</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)



export default MainGrid;
