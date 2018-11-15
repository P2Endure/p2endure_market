import React from 'react';
import {PieChart} from 'react-d3-basic';

export default class Donut extends React.Component {

constructor(props) {
    super(props);
    this.state = {
                   chartSeries : [
                    {
                      "field": "Room 1",
                      "name": "Room 1"
                    },
                    {
                      "field": "Room 2",
                      "name": "Room 2"
                    },
                    {
                      "field": "Room 3",
                      "name": "Room 3"
                    },
                    {
                      "field": "Room 4",
                      "name": "Room 4"
                    }
                  ],
            value: function(d){return +d.Energy_Saved_Year_kWH; },
            name: function(d){return d.Room; },
            width: 300,
            height: 300, 
            innerRadius: 10,    
                };
}
render(){
  return (
  <div className="panel">
    <div className="panel-inlay">
      <h3>&#8364; Single Costs</h3>
    </div>   
    <PieChart
      data= {this.props.data}
      width= {this.state.width}
      height= {this.state.height}
      chartSeries= {this.state.chartSeries}
      value = {this.state.value}
      name = {this.state.name}
      innerRadius = {this.state.innerRadius}
      />
  </div >     
    );
  } 
}