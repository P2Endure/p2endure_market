import React, {Component} from 'react';
import {Link} from 'react-router';
import ReactDOM from 'react-dom';
import header from './styles/header.js';
import img from  'react';
import src from 'react';
import './styles/app.css';
import './styles/responsive.css';
import {LinkContainer} from 'react-router-bootstrap';
import Line from './diagrams/line_2.jsx';
import lineTest_2 from './data/lineTest_2.json';
import barTest_2 from './data/barTest_2.json';
import Bar from './diagrams/bar_2.jsx';
import Donut from './diagrams/donut_2.jsx';
import pieTest from './data/pieTest_2.json';
import Scatter from './diagrams/Scatter_2.jsx';
import { Button, Jumbotron, Panel, Grid, Row, Col, Table, Image, Thumbnail, Checkbox, PanelGroup, Accordion } from 'react-bootstrap';


class Data_Screen extends React.Component{

  constructor(props){
    super(props)
    this.state = {};
    }

    getInitialState() {
    return {
      activeKey: '1'
    };
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render (){
    return(
    <div className="app">
    <div id="navbar"></div>
     <Jumbotron id="jumbo" fluid>
              {this.props.children}
        <h3>Welcome to the</h3> <h1>P2Endure E-Marketplace</h1>
        <Accordion>
          <Panel header="Info" eventKey="1">
            Hier Text!!!
          </Panel>
        </Accordion>
      </Jumbotron>

   <Grid>
    <Row>
    <Col xs={6} md={2}>
      <Thumbnail src={require('./Casement.jpg')}>
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
      <Thumbnail src={require('./HVAC.JPG')}>
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
      <Thumbnail src={require('./easy_panel.jpg')}>
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
      <Thumbnail src={require('./HVAC_4.jpg')}>
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
      <Thumbnail src={require('./Heatpump.JPG')}>
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
       <LinkContainer to="/About_Screen">
          <Button id="calculation">Start Calculation</Button>
      </LinkContainer>
    </Col>
    </Row>
    <hr id="line"/>
  </Grid>

   <div className="container-fluid">
  <Row>
        <Col  md={4} lg={5}>
          <a className="sketchfab-embed-wrapper">
                  <iframe  width="500" height="350" src="https://sketchfab.com/models/75294282cf61466c94e36fe44db791f9/embed" frameBorder="0"></iframe>
          </a>
        </Col>
        <Col  md={4} lg={3}>
          <a className="services">
                  <h1>Costs</h1>
                    <h3>Renovation Costs</h3>
                      <Line />
                    <h3>Life cycle Costs</h3>
                      <Bar />
          </a>
        </Col>
        <Col  md={4} lg={4}>
          <a className="services">
                  <h1>Your Project</h1>
                    <h3>Renovation Costs</h3>
                      <Donut />
                    <h3>Heating and Ventilation</h3>
                      <Scatter />
          </a>
        </Col>
  </Row>
 </div>

          <footer>
            <section className="textf">
              <h2>Impressum</h2>
                <p>
                  The P2Endure E-Marketplace is under developing by Technical University Berlin.
                </p>
            </section>
          <section className="textcon">
            <h2>Contact </h2>
              <p>
                Email: e-market@tu-berlin.com
                Phone: 000-000-00
                Adress: Gustav Meyer Allee 18, Berlin
              </p>
          </section>
        </footer>
      </div>
    )
  }
}


export default Data_Screen;

