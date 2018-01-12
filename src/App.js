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

import MainContent from './MainContent';

import img from  'react';
import src from 'react';
import Data_Screen from './Data_Screen.js';

import { Button, Jumbotron, Panel, Grid, Row, Col, Table, Image, Thumbnail, Checkbox, PanelGroup, Accordion} from 'react-bootstrap';

class App extends Component {

  state = {
    isFiltered: false,
    pendingProducts: "",
    products: []
  };
  
  lastProductId = 0;
  
  newProductId = () => {
    const id = this.lastProductId;
    this.lastProductId += 1;
    return id;
  };
  
  toggleProductProperty = (property, id) =>
  this.setState({
    products: this.state.products.map(product => {
      if (id === product.id) {
        return {
          ...product,
          [property]: !product[property]
        };
      }
      return product;
    })
  });

  toggleConfirmation = id =>
  this.toggleProductProperty("isConfirmed", id);

  removeProduct = id =>
  this.setState({
    products: this.state.products.filter(product => id !== product.id)
  });

  toggleEditing = id =>
  this.toggleProductProperty("isEditing", id);

  setName = (name, id) =>
  this.setState({
    products: this.state.products.map(product => {
      if (id === product.id) {
        return {
          ...product,
          name
        };
      }
      return product;
    })
  });

  toggleFilter = () =>
  this.setState({ isFiltered: !this.state.isFiltered });

  handleNameInput = e =>
  this.setState({ pendingProduct: e.target.value });

  newProductSubmitHandler = e => {
    e.preventDefault();
    const id = this.newProductId();
    this.setState({
      products: [
        {
          name: this.state.pendingProduct,
          isConfirmed: false,
          isEditing: false,
          id
        },
        ...this.state.products
      ],
      pendingProduct: ''
    });
  }

  getTotalShown = () => this.state.products.length;

  getAttendingProducts = () =>
    this.state.products.reduce(
      (total, product) => product.isConfirmed ? total + 1 : total,
      0
    );

render(){

  const totalProductListed = this.getTotalShown();
  const numberAttending = this.getAttendingProducts();
  const numberUnconfirmed = totalProductListed - numberAttending;

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
