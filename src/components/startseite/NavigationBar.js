import React from "react";
import logo from "../../img/login/logo.svg";
import "./Startseite.css";
import "./NavigationBar.css";

class NavigationBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="header">
          <div id="logo-container">
            <a href="localhost:3000">
              <img id="logo" src={logo} alt="Logo" />
            </a>
          </div>

          <div id="nav-container">
            <nav id="main-nav">
              <ul>
                <a href="#home"><button className="nav-btn">Startseite</button></a>
                <a href="#about"><button className="nav-btn">Über uns</button></a>
                <a href="#services"><button className="nav-btn">Dienstleistungen</button></a>
                <a href="#contact"><button className="nav-btn">Kontakt</button></a>
                <a href="/login"><button className="nav-btn" id="l-btn">Einloggen</button></a>
              </ul>
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavigationBar;
