{/*
    renders list elements for the front end
*/}


import React from 'react';

export default class ReadEnergyDataChild extends React.Component {
    render() {
        return <li>{this.props.Name + " - " + this.props.Roughness + " - " + this.props.Thickness}</li>;

    }
  }