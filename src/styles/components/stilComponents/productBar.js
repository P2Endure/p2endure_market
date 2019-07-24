import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'
import {Panel, Grid, Row, Col, Thumbnail, Accordion } from 'react-bootstrap';
import { Collapse } from 'react-collapse';
import materialData from '../../../model/data/ProductData/Material';
import IdfConverter from '../../../model/idfConverterOriginal';

export default class Products extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isOpened: this.props.isOpened, paragraphs: 0
    }
  }

  static propTypes = {
    isOpened: PropTypes.bool
  };

  static defaultProps = {
    isOpened: false
  };

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


render(){
const {isOpened} = this.state;
return(
<div className="products"> 
<Grid>
  <Row>
    <Col xs={6} md={2}>
      <Thumbnail className="thumbNail" src={require('../img/Casement.jpg')} >
        <h6>Smart window</h6>
          <div>
            <div className="config">
              <label className="label"> More
                <input className="input"
                        type="checkbox"
                        checked={isOpened}
                        onChange={({target: {checked}}) => this.setState({isOpened: checked})}/>
              </label> 
            </div>
          </div>
          <Collapse isOpened={isOpened}>
            <h6>
              Windows that can be rotated by 180° to reduce the thermal radiation
            </h6>
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
        <div>
            <div className="config">
              <label className="label">More
                <input className="input"
                        type="checkbox"
                        checked={isOpened}
                        onChange={({target: {checked}}) => this.setState({isOpened: checked})}/>
              </label> 
            </div>
          </div>
          <Collapse isOpened={isOpened}>
            <h6>
              PnP MEP/HVAC engine for deep renovation
            </h6>
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
        <div>
            <div className="config">
              <label className="label">More
                <input className="input"
                        type="checkbox"
                        checked={isOpened}
                        onChange={({target: {checked}}) => this.setState({isOpened: checked})}/>
              </label> 
            </div>
          </div>
          <Collapse isOpened={isOpened}>
            <h6>
                Prefab panel
            </h6>
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
        <div>
            <div className="config">
              <label className="label"> More
                <input className="input"
                        type="checkbox"
                        checked={isOpened}
                        onChange={({target: {checked}}) => this.setState({isOpened: checked})}/>
              </label> 
            </div>
          </div>
          <Collapse isOpened={isOpened}>
            <h6>
              Transfers heat energy from a source of heat to a destination 
            </h6>
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
        <div>
            <div className="config">
              <label className="label">More
                <input className="input"
                        type="checkbox"
                        checked={isOpened}
                        onChange={({target: {checked}}) => this.setState({isOpened: checked})}/>
              </label> 
            </div>
          </div>
          <Collapse isOpened={isOpened}>
            <h6>
              Transfers heat energy from a source of heat to a destination
            </h6>
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