import React from "react";
import data_2 from './data/barTest.json';

export default class StartSimulation extends React.Component{
    constructor(props){
        super(props);
        this.updateStateObject = this.updateStateObject.bind(this);
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
        return(
         
            <button onClick={this.props.prop2}> 
                click
            </button>
            
        )
    }
}