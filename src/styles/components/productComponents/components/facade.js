import React, { Component } from 'react';
import { Field } from "react-final-form";

export default class Facade extends Component {

render(){
    return(
        <div>
        <div>
          <label>Facade1</label>
          <Field
            name="facade1-name"
            component="input"
            type="text"
            placeholder="Facade1 name"
          />
        </div>  
        <div>
            <label>Facade2</label>
            <Field
                name="facade2-name"
                component="input"
                type="text"
                placeholder="Facade1 name"
            />
        </div>  
        <div>
        <label>Facade3</label>
        <Field
            name="facade3-name"
            component="input"
            type="text"
            placeholder="Facade1 name"
        />
        </div>
        </div>
    )}
}
  