import React from "react";
import "./Login.css";
import logo from "../../img/login/logo.svg";

class LoginScreen extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
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
            <input className="login-text-area" id="username" type="text" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;max_mustermann" name="uname" required></input>
            <br />
            <input className="login-text-area" id="passwort" type="passwort" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;********" name="psw" required></input>
            <br />
            <span className="psw">
              <a href="/login">Passwort vergessen?</a>
            </span>
            <br />

            {/******************* Platzhalter für reCAPTCHA *******************/}
            
            <div id="login-btn-container" className="login-text-centered">
              <button id="login-btn" type="submit">Einloggen</button>
            </div>
          </form>

          {/******************* Footer für den Login-Container *******************/}
          <div id="login-footer" className="login-footer">
            <p className="login-text-centered">
              &copy; Workmanager by Supernerds
          </p>
            <div className="login-text-centered">
              <a href="/login">AGB</a>|
              <a href="/login">DATENSCHUTZ</a> |
              <a href="/login">IMPRESSUM</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginScreen;
