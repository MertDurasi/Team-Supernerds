import React from "react";
import logo from "../../img/login/logo.svg";
import "../../css/NavigationBar.css";

class NavigationBar extends React.Component {
  render() {
    return (
      <div id="parent">
        <div id="logo-container">
          <a href="localhost:3000">
            <img id="logo" src={logo} alt="Logo" />
          </a>
        </div>

        <div id="nav-container">
          <nav id="main-nav">
            <ul>
              <a href="#home">
                <li>HOME</li>
              </a>
              <a href="#about">
                <li>ABOUT</li>
              </a>
              <a href="#services">
                <li>SERVICES</li>
              </a>
              <a href="#contact">
                <li>CONTACT</li>
              </a>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
