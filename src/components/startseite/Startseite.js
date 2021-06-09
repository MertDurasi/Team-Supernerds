import React, { Component } from "react";
import NavigationBar from './NavigationBar';
import Home from './Home';
import Team from './Team';
import Services from './Services'
import Contact from './Contact';
import "./Startseite.css";

class Startseite extends Component {
  state = {};
  render() {
    return (
      <div id="parent">
        <NavigationBar />
        <Home />
        <Team />
        <Services />
        <Contact />  
      </div>
    );
  }
}

export default Startseite;
