import React, { Component } from "react";
import logo from "../../img/login/logo.svg";
import home_illustration from "../../img/startseite/home_illustration.svg";
import "./Startseite.css";

class Startseite extends Component {
  state = {};

  render() {
    return (
      <div id="parent">
        <div id="header">
          <div id="logo-container">
            <a href="localhost:3000">
              <img id="logo" src={logo} alt="Logo" />
            </a>
          </div>

          <div id="nav-container">
            <nav id="main-nav">
              <ul>
                <a href="#home" className="hover"><li>Startseite</li></a>
                <a href="#about" className="hover"><li>Über uns</li></a>
                <a href="#services" className="hover"><li>Dienstleistungen</li></a>
                <a href="#contact" className="hover"><li>Kontakt</li></a>
                <a href="/login" className="hover"><li id="login">Einloggen</li></a>
              </ul>
            </nav>
          </div>
        </div>

          {/* ===================  Startseite =================== */}


          <div id="home">
            <div id="home-left-container">
              <p>Ihr</p>
              <h1>Unternehmen</h1>
              <h2>online.</h2>
              <p>
                Der Work Manager ermöglicht es Ihnen, Ihr Unternehmen
              <br></br>
              online sowie einfach zu verwalten.
            </p>
              <button id="login-button">Anfragen</button>
            </div>

            <div>
              <img id="home-illustration" src={home_illustration} alt="home_illustration"></img>
            </div>
          </div>

          {/* ===================   Über uns  =================== */}

          <div id="about">
            <h3>Hallo. Wir sind supernerds.</h3>
            <hr></hr>
            <p>
              Wir wollen die Organisation von Firmen weltweit digitalisieren - angefangen in <br></br> Deutschland.
          </p>

          </div>

        </div>
    );
  }
}

export default Startseite;
