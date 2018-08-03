import React from 'react';
import Input from '@material-ui/core/Input';
import UploadPicture from './UploadPicture.js';

export default class FormWindow extends React.Component{
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
            <form className="productForm">
                <Input 
                    name="U_Factor"
                    placeholder="U-Factor" 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <Input 
                    name="Solar_Heat_Gain_Coefficient"
                    placeholder="Solar Heat Gain Coefficient"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                />
                <br />
                <Input 
                    name="Visible_Transmittance"
                    placeholder="Visible Transmittance" 
                    value={this.state.username} 
                    onChange={e => this.change(e)}
                />
                <br />
                <UploadPicture/>
               <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>    
        )
    }
}