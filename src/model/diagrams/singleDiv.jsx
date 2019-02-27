import React from 'react';
import uploadData from '../../upload/modelOutput.json';

export default class SingleDiv extends React.Component {

constructor(props) {
    super(props);
    this.state = {
            valueSingle : uploadData.EAp2_6_Energy_Use_Summary.Additional,
 
    }
}

render(){
  return (
  <div className="panel">
    <div className="panel-inlay">
      <h3>&#8364; Additional</h3>
    </div>  
    <div className="panel">
       
    </div>
   
    
  </div >     
    );
}}
