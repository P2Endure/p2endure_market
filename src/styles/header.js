import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Jumbotron, Panel, Grid, Row, Col, Table, Image, Thumbnail, Checkbox } from 'react-bootstrap'; 

// create classes
var NavBar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-collapse"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <NavBrand
              linkTo={this.props.brand.linkTo}
              text={this.props.brand.text}
            />
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <NavMenu links={this.props.links} />
          </div>
        </div>
      </nav>
    );
  }
});

var NavBrand = React.createClass({
  render: function() {
    return (
      <a className="navbar-brand" href={this.props.linkTo}>{this.props.text}</a>
    );
  }
});

var NavMenu = React.createClass({
  render: function() {
    var links = this.props.links.map(function(link) {
      if (link.dropdown) {
        return (
          <NavLinkDropdown key={1}
            links={link.links}
            text={link.text}
            active={link.active}
          />
        );
      } else {
        return (
          <NavLink linkTo={link.linkTo} text={link.text} active={link.active} />
        );
      }
    });
    return (
      <ul className="nav navbar-nav">
        {links}
      </ul>
    );
  }
});

var NavLinkDropdown = React.createClass({
  render: function() {
    var active = false;
    var links = this.props.links.map(function(link) {
      if (link.active) {
        active = true;
      }
      return (
        <NavLink linkTo={link.linkTo} text={link.text} active={link.active} />
      );
    });
    return (
      <li className={"dropdown " + (active ? "active" : "")}>
        <a
          href="#"
          className="dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {this.props.text}
          <span className="caret" />
        </a>
        <ul className="dropdown-menu">
          {links}
        </ul>
      </li>
    );
  }
});

var NavLink = React.createClass({
  render: function() {
    return (
      <li className={this.props.active ? "active" : ""}>
        <a href={this.props.linkTo}>{this.props.text}</a>
      </li>
    );
  }
});

// set data
var navbar = {};
navbar.brand = { linkTo: "https://www.p2endure-project.org/default.aspx", text: "P2Endure e-Marketplace" };
navbar.links = [
  { linkTo: "#", text: "About the project" },
  { linkTo: "https://www.youtube.com/watch?v=N-qdpk3oDos", text: "Help" },
  {
    dropdown: true,
    text: "Menu",
    links: [
      { linkTo: "#", text: "Dropdown Link 1" },
      { linkTo: "#", text: "Dropdown Link 2", active: true }
    ]
  }
];

// render NavBar
ReactDOM.render(<NavBar {...navbar} />, document.getElementById("navbar"));
