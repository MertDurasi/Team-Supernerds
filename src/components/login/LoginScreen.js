import React, { Component } from "react";
import "../../css/Login.css";
import LoginFooter from "./LoginFooter.js";
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
              width="90"
              height="60"
              alt="logo"
            ></img>
            <div className="login-text">
              <p id="text-1">Willkommen auf</p>
              <h1 id="ueberschrift-1">Workmanager</h1>
              <p id="text-2">
                Geben Sie bitte Ihren Benutzernamen sowie Ihr Passwort ein und
                <br /> bestätigen Sie das reCAPTCHA
              </p>
            </div>
          </div>

          <form>
            <input
              className="login-text"
              type="text"
              placeholder="max_mustermann"
              name="uname"
              required
            ></input>
            <br />
            <input
              className="login-text"
              type="passwort"
              placeholder="********"
              name="psw"
              required
            ></input>
            <br />
            <span className="psw">
              <a href="/login">Passwort vergessen?</a>
            </span>
            <br />

            {/******************* Platzhalter für reCAPTCHA *******************/}
            <div id="login-btn-container" className="login-text-centered">
              <button id="login-btn" type="submit">
                Einloggen
              </button>
            </div>
          </form>

          {/******************* Footer für den Login-Container *******************/}
          <LoginFooter></LoginFooter>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginScreen;