import { Button, Jumbotron, Panel, Grid, Row, Col, Table, Image, Thumbnail, Checkbox, PanelGroup, Accordion} from 'react-bootstrap';
import {BarChart} from 'react-d3-basic';
 
var React = require('react');
var ReactDOM = require('react-dom');

export default class Bar extends React.Component {

constructor(props) {
    super(props);
    this.state = { chartData: require('../data/barTest.json'),
       chartSeries: [
                     {
                       field: 'EnergySaving',
                       width: 400,
                       height: 300,
                       title: "Bar Chart",
                    }
                    ],
                    x: function(d) { return d.case; },
                    xScale: 'ordinal',
                    xLabel: "Case",
                    yLabel: "EnergySaving",
                    //yTicks: [10, "%"],
                    width: 900,
                    height: 300,
                    title: "Bar Chart"
                }
            }

render() { 
 return (
  <div className="panel">
    <div className="panel-inlay">
      <h3>&#10066; Life cycle Costs</h3>
    </div>    
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
      />
  </div>);
  }
}