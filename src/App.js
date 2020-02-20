import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/css/app.css';
import './styles/css/responsive.css';

import TopBar from "./styles/components/stilComponents/TopBar";
import Footer from './styles/components/stilComponents/Footer';
import Content from "./styles/components/stilComponents/Content";
import Sidebar from "./styles/components/stilComponents/Sidebar"

import Diagram from './model/diagram.js';


class App extends Component { 

constructor(props){
  super(props)
  this.state = {
    filename: null,
    windowWidth: 0,
    windowHeight: 0
  }
  this.updateDimensions = this.updateDimensions.bind(this);
}

componentDidMount() {
      // Call our fetch function below once the component mounts
  this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));

  this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions); 
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
    return body;
};

componentWillUnmount() {
  window.removeEventListener("resize", this.updateDimensions);
}

updateDimensions() {
  let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  this.setState({ windowWidth, windowHeight });
}

render(){
  const { windowWidth } = this.state;
  const sidebarCollapsed = windowWidth < 1100;
  const styles = {
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    topBarHeight: 40,
    footerMenuHeight: 50,
    // show footer menu text when window is wide enough
    showFooterMenuText: windowWidth > 500,
    showSidebar: windowWidth > 768,
    sidebarCollapsed,
    sidebarWidth: sidebarCollapsed ? 50 : 150
  };

  const menuItems = [
    { icon: `😀`, text: "Item 1" },
    { icon: `😉`, text: "Item 2" },
    { icon: `😎`, text: "Item 3" },
    { icon: `🤔`, text: "Item 4" },
    { icon: `😛`, text: "Item 5" }
  ];

  if (styles.showSidebar) {
    menuItems.push({ icon: `😺️`, text: "Profile" });
    menuItems.push({ icon: `⚙`, text: "Settings" });
  }

  return (
    <div
      style={{
        backgroundColor: styles.black(0.05),
        minHeight: "100vh",
        position: "relative"
      }}
    >
    {styles.showSidebar ? (
          <Sidebar menuItems={menuItems} styles={styles} />
            ) : (
          <TopBar styles={styles} />
          )}
          <Content styles={styles} />
    {!styles.showSidebar && (
          <Footer menuItems={menuItems} styles={styles} />
          )}
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
