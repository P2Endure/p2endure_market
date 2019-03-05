import React from 'react';
import {PieChart} from 'react-d3-basic';
import uploadData from '../../upload/modelOutput.json';

export default class Costs extends React.Component {

constructor(props) {
    super(props);
    this.state = {
                   chartSeries : [
                    {
                      "field": "Process Subtotal [kWh]",
                      "name" : "Process Subtotal [kWh]",
                    },
                    {
                      "field": "Total Energy Use [kWh]",
                      "name" : "Total Energy Use [kWh]",
                    }
                  ],
            valueCosts : uploadData.EAp2_6_Energy_Use_Summary.Additional,
            value: function(d){return d.value; },
            name: function(d){return d.name; },
            width: 300,
            height: 300, 
            innerRadius: 40,
                };
}

  //handle Change for donut chart
  handleTotalSiteEnergyChange(){
    this.setState({   
      valueCosts : uploadData.EAp2_6_Energy_Use_Summary.Electricity,
    })
  }

  handleTotalSourceEnergyChange(){
    this.setState({   
      valueCosts : uploadData.EAp2_6_Energy_Use_Summary.Additional,
    })
  }

render(){
  return (
  <div className="panel">
    <div className="panel-inlay">
      <h5 >&#8364; Energy Use Summary</h5>
      <form>
              <select>
                <option value="Additional" onClick={()=>this.handleTotalSiteEnergyChange()}>Electricity</option>
                <option value="Additional" onClick={()=>this.handleTotalSourceEnergyChange()}>Additional</option>
              </select>
            </form>
    </div>
    <div>    
    <PieChart
      data = {this.state.valueCosts}
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