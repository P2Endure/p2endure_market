import React from 'react';
import MyAppChild from './readJsonChild.js';
import data from '../../model/data/ProductData/Material.json';

export default class MyApp extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state ={
    U_Factor:'',
    Solar_Heat_Gain_Coefficient:'',
    Visible_Transmittance:''
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
        U_Factor:key,
        Solar_Heat_Gain_Coefficient:Name,
        Visible_Transmittance:Roughness
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
    arr.map((item, i) => {
        children.push(<MyAppChild key={item.Name} Name={item.Name} Roughness={item.Roughness} Thickness={item.Thickness} />);
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
