import React from 'react';
import {PieChart} from 'react-d3-basic';
import { inherits } from 'util';

export default class Donut2 extends React.Component {

constructor(props) {
    super(props);
    this.state = {
                   chartSeries : [
                    {
                      "field": "Winter Clothes [hr]",
                      "name" : "Winter Clothes [hr]",
                    },
                    {
                      "field": "Summer Clothes [hr]",
                      "name" : "Summer Clothes [hr]",
                    },
                    {
                      "field": "Summer or Winter Clothes [hr]",
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
      <h3> Time_Not_Comfortable (ASHRAE_55-2004)</h3>
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