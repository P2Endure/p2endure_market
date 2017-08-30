import { Button, Jumbotron, Panel, Grid, Row, Col, Table, Image, Thumbnail, Checkbox } from 'react-bootstrap'; 
import props from 'react';


var React = require('react');
var ReactDOM = require('react-dom');
var BarChart = require('react-d3-basic').BarChart;

export default class Bar extends React.Component{ 

constructor(props) {
    super(props);
    this.state = { chartData: require('../data/letter.json'),
      chartSeries: [
                    {
                      field: 'EnergySaving',
                      name: 'EnergySaving'
                     }
                    ],
                x: function(d) { return d.case; },
                    	xScale: 'ordinal',
                      xLabel: "Case",
                      yLabel: "EnergySaving",
                      //yTicks: [10, "%"],
                      width: 400,
                      height: 300,
                      title: "Bar Chart",
              }; 
} 

                
 render() {
      return ( 
    <BarChart
      title= {this.state.title}
      data= {this.state.chartData}
      width= {this.state.width}
      height= {this.state.height}
      chartSeries = {this.state.chartSeries}
      x= {this.state.x}
      xLabel= {this.state.xLabel}
      xScale= {this.state.xScale}
      //yTicks= {this.state.yTicks}
      yLabel = {this.state.yLabel}
/>);
      }
}
