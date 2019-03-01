import React from 'react';
import {BarChart} from 'react-d3-basic';
import uploadData from '../../upload/modelOutput.json';

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
        ],
      valueBar : uploadData.End_Uses.Heating,
      x : function(d) { return d.name; },
      xScale : 'ordinal',
      //var xLabel : "Case";
      yLabel : 'EnergySaving',
      //var yTicks : [10, "%"];
      width : 800,
      height : 300,
      title : 'Bar Chart',
    }
}

  //handle Change for bar chart
  handleHeatinChange(){
    this.setState({
      valueBar : uploadData.End_Uses.Cooling,
    })
  }

  handleCoolingChange(){
    this.setState({   
      valueBar : uploadData.End_Uses.Heating,
    })
  }

  handleLightningChange(){
    this.setState({   
      valueBar : uploadData.End_Uses.Interior_Lighting,
    })
  }

render(){
return (
  <div className="panel">
    <div className="panel-inlay">
      <h5>&#8721; End Uses</h5>
      <form>
        <select>
          <option value="heating" onClick={()=>this.handleCoolingChange()}>Heating</option>
          <option value="cooling" onClick={()=>this.handleHeatinChange()}>Cooling</option>
          <option value="cooling" onClick={()=>this.handleLightningChange()}>Interior Lighting</option>
        </select>
      </form>
    </div>   
        <div>     
            <BarChart
              title= {this.statetitle}
              data= {this.state.valueBar}
              width= {this.state.width}
              height= {this.state.height}
              chartSeries = {this.state.chartSeries}
              x= {this.state.x}
              //xLabel= {xLabel}
              xScale= {this.state.xScale}
              //yTicks= {yTicks}
              yLabel = {this.state.yLabel}
              />
        </div>
    </div>    
    );
  }
}