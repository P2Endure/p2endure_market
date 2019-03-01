import React from 'react';
import {PieChart} from 'react-d3-basic';
import uploadData from '../../upload/modelOutput.json';

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
            valueDonut : uploadData.Site_and_Source_Energy.Total_Site_Energy,
            value: function(d){return d.value; },
            name: function(d){return d.name; },
            width: 300,
            height: 300, 
            innerRadius: 10,
                };
}

  //handle Change for donut chart
  handleTotalSiteEnergyChange(){
    this.setState({   
      valueDonut : uploadData.Site_and_Source_Energy.Net_Site_Energy,
    })
  }

  handleNetSiteEnergyChange(){
    this.setState({   
      valueDonut : uploadData.Site_and_Source_Energy.Total_Source_Energy,
    })
  }

  handleTotalSourceEnergyChange(){
    this.setState({   
      valueDonut : uploadData.Site_and_Source_Energy.Net_Source_Energy,
    })
  }

  handleNetSourceEnergyChange(){
    this.setState({   
      valueDonut : uploadData.Site_and_Source_Energy.Total_Site_Energy,
    })
  }

render(){
  return (
  <div className="panel">
    <div className="panel-inlay">
      <h5 >&#8364; Site and Source Energy</h5>
      <form>
              <select>
                <option value="Net_Site_Energy" onClick={()=>this.handleTotalSiteEnergyChange()}>Total Site Energy</option>
                <option value="Net_Site_Energy" onClick={()=>this.handleNetSiteEnergyChange()}>Net Site Energy</option>
                <option value="Net_Site_Energy" onClick={()=>this.handleZ01_S03_GROUPROOM1Change()}>Total Source Energy</option>
                <option value="Net_Site_Energy" onClick={()=>this.handleNetSourceEnergyChange()}>Net Source Energy</option>
              </select>
            </form>
    </div>
    <div>    
    <PieChart
      data = {this.state.valueDonut}
      width= {this.state.width}
      height= {this.state.height}
      chartSeries= {this.state.chartSeries}
      value = {this.state.value}
      name = {this.state.name}
      innerRadius = {this.state.innerRadius}
      />
    </div>   
  </div >     
    );
  } 
}