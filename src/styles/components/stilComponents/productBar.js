import React, { Component } from 'react';
import axios from 'axios';
import {Panel, Grid, Row, Col, Thumbnail, Accordion } from 'react-bootstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import materialData from '../../../model/data/ProductData/Material';
import IdfConverter from '../../../model/idfConverterOriginal';

export default class Products extends Component{
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

   state = {
      isFirst: false,
      isSecond: false,
      isThird: false,
      isFourths: false,
      isFiths: false,
    } 

toggleChangeFirst = () => {
  this.setState(prevState => ({
    isFirst: !prevState.isFirst,
    materialData:{materialData},
  }));
}

toggleChangeSecond = () => {
  this.setState(prevState => ({
    isSecond: !prevState.isSecond,
  }));
}

toggleChangeThird = () => {
  this.setState(prevState => ({
    isThird: !prevState.isThird,
  }));
}

toggleChangeFour = () => {
  this.setState(prevState => ({
    isFourths: !prevState.isFourths,
  }));
}

toggleChangeFive = () => {
  this.setState(prevState => ({
    isFiths: !prevState.isFiths,
  }));
}

onSubmit = (e) => {
  e.preventDefault();
  let arr = [];
  for (var key in this.state) {
    if(this.state[key] === true) {
      arr.push(key);
    }
  }
  let data = {
    check: arr.toString() 
  };
  axios.post('http://localhost:4000/checks/add', data)
        .then(res => console.log(res.data))
        .then("DATA ADDED!")
  }

 
change = e =>{
  this.setState({
      [e.target.name]: e.target.value
  });
};

toggle() {
  this.setState(state => ({ collapse: !state.collapse }));
}

render(){
return(
<div className="products"> 
<Grid>
  <Row>
    <Col xs={6} md={2}>
      <Thumbnail className="thumbNail" src={require('../img/Casement.jpg')} >
        <h6>smart window</h6>
          <Panel header="More" onClick={this.toggle} eventKey='5'></Panel>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody >
                  Windows that can be rotated by 180° to reduce the thermal radiation
                </CardBody>
              </Card>
            </Collapse>
        <form onSubmit = {this.onSubmit}>
              <input type="checkbox"
                checked={this.state.isFirst}
                onChange={this.toggleChangeFirst}
                value={console.log(this.state.materialData)} 
              />
        </form>
      </Thumbnail>
    </Col>
    <Col xs={6} md={2}>
      <Thumbnail className="thumbNail" src={require('../img/HVAC.JPG')}>
        <h6>Prefab HVAC system</h6>
        <Panel header="More" onClick={this.toggle} eventKey='4'></Panel>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody >
                PnP MEP/HVAC engine for deep renovation
              </CardBody>
            </Card>
          </Collapse>
        <form onSubmit = {this.onSubmit}>
              <input type="checkbox"
                checked={this.state.isSecond}
                onChange={this.toggleChangeSecond}
              />
        </form>
      </Thumbnail>
    </Col>
    <Col xs={6} md={2}>
      <Thumbnail className="thumbNail" src={require('../img/easy_panel.jpg')} alt="242x200">
        <h6>Fermacell Panel</h6>
        <Panel header="More" onClick={this.toggle} eventKey='1'></Panel>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody >
                Prefab panel
              </CardBody>
            </Card>
          </Collapse>
        <form onSubmit = {this.onSubmit}>
              <input type="checkbox"
                checked={this.state.isThird}
                onChange={this.toggleChangeThird}
              />
        </form>
      </Thumbnail>
    </Col>
    <Col xs={6} md={2}>
      <Thumbnail className="thumbNail" src={require('../img/RAtW.jpg')}>
        <h6>On-side facade</h6>
        <Panel header="More" onClick={this.toggle} eventKey='2'></Panel>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody >
                Transfers heat energy from a source of heat to a destination
              </CardBody>
            </Card>
          </Collapse>
        <form onSubmit = {this.onSubmit}>
              <input type="checkbox"
                checked={this.state.isFourths}
                onChange={this.toggleChangeFour}
              />
        </form>
      </Thumbnail>
    </Col>
    <Col xs={6} md={2}>
      <Thumbnail className="thumbNail" src={require('../img/Heatpump.JPG')}>
        <h6>Heatpump</h6>
        <Panel header="More" onClick={this.toggle} eventKey='3'></Panel>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody >
                Transfers heat energy from a source of heat to a destination
              </CardBody>
            </Card>
          </Collapse>
        <form onSubmit = {this.onSubmit}>
              <input type="checkbox"
                checked={this.state.isFiths}
                onChange={this.toggleChangeFive}
              />
        </form>
      </Thumbnail>
    </Col>
    <Col xs={6} md={2}>
    </Col>
   </Row>
   <IdfConverter/>
  <hr id="line"/>
</Grid> 
</div>
  )}
}