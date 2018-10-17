import React from 'react';
import ComponentB from './runExchange.js'
import MyApp_2 from '../ReadJson/readEnergyData.js';

export default class CompareValues extends React.Component{
    constructor(props){
        super(props);
        this.updateStateObject = this.updateStateObject.bind(this);

        this.state ={
            MyAppChild:{
                Roughness:'1',

            },
        };
    }

    updateStateObject(){
        const newValue = this.state.MyAppChild;
        newValue.Roughness = <MyApp_2/>;
        this.setState({
            MyAppChild: newValue,
        });
    }

    render(){
        return(
            <ComponentB
                prop1={this.state.MyAppChild}
                prop2={this.updateStateObject}
          />
        )
    }
}