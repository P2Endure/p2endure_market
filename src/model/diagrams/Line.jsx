import React from 'react';
import {LineChart} from 'react-d3-basic';

export default class Line extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    chartSeries : [
      {
        field: 'Room 1',
        name: 'Room 1',
        color: 'black',
        style: {
          "strokeWidth": 5,
          "strokeOpacity": .2,
          "fillOpacity": .2,
        }
      }
    ],

    x : function(d) { return d.index; },
    width : 400,
    height : 300,
  }
}

render() {
  return (
    <div className="panel">
      <div className="panel-inlay">
        <h3>&#8364; Energy Costs</h3>
      </div>    
       {this.props.data &&<LineChart
          legend ={true}
          x = {this.state.x}
          width= {this.state.width}
          height= {this.state.height}
          data= {this.props.data}
          chartSeries= {this.state.chartSeries}
        />}
      </div> 
      );
    }
}
