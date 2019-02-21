import React, { Component } from 'react';
import {Field } from "react-final-form";

export default class Window extends Component {

render(){
    return(
      
            <div>
            <div>
              <label>Feature1</label>
              <Field
                name="feature1-name"
                component="input"
                type="text"
                placeholder="Feature1 name"
              />
            </div>  
            <div>
                <label>Feuture2</label>
                <Field
                    name="feature2-name"
                    component="input"
                    type="text"
                    placeholder="Feature2 name"
                />
            </div>  
            <div>
            <label>Feature3</label>
            <Field
                name="feature3-name"
                component="input"
                type="text"
                placeholder="Feature3 name"
            />
            </div>
            </div>
          )}
}
