var React = require('react');
var ReactDOM = require('react-dom');
var ScatterPlot = require('react-d3-basic').ScatterPlot;

export default class Scatter extends React.Component {

   constructor(props) {
    super(props);
    this.state = { chartData: require('../data/lineTest.json'),
                  chartSeries: [
                    {
                      field: 'Room 1',
                      name: 'Room 1',
                      symbol: 'diamond',
                      symbolSize: 6
                    },
                    {
                      field: 'Room 2',
                      name: 'Room 2',
                      symbol: 'cross',
                      symbolSize: 6
                    },
                    {
                      field: 'Room 3',
                      name: 'Room 3',
                      symbol: 'cross',
                      symbolSize: 3
                    },
                    {
                      field: 'Room 4',
                      name: 'Room 4',
                      symbol: 'cross',
                      symbolSize: 1
                    }
                  ],
                x: function(d) { return d.index; },
                xScale: 'ordinal',
                width: 400,
                height: 300,
       }     
  }    

render(){
  return(
      <ScatterPlot
      data= {this.state.chartData}
      width= {this.state.width}
      height= {this.state.height}
      //margins= {this.state.margins}
      chartSeries= {this.state.chartSeries}
      x= {this.state.x}
      xScale= {this.state.xScale}
    />);
  }
}