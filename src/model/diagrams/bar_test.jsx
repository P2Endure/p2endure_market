import React from 'react';
import {BarChart} from 'react-d3-basic';

export default class Bar extends React.Component{ 
  constructor(props){
    super(props);
    this.state ={
      chartSeries : [
        {
          field: 'value',
          name: 'Heating',
          categoricalColors: '#A07A19',
        },
        {
          field: 'value',
          name: 'Cooling',
          categoricalColors: '#A07A44',
        }
        ],
      x : function(d) { return d.name; },
      xScale : 'ordinal',
      //var xLabel : "Case";
      yLabel : 'EnergySaving',
      //var yTicks : [10, "%"];
      width : 500,
      height : 300,
      title : 'Bar Chart',
    }
}

render(){
return (
  <div className="panel">
    <div className="panel-inlay">
      <h3>&#8721; End Uses</h3>
    </div>   
        <div>     
            {this.props.data && <BarChart
              title= {this.statetitle}
              data= {this.props.data}
              width= {this.state.width}
              height= {this.state.height}
              chartSeries = {this.state.chartSeries}
              x= {this.state.x}
              //xLabel= {xLabel}
              xScale= {this.state.xScale}
              //yTicks= {yTicks}
              yLabel = {this.state.yLabel}
              />}
        </div>
    </div>    
    );
  }
}