import React from 'react';
import FormWindow from './windowForm.js';


export default class ProductNameSave extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  state = {
    fields:{}
  };

  onSubmit = (fields) => {
    this.setState({fields});
    console.log('App component got: ', fields);
  };

  render() {
    return (
      <div>
        <FormWindow  onSubmit ={fields => this.onSubmit(fields)} />
      </div>
    );
  }
}