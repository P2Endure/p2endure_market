{/*
    Load data from compareValues
    onClick functions presents the new values in the front end 
*/}

import React  from 'react';

export default class RunExchange extends React.Component {
    componentWillReceiveProps(newProps) {
        // Print out the new and old props
        console.log(`old props: ${this.props.prop1.Roughness}`);
        console.log(`new props: ${newProps.prop1.Roughness}`);
      }

      render() {
        return (
          <div onClick={this.props.prop2}>
            {this.props.prop1.Roughness}
          </div>
        );
      }
    }

    RunExchange.propTypes = {
        prop1: React.PropTypes.obj,
        prop2: React.PropTypes.func,
    };
      