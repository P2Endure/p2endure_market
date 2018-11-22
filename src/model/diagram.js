import React from 'react';
import Line from './diagrams/Line.jsx';
import Bar from './diagrams/bar_test.jsx';
import Donut from './diagrams/donut.jsx';
import Scatter from './diagrams/Scatter.jsx';
import {Row, Col } from 'react-bootstrap'; 
import data_2 from './data/barTest_2.json';
import data_1 from './data/barTest.json';
import data_3 from './data/lineTest_2.json';
import data_4 from './data/lineTest.json';
import data_5 from './data/pieTest.json';
import data_6 from './data/pieTest_2.json';

export default class Diagram extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      test : data_1.testParameter,
      testLine : data_3.testParameter,
      testPie : data_5.testParameter
    }
  }

  changeTest(){
    this.setState({
      test : data_2.testParameter,
      testLine : data_4.testParameter,
      testPie : data_6.testParameter
    })
  }


render(){
  return(
    <div>
    <button  onClick={()=>this.changeTest()}>
    TestButton
    </button>
 
    <Row>
        <Col md={8} lg={8}>
          <Bar 
           data = {this.state.test}
          />    
        </Col>
        <Col md={4} lg={4}>
         <Line 
          data = {this.state.testLine}
         />
        </Col>
    </Row>
    <Row>
        <Col md={8} lg={4}>  
          <Donut 
            data = {this.state.testPie}
          />
        </Col>  
        <Col md={4} lg={8}>    
        <Scatter 
            data = {this.state.testLine}
          />
        </Col>
    </Row>
</div>
    )
  }
}