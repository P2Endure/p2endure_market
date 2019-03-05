import React from 'react';
import Bar from './diagrams/bar_test.jsx';
import Donut from './diagrams/donut.jsx';
import Donut2 from './diagrams/donut2.jsx';
import Costs from './diagrams/costs.jsx';
import {Row, Col } from 'react-bootstrap';
import Model from './model.js';
import uploadData from '../upload/modelOutput.json';

export default class Diagram extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      valueSingle : uploadData.EAp2_6_Energy_Use_Summary.Additional,
    }
  }

  changeTest(){
    this.setState({
      valueBar : uploadData.End_Uses.Cooling,
      valueSingle : uploadData.EAp2_6_Energy_Use_Summary.Additional,
    })
  }

render(){
  return(
    <div>
{/*     <button  onClick={()=>this.changeTest()}>
    Show simulation results
    </button> */}
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
        {/* <Col md={4} lg={8}>    
        <Scatter 
            data = {this.state.testLine}
          />
        </Col>  */}

</div>
    )
  }
}