import React from 'react';
import {PieChart} from 'react-d3-basic';
import uploadData from '../../upload/modelOutput.json';

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
            valueDonut2 : uploadData.Time_Not_Comfortable_Based_on_Simple_ASHRAE_55_2004.Z01_S01_SLEEPINGROOM1,
            value: function(d){return d.value; },
            name: function(d){return d.name; },
            width: 300,
            height: 300, 
            innerRadius: 10,    
                };
}

//handle Change for donut2 chart
  handleZ01_S01_SLEEPINGROOM1Change(){
      this.setState({   
        valueDonut2 : uploadData.Time_Not_Comfortable_Based_on_Simple_ASHRAE_55_2004.Z01_S02_SLEEPINGROOM2,
    })
  }
  
  handleZ01_S02_SLEEPINGROOM2Change(){
      this.setState({   
        valueDonut2 : uploadData.Time_Not_Comfortable_Based_on_Simple_ASHRAE_55_2004.Z01_S03_GROUPROOM1,
    })
  }
  
  handleZ01_S03_GROUPROOM1Change(){
      this.setState({   
        valueDonut2 : uploadData.Time_Not_Comfortable_Based_on_Simple_ASHRAE_55_2004.Z01_S01_SLEEPINGROOM1,
    })
  }

render(){
  return (
  <div className="panel">
    <div className="panel-inlay">
      <h5> Time_Not_Comfortable (ASHRAE_55-2004)</h5>
      <form>
        <select>
          <option value="Net_Site_Energy" onClick={()=>this.handleZ01_S01_SLEEPINGROOM1Change()}>Total Site Energy</option>
          <option value="Net_Site_Energy" onClick={()=>this.handleZ01_S02_SLEEPINGROOM2Change()}>Net Site Energy</option>
          <option value="Net_Site_Energy" onClick={()=>this.handleZ01_S03_GROUPROOM1Change()}>Total Source Energy</option>
        </select>
      </form>
    </div>   
    <PieChart
      data = {this.state.valueDonut2}
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