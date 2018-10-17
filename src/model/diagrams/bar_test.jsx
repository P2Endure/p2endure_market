import React from 'react';
import {BarChart} from 'react-d3-basic';
import data_1 from '../data/barTest_2.json';
import StartSimulation from '../../model/startSimulation.js';
import data_2 from '../data/barTest.json';

class Bar extends React.Component{ 
  constructor(props){
    super(props);
    this.updateStateObject = this.updateStateObject.bind(this);
    this.state ={

          testParameter: data_1.testParameter,
          case:'',
          EnergySaving:'',
     
      };
      console.log(data_1);
  }
 
  updateStateObject(){
    this.setState({
        
        testParameter: data_2.testParameter,
        case:'',
        EnergySaving:'',
        
    });
    console.log(data_2)
}


  render(){

    var chartSeries = [
                      {
                        field: 'EnergySaving',
                        name: 'EnergySaving',
                        categoricalColors: '#A07A19',
                      }
                      ];
    var x = function(d) { return d.case; };
    var xScale = 'ordinal';
    //var xLabel = "Case";
    var yLabel = 'EnergySaving';
    //var yTicks = [10, "%"];
    var width = 900;
    var height = 300;
    var title = 'Bar Chart';
    

return (
  <div className="panel">
    <div className="panel-inlay">
      <h3>&#8721; Energy Saving</h3>
    </div>  
        <div>     
            <BarChart
              title= {title}
              data= {this.state.testParameter}
              width= {width}
              height= {height}
              chartSeries = {chartSeries}
              x= {x}
              //xLabel= {xLabel}
              xScale= {xScale}
              //yTicks= {yTicks}
              yLabel = {yLabel}
              />
            <StartSimulation
              prop2={this.updateStateObject}
            />
        </div>
    </div>    
    );
  };
}

export default Bar;