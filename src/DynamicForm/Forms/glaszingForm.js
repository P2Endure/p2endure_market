{/*
    define data for the glazing of a window
*/}

import React from 'react';

export default class GlazingForm extends React.Component{
    state ={
        Name:" ",
        Optical_Data_Type:" ", 
        Window_Glass_Spectral_Data_Set_Name: " ",
        Thickness:" ",
        Visible_Transmittance:" ",
        Incidence:" ",
        Conductivity:" "
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
            Optical_Data_Type:" ", 
            Window_Glass_Spectral_Data_Set_Name: " ",
            Thickness:" ",
            Visible_Transmittance:" ",
            Incidence:" ",
            Conductivity:" "
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
                    name="Optical_Data_Type"
                    placeholder="Optical Data Type"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Window_Glass_Spectral_Data_Set_Name"
                    placeholder="Window Glass Spectral Data Set Name" 
                    value={this.state.username} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Thickness"
                    placeholder="Thickness" 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Visible_Transmittance"
                    placeholder="Visible Transmittance"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Incidence"
                    placeholder="Incidence" 
                    value={this.state.username} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Conductivity"
                    placeholder="Conductivity"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
               <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>    
        )
    }
}