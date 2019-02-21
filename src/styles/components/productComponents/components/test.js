import React from 'react';
import { Component }  from 'react';
import { render } from "react-dom";
import { Form, Field } from "react-final-form";
import Window from './window';
import Facade from './facade';
import RaisedButton from './raisedButton';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

export default class ProductUploadIndex extends Component {
  constructor(props){
    super(props)
    this.state = {filename: null}
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
}

  render(){
  return(
    <Styles>
          <h1>Upload a new Product</h1>
    <button onClick={this.toggleModal}>
        Upload Product
    </button>
    <RaisedButton show={this.state.isOpen}
          onClose={this.toggleModal}>
    <Form
      onSubmit={onSubmit}
      initialValues={{ 
        window: false,
        facade: false
       }}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (

       
        <form onSubmit={handleSubmit}>
          <div>
            <label>Window</label>
            <Field name="window" component="input" type="checkbox" />
          </div>
          <div>
            <label>Facade</label>
            <Field name="facade" component="input" type="checkbox" />
          </div>
          {values.window && (
            <Window/>
          )}
          {values.facade && (
            <Facade/>
          )}
          <div className="buttons">
            <button type="submit">
              Submit
            </button>
            <button
              type="button"
              onClick={reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
    </RaisedButton>
    </Styles>

  )}

}

render(<ProductUploadIndex />, document.getElementById("root"));
