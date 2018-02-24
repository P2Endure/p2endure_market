import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Sidebar extends Component{    

render(){
  return(
    <div className="wrap">
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Charts</a>
            </li>
            <li>
              <a href="#">Table</a>
            </li>
          </ul>
    </div>
  )
 }
}

export default Sidebar;