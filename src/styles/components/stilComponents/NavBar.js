import React, { Component } from 'react';

class NavBar extends Component{
render(){
  return(

  <header id="header"> 
        <h1>
          P2Endure e-Marketplace
        </h1>
        <nav id="nav">
          <ul>
            <li>
              <a href="#">&#9978; Home</a>
            </li>
            <li>
              <a href="#">&#9757; About</a>
            </li>
            <li>
              <a href="#">&#9749; Services</a>
            </li>
            <li>
              <a href="#">&#9742; Contact</a>
            </li>
          </ul>
        </nav>
    </header>
  )
 }
} 

export default NavBar;