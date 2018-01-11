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
    <Col  md={4} lg={3}>
              <a className="services">
        <h1>Costs</h1>
            <h3>Renovation Costs</h3>
                <Line />
            <h3>Life cycle Costs</h3>
                <Bar />
        </a> 
    </Col>
    <Col  md={4} lg={4}>
        <a className="services">
            <h1>Your Project</h1>
            <h3>Renovation Costs</h3>
                <Donut />
            <h3>Heating and Ventilation</h3>
                <Scatter />
        </a>
    </Col>
</div>;

export default Diagram;  