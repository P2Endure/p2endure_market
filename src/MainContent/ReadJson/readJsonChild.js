import React from 'react';

export default class MyAppChild extends React.Component {
    render() {
        return <li>{this.props.Name + " - " + this.props.Roughness + " - " + this.props.Thickness}</li>;

    }
  }