import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/css/app.css';
import './styles/css/responsive.css';
import NavBar from './styles/components/NavBar.js';
import Sidebar from './styles/components/Sidebar.js';
import Jumbo from './styles/components/jumbo.js';
import Footer from './styles/components/footer.js';
import Products from './styles/components/productBar.js';
import Model from './model/model.js';
import Diagram from './model/diagram.js';
import { Row, Col} from 'react-bootstrap';
import CompareValues from './MainContent/CompareValues/compareValues.js';
import DrawerButton from './MainContent/ProductList/toggleDrawerButton.js';

class App extends Component {

constructor(props){
  super();
  this.state ={
    isLoading: true,
    buildingElements: []
  }
}


render(){
  return( 
    <div className="App">
      <NavBar/> 
      <Sidebar/>
      <Jumbo/>
      <DrawerButton/>
      <Products/>  
    <div className="container-fluid">
      <Row>
        <Col  md={4} lg={2}>
          <Model/>
        </Col >
        <Col  md={4} lg={10}>
 
        </Col >
      </Row>
        <Diagram/>            
    </div>
      <Footer/>
      <CompareValues/>
    </div>
    )
  }
};

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
