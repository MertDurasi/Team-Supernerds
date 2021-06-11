import React from "react";
import "./Login.css";
import logo from "../../img/login/logo.svg";
import background from "../../img/login/login_background-2.png";

class LoginScreen extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img id="background" src={background} alt="background"></img>
        <div id="login-container" className="login-container">
          <div id="login-container-head">
            <img
              id="login-logo"
              src={logo}
              alt="logo"
            ></img>
            <div className="login-text">
              <p id="text-1">Willkommen auf</p>
              <h1 id="ueberschrift-1">Workmanager</h1>
              <p id="text-2">
                Geben Sie bitte Ihren Benutzernamen sowie Ihr Passwort ein <br /> und 
                bestätigen Sie das reCAPTCHA
              </p>
            </div>
          </div>

          <form>
            <input className="login-text-area" id="username" type="text" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Benutzername" name="uname" required></input>
            <br />
            <input className="login-text-area" id="passwort" type="passwort" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Passwort" name="psw" required></input>
            <br />
            <a id="psw_vergessen" href="/login">Passwort vergessen?</a>
            <br />
            {/******************* Platzhalter für reCAPTCHA *******************/}
            <button id="login-btn" type="submit">Einloggen</button>
          </form>

          {/******************* Footer für den Login-Container *******************/}
          
          <div id="login-footer">
            <p className="login-footer-text">
              &copy; Workmanager by Supernerds
            </p>
            <div className="login-footer-text-redirects">
              <a href="/login">AGB</a>|
              <a href="/login">Datenschutz</a>|
              <a href="/login">Hilfe</a>|
              <a href="/login">Impressum</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginScreen;
