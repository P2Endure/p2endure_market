import React from 'react';
import {ScatterPlot} from 'react-d3-basic';

export default class Scatter extends React.Component {

   constructor(props) {
    super(props);
    this.state = { 
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
                width: 900,
                height: 300,
       }     
  }    

render(){
  return(
    <div className="panel">
      <div className="panel-inlay">
        <h3>&#8721; Heating and Ventilation</h3>
      </div>
      <ScatterPlot
      data= {this.props.data}
      width= {this.state.width}
      height= {this.state.height}
      //margins= {this.state.margins}
      chartSeries= {this.state.chartSeries}
      x= {this.state.x}
      xScale= {this.state.xScale}
    />
    </div>
    );
  }
}