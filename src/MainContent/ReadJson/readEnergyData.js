import React from 'react';
import MyAppChild_2 from './readEnergyDataChild.js';
import data from '../../model/data/ProductData/Material.json';

export default class MyApp_2 extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state ={
    Solar_absorptance: '',
    Thickness: '',
    Thermal_absorptance: ''
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
        Solar_absorptance:key,
        Thickness:Name,
        Thermal_absorptance:Roughness
    });
};

  handleChange(event) {
    this.setState({
      json2: event.target.fields
    });
      alert(this.json2);
  }

  render() {
      const fields = this.props.fields;
      var json2 = data[0]      
      var arr = [];
      Object.keys(json2).forEach(function(key) {
        arr.push(json2[key]);
      });
    let children = [];
    arr.map((energyValues, i) => {
        children.push(<MyAppChild_2 key={energyValues.Name} 
                                    Name={energyValues.Name} 
                                    Roughness={energyValues.Roughness} 
                                    Thickness={energyValues.Thickness} />);
    });
    
return(
    <div>
        <ul>
        {children}
        </ul>                
    </div>
    )
}
}
