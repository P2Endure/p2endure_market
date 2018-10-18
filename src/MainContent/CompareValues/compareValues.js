{/*
    Constructor loads the start values
    updateStateObjects loads new data values from ReadEnergyData
    Render of new values in RunExchange 
*/}

import React from 'react';
import RunExchange from './runExchange.js'
import ReadEnergyData from '../ReadJson/readEnergyData.js';

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
        newValue.Roughness = <ReadEnergyData/>;
        this.setState({
            MyAppChild: newValue,
        });
    }

    render(){
        return(
            <RunExchange
                prop1={this.state.MyAppChild}
                prop2={this.updateStateObject}
          />
        )
    }
}