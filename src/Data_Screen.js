import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import './styles/css/app.css';
import './styles/css/responsive.css';

import Line from './model/diagrams/line_2.jsx';
import Bar from  './model/diagrams/bar.jsx';
import lineTest_2 from './model/data/lineTest_2.json';
import barTest_2 from './model/data/barTest_2.json';
import Donut from './model/diagrams/donut_2.jsx';
import pieTest from './model/data/pieTest_2.json';
import Scatter from './model/diagrams/Scatter_2.jsx';
import NavBar from './styles/components/NavBar.js';
import Header from './styles/components/index.js';
import Jumbo from './styles/components/jumbo.js';
import Footer from './styles/components/footer.js';
import Products from './styles/components/productBar.js';
import Model from './model/model.js';
import Diagram from './model/diagram.js';
import MainContent from './MainContent';

import img from  'react';
import src from 'react';

import { Button, Jumbotron, Panel, Grid, Row, Col, Table, Image, Thumbnail, Checkbox, PanelGroup, Accordion} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

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
        <Jumbotron id="jumbo">
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
      <Thumbnail src={require('./styles/components/img/Casement.jpg')}>
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
      <Thumbnail src={require('./styles/components/img/HVAC.JPG')}>
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
      <Thumbnail src={require('./styles/components/img/easy_panel.jpg')}>
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
      <Thumbnail src={require('./styles/components/img/HVAC_4.jpg')}>
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
      <Thumbnail src={require('./styles/components/img/Heatpump.JPG')}>
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

  <div className="App">
{/*       <Form onSubmit ={fields => this.onSubmit(fields)}/>
        <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p>  */}
      <NavBar/> 
      <Sidebar/>
      <Jumbo/>
      <MuiThemeProvider>
        <DrawerButton />
      </MuiThemeProvider>
      <Products/>
{/*       <Button onClick ={this.changeData}>
          {this.setState ? '1' : '2'}
        </Button>  */}
      <LinkContainer to="/Data_Screen">
       <Button id="calculation">Start Calculation</Button>
      </LinkContainer> 
    <div className="container-fluid">
      <Row>
        <Col  md={4} lg={5}>
          <Model/>
        </Col >
      </Row>
          <Diagram/>            
    </div>;
      <Footer/>  
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