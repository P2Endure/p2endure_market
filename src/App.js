import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/css/app.css';
import './styles/css/responsive.css';

import NavBar from './styles/components/stilComponents/NavBar';
import Sidebar from './styles/components/stilComponents/Sidebar';
import Jumbo from './styles/components/stilComponents/jumbo';
import Uploader from './styles/components/uploader';
import Footer from './styles/components/stilComponents/footer';
import Products from './styles/components/stilComponents/productBar';
import Model from './model/model.js';
import Diagram from './model/diagram.js';
import { Row, Col} from 'react-bootstrap';


class App extends Component { 

constructor(props){
  super(props)
  this.state = {filename: null}
}

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
};

render(){
  return( 
    <div className="App">
      <NavBar/>
      <Sidebar/>
      <Jumbo/>
   
      <Products/>
      <Uploader/>
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
