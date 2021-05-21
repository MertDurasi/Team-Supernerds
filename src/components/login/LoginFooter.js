import React, { Component } from "react";
import "../../css/Login.css";

class LoginFooter extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="login-footer" className="login-footer">
          <p className="login-text-centered">
            &copy; Workmanager by Supernerds
          </p>
          <div className="login-text-centered">
            <a href="/login">AGB | </a>
            <a href="/login">DATENSCHUTZ | </a>
            <a href="/login">IMPRESSUM</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginFooter;
