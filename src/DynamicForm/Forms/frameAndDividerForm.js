{/*
    define data for the frame and the divider of a window
*/}

import React from 'react';

export default class Form extends React.Component{
    state ={
        Name: " ",
        Frame_Width: " ",
        Frame_Outside_Projection: " ",
        Frame_Inside_Projection: " ",
        Frame_Conductance: " ",
        Ratio_of_Frame_Edge_Glass_Conductance_to_Center_Of_Glass_Conductance:1,
        Frame_Solar_Absorptance:0.7,
        Frame_Visible_Absorptance:  0.7,
        Frame_Thermal_Hemispherical_Emissivity: 0.9,
        Divider_Type: " ",
        Divider_Width: " ",
        Number_of_Horizontal_Dividers: " ",
        Number_of_Vertical_Dividers: " ",
        Divider_Outside_Projection: " ",
        Divider_Inside_Projection: " ",
        Divider_Conductance: " ",
        Ratio_of_Divider_Edge_Glass_Conductance_to_Center_Of_Glass_Conductance:1,
        Divider_Solar_Absorptance: 0.7,
        Divider_Visible_Absorptance: 0.7,
        Divider_Thermal_Hemispherical_Emissivity: 0.9,
        Outside_Reveal_Solar_Absorptance: 0.75,
        Inside_Sill_Depth: " ",
        Inside_Sill_Solar_Absorptance: 0.75,
        Inside_Reveal_Depth: " ",
        Inside_Reveal_Solar_Absorptance: 0.75
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
            Name: " ",
            Frame_Width: " ",
            Frame_Outside_Projection: " ",
            Frame_Inside_Projection: " ",
            Frame_Conductance: " ",
            Ratio_of_Frame_Edge_Glass_Conductance_to_Center_Of_Glass_Conductance:1,
            Frame_Solar_Absorptance:0.7,
            Frame_Visible_Absorptance:  0.7,
            Frame_Thermal_Hemispherical_Emissivity: 0.9,
            Divider_Type: " ",
            Divider_Width: " ",
            Number_of_Horizontal_Dividers: " ",
            Number_of_Vertical_Dividers: " ",
            Divider_Outside_Projection: " ",
            Divider_Inside_Projection: " ",
            Divider_Conductance: " ",
            Ratio_of_Divider_Edge_Glass_Conductance_to_Center_Of_Glass_Conductance:1,
            Divider_Solar_Absorptance: 0.7,
            Divider_Visible_Absorptance: 0.7,
            Divider_Thermal_Hemispherical_Emissivity: 0.9,
            Outside_Reveal_Solar_Absorptance: 0.75,
            Inside_Sill_Depth: " ",
            Inside_Sill_Solar_Absorptance: 0.75,
            Inside_Reveal_Depth: " ",
            Inside_Reveal_Solar_Absorptance: 0.75
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
                    name="Frame_Width"
                    placeholder="Frame Width"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Frame_Outside_Projection"
                    placeholder="Frame Outside Projection" 
                    value={this.state.username} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Frame_Inside_Projection"
                    placeholder="Frame Inside Projection" 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Frame_Conductance"
                    placeholder="Frame Conductance"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Ratio_of_Frame_Edge_Glass_Conductance_to_Center_Of_Glass_Conductance"
                    placeholder="Ratio of Frame Edge Glass Conductance to Center Of Glass Conductance" 
                    value={this.state.username} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Frame_Solar_Absorptance"
                    placeholder="Frame Solar Absorptance" 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Frame_Visible_Absorptance"
                    placeholder="Frame Visible Absorptance"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Frame_Thermal_Hemispherical_Emissivity"
                    placeholder="Frame Thermal Hemispherical Emissivity" 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Divider_Type"
                    placeholder="Divider Type"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Divider_Widthness"
                    placeholder="Divider Width" 
                    value={this.state.username} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Number_of_Horizontal_Dividers"
                    placeholder="Number of Horizontal Dividers" 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Number_of_Vertical_Dividers"
                    placeholder="Number of Vertical Dividers"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Divider_Outside_Projection"
                    placeholder="Divider Outside Projection" 
                    value={this.state.username} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name=" Divider_Inside_Projection"
                    placeholder=" Divider Inside Projection" 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name=" Divider_Conductance"
                    placeholder=" Divider Conductance"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Ratio_of_Divider_Edge_Glass_Conductance_to_Center_Of_Glass_Conductance"
                    placeholder="Ratio of Divider Edge Glass Conductance to Center Of Glass Conductance" 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Divider_Solar_Absorptance"
                    placeholder="Divider Solar Absorptance"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Divider_Visible_Absorptance"
                    placeholder="Divider Visible Absorptance" 
                    value={this.state.username} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Divider_Thermal_Hemispherical_Emissivity"
                    placeholder="Divider Thermal Hemispherical Emissivity" 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Outside_Reveal_Solar_Absorptance"
                    placeholder="Outside Reveal Solar Absorptance"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Inside_Sill_Depth"
                    placeholder="Inside Sill Depth" 
                    value={this.state.username} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Inside_Sill_Solar_Absorptance"
                    placeholder="Inside Sill Solar Absorptance" 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Inside_Reveal_Depth"
                    placeholder="Inside Reveal Depth"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Inside_Reveal_Depth"
                    placeholder="Inside Reveal Depth"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Inside_Reveal_Solar_Absorptance"
                    placeholder="Inside Reveal Solar Absorptance"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
               <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>    
        )
    }
}