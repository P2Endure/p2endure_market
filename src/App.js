import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import './styles/css/app.css';
import './styles/css/responsive.css';

import NavBar from './styles/components/header.js';
import Jumbo from './styles/components/jumbo.js';
import Footer from './styles/components/footer.js';
import Products from './styles/components/productBar.js';
import Model from './model/model.js';
import Diagram from './model/diagram.js';

import img from  'react';
import src from 'react';
import Data_Screen from './Data_Screen.js';

import { Button, Jumbotron, Panel, Grid, Row, Col, Table, Image, Thumbnail, Checkbox, PanelGroup, Accordion} from 'react-bootstrap';

class App extends Component {

render(){
  return( 
    <div className="app">
      <Jumbo/>
      <Products/>  
    <div className="container-fluid">
      <Row>
        <Col  md={4} lg={5}>
          <Model/>
        </Col>
          <Diagram/>            
      </Row>
    </div>;
      <Footer/>  
    </div>
    )
  }
};

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Data_Screen" component ={Data_Screen} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
