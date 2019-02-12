{/*
    renders list elements for the front end
*/}


import React from 'react';

export default class ReadEnergyDataChild extends React.Component {
    render() {
        return <li>{this.props.Keyvalue + " - " + this.props.Materialname + " - " + this.props.Heating}</li>;

    }
  }