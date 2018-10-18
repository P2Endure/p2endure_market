{/*
    define data for facade
*/}

import React from 'react';

export default class FormFacade extends React.Component{

    constructor(props) {
        super(props);
        this.state = {open: false};
      }

    state ={
        Roughness:'',
        Thickness:'',
        Conductivity:'',
        Specific_Heat:'',
        Thermal_Absorptance:'',
        Solar_Absorptance:'',
        Visible_Absorptance:''
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
            Roughness:'',
            Thickness:'',
            Conductivity:'',
            Specific_Heat:'',
            Thermal_Absorptance:'',
            Solar_Absorptance:'',
            Visible_Absorptance:''
        });
    };

    render(){
        return(
            <form>
                <input type="text"
                    name="Roughness"
                    placeholder="Roughness" 
                    value={this.state.Roughness} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input type="text"
                    name="Thickness"
                    placeholder="Thickness"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input type="text" 
                    name="Conductivity"
                    placeholder="Conductivity:" 
                    value={this.state.username} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input type="text"
                    name="Specific_Heat:"
                    placeholder="Specific Heat:" 
                    value={this.state.username} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Thermal_Absorptance"
                    placeholder="Thermal Absorptance" 
                    value={this.state.username} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input type="text"
                    name="Solar_Absorptance"
                    placeholder="Solar Absorptance" 
                    value={this.state.username} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input type="text"
                    name="Visible_Absorptance"
                    placeholder="Visible Absorptance" 
                    value={this.state.username} 
                    onChange={e => this.change(e)}
                />
                <br />
               <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>    
        )
    }
}