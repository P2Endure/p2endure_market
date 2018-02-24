import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Jumbotron, Panel, Grid, Row, Col, Table, Image, Thumbnail, Checkbox, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'; 

class NavBar extends Component{
render(){
  return(
  <body>
  <header id="header">
      <div className="container">
        <h1>
          P2Endure e-Marketplace
        </h1>
        <nav id="nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
   </body> 
  )
 }
} 

export default NavBar;