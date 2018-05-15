import React from 'react';

export default class Form extends React.Component{
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
            U_Factor:'',
            Solar_Heat_Gain_Coefficient:'',
            Visible_Transmittance:''
        });
    };

    render(){
        return(
            <form>
                <input 
                    name="U_Factor"
                    placeholder="U-Factor" 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Solar_Heat_Gain_Coefficient"
                    placeholder="Solar Heat Gain Coefficient"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="Visible_Transmittance"
                    placeholder="Visible Transmittance" 
                    value={this.state.username} 
                    onChange={e => this.change(e)}
                />
                <br />
               <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>    
        )
    }
}