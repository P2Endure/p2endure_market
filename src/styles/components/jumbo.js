import React, { Component } from 'react';

import { Jumbotron, Panel, Accordion} from 'react-bootstrap';

class Jumbo extends Component{

constructor(props){
    super(props)
        this.state = {};
};
    
getInitialState() {
    return {
        activeKey: '1'
    };
}
      
handleSelect(activeKey) {
    this.setState({ activeKey });
};

render(){
    return(
        <Jumbotron id="jumbo">
            {this.props.children}
                <h3>Welcome to the</h3> 
                <h1>P2Endure E-Marketplace</h1>
         <Accordion>
            <Panel header="Info" eventKey="1">
                Hier Text!!!
            </Panel>
         </Accordion>
        </Jumbotron>
    )}    
};

export default Jumbo;