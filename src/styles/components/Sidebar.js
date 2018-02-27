import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Sidebar extends Component{    

render(){
  return(
    <div className="wrap">
          <ul>
            <input type="search" id="search" placeholder="Search product..." />
            <li>
              <a href="#">&#10057; Dashboard</a>
            </li>
            <li>
              <a href="#">&#9638; Charts</a>
            </li>
            <li>
              <a href="#">&#9638; Table</a>
            </li>
          </ul>
    </div>
  )
 }
}

export default Sidebar;