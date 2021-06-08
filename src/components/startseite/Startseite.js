import React, { Component } from "react";
import logo from "../../img/login/logo.svg";
import home_illustration from "../../img/startseite/home_illustration.svg";
import supernerds from "../../img/startseite/supernerds.svg";
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
              online und bequem zu verwalten.
            </p>
            <button id="login-button">Anfragen</button>
          </div>

          <div>
            <img id="home-illustration" src={home_illustration} alt="home_illustration"></img>
          </div>
        </div>

        {/* =================== Supernerds Section  =================== */}


        <div id="supernerds-container">
          <img id="supernerds" src={supernerds} alt="supernerds"></img>
        </div>


        {/* ===================   Über uns  =================== */}

        <div id="about">
          <h3>Hallo. Wir sind supernerds.</h3>
          <hr></hr>
          <p>
            Wir wollen die Organisation von Firmen weltweit digitalisieren - angefangen in <br></br> Deutschland.
            </p>

          <div id="team-container">
            <img src="https://via.placeholder.com/300x400" alt="mate"></img>
            <img src="https://via.placeholder.com/300x400" alt="mate"></img>
            <img src="https://via.placeholder.com/300x400" alt="mate"></img>
            <img src="https://via.placeholder.com/300x400" alt="mate"></img>
            <img src="https://via.placeholder.com/300x400" alt="mate"></img>
          </div>
        </div>

        {/* ===================   Dienstleistungen  =================== */}

        <div id="services">
          <h3>Unsere Dienstleistungen</h3>
          <hr></hr>
          <p>
            Der Work Manager hilft Unternehmen dabei, ihren innerbetrieblichen
              <br></br>
              Datenaustausch zu erleichtern. Worauf warten Sie?
            </p>

          <div id="service-container">
            <img src="https://via.placeholder.com/300x400" alt="service"></img>
            <img src="https://via.placeholder.com/300x400" alt="service"></img>
            <img src="https://via.placeholder.com/300x400" alt="service"></img>
            <img src="https://via.placeholder.com/300x400" alt="service"></img>
            <img src="https://via.placeholder.com/300x400" alt="service"></img>
          </div>
        </div>

        {/* ===================   Kontakt  =================== */}

        <div id="contact">
          <div>
            <h3>Nehmen Sie mit uns Kontakt auf.</h3>
            <hr></hr>
            <p>
              Sie sind nur noch ein Schritt von uns entfernt.
              <br></br>
              Treten Sie mit uns in Verbindung, um Ihre Firma einzurichten - vollständig
              <br></br>
              kostenlos!
            </p>

            <form>
              <input className="input-text" type="email" tabindex="1" placeholder="E-Mail"></input><br></br>
              <input className="input-text" type="text" tabindex="2" placeholder="Betreff"></input><br></br>
              <textarea className="input-text" tabindex="3" placeholder="Nachricht"></textarea><br></br>
              <input className="button" id="button" type="submit"></input>
            </form>
          </div>
        </div>

        {/* ===================   Footer  =================== */}
        <div id="footer">
          <div id="copyright">
            <p>&copy; 2021 Work Manager by Supernerds</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Startseite;
