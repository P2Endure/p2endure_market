import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './styles/css/app.css';
import './styles/css/responsive.css';
import AddProductForm from './AddProductForm';
//import Form from './DynamicForm/Forms/windowForm';
import NavBar from './styles/components/NavBar.js';
//import DrawerButton from './DynamicForm/Forms/toggleDrawerButton.js'
import Header from './styles/components/index.js';
import Sidebar from './styles/components/Sidebar.js';
import Jumbo from './styles/components/jumbo.js';
import Footer from './styles/components/footer.js';
import Products from './styles/components/productBar.js';
import Model from './model/model.js';
import Diagram from './model/diagram.js';
import MainContent from './MainContent';
import Data_Screen from './Data_Screen.js';
import { Row, Col} from 'react-bootstrap';


class App extends Component {

//state and onSubmit to integrate the diverent forms of the products  
/*   state = {
    fields:{}
  };

  onSubmit = (fields) => {
    this.setState({fields});
    console.log('App component got: ', fields);
  }; */
constructor(props){
  super();
  this.state ={
    isLoading: true,
    buildingElements: []
  }
}

componentDidMount(){
  this.fetchData();
}

// fetchData(){
//   var json2 = require('./model/data/ProductData/Material.json')
//   for (var i in json2){
//     this.json2([i]["Material"], ["Name"])
//     console.log('IDF max field ' + JSON.stringify(json2[i]["Material"], ["Name"]))
//   }
// }

// changeData(){
  
//     var json2 = require('./model/data/BuildingDataBevorRenovation/Arcona_BEM.json')
//     for (var i in json2){
//     console.log(JSON.stringify(json2[i]["WindowMaterial:Shade"]));
//     }
//   };


render(){
  return( 
    <div className="App">
{/*       <Form onSubmit ={fields => this.onSubmit(fields)}/>
        <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p>  */}
      <NavBar/>
      <Sidebar/>
      <Jumbo/>
      <AddProductForm/>
      {/* <MuiThemeProvider>
        <DrawerButton />
      </MuiThemeProvider> */}
      <Products/>
      {/* <Button onClick ={this.changeData}>
          {this.setState ? '1' : '2'}
        </Button>   */}
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
