import React from 'react';
import { Collapse } from 'reactstrap';
import ReactDOM from 'react-dom';
import {LinkContainer} from 'react-router-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import Bar from './diagrams/bar_test.jsx';
import Donut from './diagrams/donut.jsx';
import Donut2 from './diagrams/donut2.jsx';
import Costs from './diagrams/costs.jsx';
import {Row, Col, Button } from 'react-bootstrap';
import Model from './model.js';
import uploadData from '../upload/modelOutput.json';
import Uploader from '../styles/components/uploader.js';

export default class Diagram extends React.Component{

  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      valueSingle : uploadData.EAp2_6_Energy_Use_Summary.Additional,
      collapse: false
    }
  }

  changeTest(){
    this.setState({
      valueBar : uploadData.End_Uses.Cooling,
      valueSingle : uploadData.EAp2_6_Energy_Use_Summary.Additional,
    })
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

render(){
  return(
    <div>
    <Uploader/>
  
      <button className="action-Button_3" onClick={this.toggle} >Present results</button>
        <Collapse isOpen={this.state.collapse}>
          <div className="line">
            <Row>
              <Col md={4} lg={4}>
                <Model/>
              </Col>
              <Col md={2} lg={4}>
                <div>
                  <div className="panel">
                    <div className="panel-inlay">
                        <h3>&#8721; Costs</h3>
                    </div> 
                  <div>
                      <div>{this.state.valueSingle[0].name} :</div>
                      <div>{this.state.valueSingle[0].value + "kWh" + "--" + Math.round(this.state.valueSingle[0].value * 0.144) + "Euro"}</div>
                      <div>{this.state.valueSingle[1].name} :</div>
                      <div>{this.state.valueSingle[1].value + "kWh" + "--" + Math.round(this.state.valueSingle[1].value * 0.144) + "Euro"}</div>
                  </div>
                </div>
              </div>
            <div>
              <Costs/>
            </div> 
            </Col>
            <Col md={4} lg={4}>
              <div>
                <Donut/>
              </div>
            </Col>
            </Row>
          </div>
          <div className="line">
            <Row>
              <Col md={6} lg={8}>  
                <div>
                  <Bar/>
                </div>  
              </Col>
              <Col md={6} lg={4}>  
              <div>
                  <Donut2 />
              </div>
              </Col>  
            </Row>
          </div>  
        </Collapse>   
      </div>
    )
  }
};