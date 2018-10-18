{/*
    define data for the material
*/}


import React from 'react';

export default class Form extends React.Component{
    state ={
        Name:" ",
        Roughness:" ",
        Thickness:" ",
        Conductivity:" ",
        Specific_Heat:" ",
        Thermal_Absorptance:" ",
        Solar_Absorptance:" ",
        Visible_Absorptance:" "
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
            Name:" ",
            Roughness:" ",
            Thickness:" ",
            Conductivity:" ",
            Specific_Heat:" ",
            Thermal_Absorptance:" ",
            Solar_Absorptance:" ",
            Visible_Absorptance:" "
        });
    };

    render(){
        return(
            <form>
                <input 
                    name="Name"
                    placeholder="Name" 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Roughness"
                    placeholder="Roughness"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Thickness"
                    placeholder="Thickness" 
                    value={this.state.username} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Conductivity"
                    placeholder="Conductivity" 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Specific_Heat"
                    placeholder="Specific Heat"
                    value={this.state.lastName} 
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
                <input 
                    name="Solar_Absorptance"
                    placeholder="Solar Absorptance" 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Visible_Absorptance"
                    placeholder="Visible_Absorptance"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
               <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>    
        )
    }
}