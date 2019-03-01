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
  <div >
    <div className="panel-inlay">
      <h5>&#8364; Additional</h5>
    </div> 
    <div >
    </div>
    
  </div >     
    );
}}
