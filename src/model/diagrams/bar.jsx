import { Button, Jumbotron, Panel, Grid, Row, Col, Table, Image, Thumbnail, Checkbox, PanelGroup, Accordion} from 'react-bootstrap';
import {BarChart} from 'react-d3-basic';
 
var React = require('react');
var ReactDOM = require('react-dom');

export default class Bar extends React.Component {

constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = { chartData: require('../data/barTest_2.json'),
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
                    width: 400,
                    height: 300,
                    title: "Bar Chart"
                }
            }
                handleClick() {
                        this.setState(prevState => ({
                          chartData: require('../data/barTest.json')
                        }));
                  };
                    
                    render() {
                        
                        return (
                               <div>    
                               <Button onClick ={this.handleClick}>
                              {this.setState ? 'Start Calculation' : 'Start new calculation'}
                                </Button>    
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