import React, { Component } from 'react';
import axios from 'axios';
import { Button, Panel, Grid, Row, Col, Thumbnail, Checkbox, Accordion } from 'react-bootstrap';

export default class Products extends Component{

   state = {
      isFirst: false,
      isSecond: false,
      isThird: false,
      isFourths: false,
      isFiths: false
  
};

toggleChangeFirst = () => {
  this.setState(prevState => ({
    isFirst: !prevState.isFirst,
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
        .then(res => console.log(res.data));
    }

render(){
return(
<div className="products"> 
<Grid>
  <Row>
    <Col xs={6} md={2}>
      <Thumbnail className="thumbNail" src={require('./img/Casement.jpg')} >
        <h6>smart window</h6>
          <Accordion>
            <Panel header="More" eventKey="2">
              Windows that can be rotated by 180° to reduce the thermal radiation
            </Panel>
          </Accordion>
        <p>
        <form onSubmit = {this.onSubmit}>
              <input type="checkbox"
                checked={this.state.isFirst}
                onChange={this.toggleChangeFirst}
              />
 
        </form>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={2}>
      <Thumbnail className="thumbNail" src={require('./img/HVAC.JPG')}>
        <h6>Prefab HVAC system</h6>
        <Accordion>
          <Panel header="More" eventKey="3">
            PnP MEP/HVAC engine for deep renovation
        </Panel>
        </Accordion>
        <p>
        <form onSubmit = {this.onSubmit}>
              <input type="checkbox"
                checked={this.state.isSecond}
                onChange={this.toggleChangeSecond}
              
              />
        </form>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={2}>
      <Thumbnail className="thumbNail" src={require('./img/easy_panel.jpg')} alt="242x200">
        <h6>prefabricated panel</h6>
        <Accordion>
          <Panel header="More" eventKey="4">
           Hier Text!!!
          </Panel>
        </Accordion>
        <p>
        <form onSubmit = {this.onSubmit}>
              <input type="checkbox"
                checked={this.state.isThird}
                onChange={this.toggleChangeThird}
              />
        </form>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={2}>
      <Thumbnail className="thumbNail" src={require('./img/RAtW.jpg')}>
        <h6>Heatpump</h6>
        <Accordion>
          <Panel header="More" eventKey="5">
             Transfers heat energy from a source of heat to a destination
          </Panel>
        </Accordion>
        <p>
        <form onSubmit = {this.onSubmit}>
              <input type="checkbox"
                checked={this.state.isFourths}
                onChange={this.toggleChangeFour}
              />
        </form>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={2}>
      <Thumbnail className="thumbNail" src={require('./img/Heatpump.JPG')}>
        <h6>Heatpump</h6>
        <Accordion>
          <Panel header="More" eventKey="6">
             Transfers heat energy from a source of heat to a destination
          </Panel>
        </Accordion>
        <p>
        <form onSubmit = {this.onSubmit}>
              <input type="checkbox"
                checked={this.state.isFiths}
                onChange={this.toggleChangeFive}
              />
        </form>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={2}>
    </Col>
   </Row>
   <button onClick={this.onSubmit} className="btn btn-primary">
              Submit         
    </button>
  <hr id="line"/>
</Grid> 
</div>
  )}
}