import React, { Component } from 'react';

import { Button, Panel, Grid, Row, Col, Thumbnail, Checkbox, Accordion } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class Products extends Component{
constructor(props){
  super(props)
    this.state
};

render(){
return(
<div className="products"> 
<Grid>
  <Row>
    <Col xs={6} md={2}>
      <Thumbnail className="thumbNail" src={require('./img/Casement.jpg')} >
        <h6>smart window</h6>
          <Accordion>
            <Panel header="More" eventKey="2">
              Windows that can be rotated by 180° to reduce the thermal radiation
            </Panel>
          </Accordion>
        <p>
          <Checkbox inline></Checkbox>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={2}>
      <Thumbnail className="thumbNail" src={require('./img/HVAC.JPG')}>
        <h6>Prefab HVAC system</h6>
        <Accordion>
          <Panel header="More" eventKey="3">
            PnP MEP/HVAC engine for deep renovation
        </Panel>
        </Accordion>
        <p>
          <Checkbox inline></Checkbox>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={2}>
      <Thumbnail className="thumbNail" src={require('./img/easy_panel.jpg')} alt="242x200">
        <h6>prefabricated panel</h6>
        <Accordion>
          <Panel header="More" eventKey="4">
           Hier Text!!!
          </Panel>
        </Accordion>
        <p>
          <Checkbox inline></Checkbox>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={2}>
      <Thumbnail className="thumbNail" src={require('./img/RAtW.jpg')}>
        <h6>Heatpump</h6>
        <Accordion>
          <Panel header="More" eventKey="5">
             Transfers heat energy from a source of heat to a destination
          </Panel>
        </Accordion>
        <p>
          <Checkbox inline></Checkbox>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={2}>
      <Thumbnail className="thumbNail" src={require('./img/Heatpump.JPG')}>
        <h6>Heatpump</h6>
        <Accordion>
          <Panel header="More" eventKey="6">
             Transfers heat energy from a source of heat to a destination
          </Panel>
        </Accordion>
        <p>
          <Checkbox inline></Checkbox>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={2}>
      <LinkContainer to="/Data_Screen">
       <Button id="calculation">Start Calculation</Button>
      </LinkContainer> 
    </Col>
   </Row>
  <hr id="line"/>
</Grid> 
</div>
  )}
}