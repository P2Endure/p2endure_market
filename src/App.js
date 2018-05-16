import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/css/app.css';
import './styles/css/responsive.css';

//import Form from './DynamicForm/Forms/form.js';
import NavBar from './styles/components/NavBar.js';
import Header from './styles/components/index.js';
import Sidebar from './styles/components/Sidebar.js';
import Jumbo from './styles/components/jumbo.js';
import Footer from './styles/components/footer.js';
import Products from './styles/components/productBar.js';
import Model from './model/model.js';
import Diagram from './model/diagram.js';

import MainContent from './MainContent';

import img from  'react';
import src from 'react';
import Data_Screen from './Data_Screen.js';

import { Button, Jumbotron, Panel, Grid, Row, Col, Table, Image, Thumbnail, Checkbox, PanelGroup, Accordion, Navbar} from 'react-bootstrap';
import  {TextField} from 'material-ui';

class App extends Component {

//state and onSubmit to integrate the diverent forms of the products  
/*   state = {
    fields:{}
  };

  onSubmit = (fields) => {
    this.setState({fields});
    console.log('App component got: ', fields);
  }; */

render(){

  return( 
    <div className="App">
{/*   <Form onSubmit ={fields => this.onSubmit(fields)}/>
      <p>{JSON.stringify(this.state.fields, null, 2)}</p> */}
      <NavBar/>
      <Sidebar/>
      <Jumbo/>
      <Products/>
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
