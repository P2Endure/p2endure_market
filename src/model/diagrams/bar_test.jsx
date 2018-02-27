import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {BarChart} from 'react-d3-basic';
import ChartSeries from './chartSeries.js';
import { Button, Jumbotron, Panel, Grid, Row, Col, Table, Image, Thumbnail, Checkbox, PanelGroup, Accordion} from 'react-bootstrap';
import XValue from './XValue';

class Bar extends React.Component{ 

  handleClick() {
    this.setState(prevState => ({
      chartData: require('../data/barTest.json')
    }));
};

  render(){
    var chartData = require ('../data/barTest_2.json');
    this.handleClick = this.handleClick.bind(this);
    var chartSeries = [
                      {
                        field: 'EnergySaving',
                        name: 'EnergySaving',
                        categoricalColors: '#A07A19',
                      }
                      ];
    var x = function(d) { return d.case; };
    var xScale = 'ordinal';
    var xLabel = "Case";
    var yLabel = 'EnergySaving';
    //var yTicks = [10, "%"];
    var width = 900,
    var height = 300;
    var title = 'Bar Chart';
    

return (
    <div> 
        <Button onClick ={this.handleClick}>
          {this.setState ? 'Start Calculation' : 'Start new calculation'}
        </Button>     
        <BarChart
          title= {title}
          data= {chartData}
          width= {width}
          height= {height}
          chartSeries = {chartSeries}
          x= {x}
          xLabel= {xLabel}
          xScale= {xScale}
          //yTicks= {yTicks}
          yLabel = {yLabel}
          />
    </div>
    );
  };
}

export default Bar;