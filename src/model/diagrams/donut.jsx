import React from 'react';
import {PieChart} from 'react-d3-basic';

export default class Donut extends React.Component {

constructor(props) {
    super(props);
    this.state = {
                   chartSeries : [
                    {
                      "field": "Total Energy [kWh]",
                      "name" : "Total Energy [kWh]",
                    },
                    {
                      "field": "Energy Per Total Building Area [kWh/m2]",
                      "name" : "Energy Per Total Building Area [kWh/m2]",
                    },
                    {
                      "field": "Energy Per Conditioned Building Area [kWh/m2]",
                      "name" : "Energy Per Total Building Area [kWh/m2]",
                    },
                  ],
            value: function(d){return d.value; },
            name: function(d){return d.name; },
            width: 300,
            height: 300, 
            innerRadius: 10,
                };
}

render(){
  return (
  <div className="panel">
    <div className="panel-inlay">
      <h3 >&#8364; Site and Source Energy</h3>
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