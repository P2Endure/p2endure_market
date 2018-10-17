import React from 'react';
import Line from './diagrams/Line.jsx';
import Bar from './diagrams/bar_test.jsx';
import Donut from './diagrams/donut.jsx';
import Scatter from './diagrams/Scatter.jsx';
import {Row, Col } from 'react-bootstrap'; 
import StartSimulation from './startSimulation.js';
import data_2 from './data/barTest.json';

export default class Diagram extends React.Component{

render(){
  return(
    <div>
    <StartSimulation
      prop2={this.updateStateObject}
    />
    <Row>
        <Col md={8} lg={8}>
          <Bar />    
        </Col>
        <Col md={4} lg={4}>
         <Line />
        </Col>
    </Row>
    <Row>
        <Col md={8} lg={4}>  
          <Donut />
        </Col>     
        <Col md={4} lg={8}> 
          <Scatter />
        </Col>
    </Row>
</div>
    )
  }
}