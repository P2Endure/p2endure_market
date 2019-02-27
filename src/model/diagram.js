import React from 'react';
import Line from './diagrams/Line.jsx';
import Bar from './diagrams/bar_test.jsx';
import Donut from './diagrams/donut.jsx';
import Donut2 from './diagrams/donut2.jsx';
import Scatter from './diagrams/Scatter.jsx';
import {Row, Col } from 'react-bootstrap'; 
import uploadData from '../upload/modelOutput.json';
import SingleDiv from './diagrams/singleDiv.jsx';

export default class Diagram extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      valueBar : uploadData.End_Uses.Heating,
      valueSingle : uploadData.EAp2_6_Energy_Use_Summary.Additional,
      valueDonut : uploadData.Site_and_Source_Energy.Total_Site_Energy,
      valueDonut2 : uploadData.Time_Not_Comfortable_Based_on_Simple_ASHRAE_55_2004.Z01_S01_SLEEPINGROOM1,
    }
  }

  changeTest(){
    this.setState({
      valueBar : uploadData.End_Uses.Cooling,
      valueSingle : uploadData.EAp2_6_Energy_Use_Summary.Additional,
    })
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
  return(
    <div>
    <button  onClick={()=>this.changeTest()}>
    Show simulation results
    </button>
    <Row>
        <Col md={8} lg={8}>
        <div>
            <form>
              <select>
                <option value="heating" onClick={()=>this.handleCoolingChange()}>Heating</option>
                <option value="cooling" onClick={()=>this.handleHeatinChange()}>Cooling</option>
                <option value="cooling" onClick={()=>this.handleLightningChange()}>Interior Lighting</option>
              </select>
            </form>
          <Bar 
           data = {this.state.valueBar}
          />
        </div>    
        </Col>
        <Col md={4} lg={4}>
        <div className="panel">
          <div className="panel-inlay">
            <h3>&#8721; Additional</h3>
            </div> 
            <div>
            <div>{this.state.valueSingle[0].name} :</div>
            <div>{this.state.valueSingle[0].value}</div>
          </div>
        </div>
      
        {/*  <Line 
          data = {this.state.testLine}
         />*/}
        </Col>
    </Row>
     <Row>
        <Col md={8} lg={4}>  
        <div>
        <form>
              <select>
                <option value="Net_Site_Energy" onClick={()=>this.handleTotalSiteEnergyChange()}>Total Site Energy</option>
                <option value="Net_Site_Energy" onClick={()=>this.handleNetSiteEnergyChange()}>Net Site Energy</option>
                <option value="Net_Site_Energy" onClick={()=>this.handleZ01_S03_GROUPROOM1Change()}>Total Source Energy</option>
                <option value="Net_Site_Energy" onClick={()=>this.handleNetSourceEnergyChange()}>Net Source Energy</option>
              </select>
            </form>
          <Donut 
            data = {this.state.valueDonut}
          />
        </div>
        </Col>
        <Col md={8} lg={4}>  
        <div>
        <form>
              <select>
                <option value="Net_Site_Energy" onClick={()=>this.handleZ01_S01_SLEEPINGROOM1Change()}>Total Site Energy</option>
                <option value="Net_Site_Energy" onClick={()=>this.handleZ01_S02_SLEEPINGROOM2Change()}>Net Site Energy</option>
                <option value="Net_Site_Energy" onClick={()=>this.handleTotalSourceEnergyChange()}>Total Source Energy</option>
              </select>
            </form>
          <Donut2
            data = {this.state.valueDonut2}
          />
        </div>
        </Col>  
      </Row>   
        {/* <Col md={4} lg={8}>    
        <Scatter 
            data = {this.state.testLine}
          />
        </Col>  */}

</div>
    )
  }
}