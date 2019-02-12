{/*
    Class presents the parameters for the data exchange
    state: raw data without values
    onSubmit: set values for the data which are defined under state
    handleChange: set new values for the state data
    render: render of the (new) data, MyAppChild renders the data to the front end
*/}

import React from 'react';
import ReadEnergyDataChild from './readEnergyDataChild.js';
import data from '../../upload/modelOutput.json';

//const fs = require("fs");

export default class ReadEnergyData extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state ={
    Keyvalue: '',    
    Materialname: '',
    Heating: '',
};

change = e =>{
    this.setState({
        [e.target.name]: e.target.value
    });
};

onSubmit= e =>{
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({

        Keyvalue:key,
        Materialname: Materialname,
        Heating: Heating
    });
};

  handleChange(event) {
    this.setState({
      json2: event.target.fields
    });
      alert(this.json2);
  }

  onChange(){
    var fs = require('fs'); 
    var json = JSON.stringify(obj)   
    fs.writeFile('../../upload/modelOutput_1.json', json); 
  }

  render() {
      const fields = this.props.fields;
      var json2 = data[0]     
      var arr = [];
      var obj = {};
      Object.keys(json2).forEach(function(key) {
        arr.push(json2[key]);
      });
    let children = [];
    arr.map((energyValues, i) => {
        children.push(<ReadEnergyDataChild  key={energyValues.Keyvalue} 
                                            Name={energyValues.Keyvalue} 
                                            Materialname={energyValues.Materialname} 
                                            Heating={energyValues.Heating} />);
            obj[arr]= children;
    });
    
return(
    <div>
        <ul>
            <Button onChange={this.onChange()}>Anzeigen</Button>
        </ul>
    </div>
    )
}
}
