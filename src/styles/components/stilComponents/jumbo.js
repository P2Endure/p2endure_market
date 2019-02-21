import React, { Component } from 'react';

import { Jumbotron, Collapse, Panel, Accordion} from 'react-bootstrap';

class Jumbo extends Component{

constructor(props, context){
    super(props, context)
        this.state = {
            open: false,
        };
};
     
render(){
    const {open} = this.state
    return(
        <Jumbotron id="jumbo">
                <h3>Welcome to the</h3> 
                <h1>P2Endure E-Marketplace</h1>
         <Accordion>
            <Panel header="Info" 
                onClick={() => this.setState({ open: !open })} 
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Hier Text!!!
            </Panel>
            <Collapse in={this.state.open}>
          <div>
           Text
          </div>
        </Collapse>
      
         </Accordion>
        </Jumbotron>
    )}    
};

export default Jumbo;