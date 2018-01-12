import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import header from './header.js';

import ProductInputForm from './ProductInputForm.js';

import { Button, Jumbotron, Panel, Grid, Row, Col, Table, Image, Thumbnail, Checkbox, PanelGroup, Accordion} from 'react-bootstrap';

const Products = props =>
<Grid>
    <Row>
    <Col xs={6} md={2}>
      <Thumbnail src={require('./img/Casement.jpg')}>
        <h5>smart window</h5>
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
      <Thumbnail src={require('./img/HVAC.JPG')}>
        <h5>Prefab HVAC system</h5>
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
      <Thumbnail src={require('./img/easy_panel.jpg')}>
        <h5>prefabricated panel</h5>
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
      <Thumbnail src={require('./img/HVAC_4.jpg')}>
        <h5>Heatpump</h5>
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
      <Thumbnail src={require('./img/Heatpump.JPG')}>
        <h5>Heatpump</h5>
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
        <Button>Start Calculation</Button> 
    </Col>
    <ProductInputForm />
    </Row>
    <hr id="line"/>
</Grid> 

export default Products;