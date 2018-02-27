import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {BarChart} from 'react-d3-basic';
import ChartSeries from './chartSeries.js';
import { Button, Jumbotron, Panel, Grid, Row, Col, Table, Image, Thumbnail, Checkbox, PanelGroup, Accordion} from 'react-bootstrap';
import XValue from './XValue';

class Bar extends React.Component{ 

  render(){
    var chartData = require ('../data/barTest_2.json');
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
    <div className="panel">
      <div className="panel-inlay">
        <h3>&#10066; Life cycle Costs</h3>
      </div>    
        <BarChart
          title= {this.title}
          data= {this.chartData}
          width= {this.width}
          height= {this.height}
          chartSeries = {this.chartSeries}
          x= {this.x}
          xLabel= {this.xLabel}
          xScale= {this.xScale}
          //yTicks= {this.yTicks}
          yLabel = {this.yLabel}
          />
    </div>
    );
  };
}

export default Bar;