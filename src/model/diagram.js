import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Line from './diagrams/Line.jsx';
import Bar from './diagrams/bar.jsx';
import Donut from './diagrams/donut.jsx';
import Scatter from './diagrams/Scatter.jsx';

import barTest from './data/barTest.json';
import lineTest from './data/lineTest.json';
import pieTest from './data/pieTest.json';

import { Button, Jumbotron, Panel, Grid, Row, Col, Table, Image, Thumbnail, Checkbox } from 'react-bootstrap'; 


const Diagram = props => 
<div>
    <Row>
        <Col md={6} lg={6}>
          <a>
            <Line />
            <Bar />   
          </a>
        </Col>
        <Col md={6} lg={6}> 
          <a>
            <Donut />
            <Scatter />
          </a>
        </Col>
    </Row>    
</div>;

export default Diagram;  