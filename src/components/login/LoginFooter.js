import React, { Component } from "react";
import "../../css/Login.css";

class LoginFooter extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
          <div id="login-footer" className="login-footer">
              <p>&copy; Workmanager by Supernerds</p>
              <a href="/login">AGB | </a>
              <a href="/login">DATENSCHUTZ | </a> 
              <a href="/login">IMPRESSUM</a>
          </div>
      </React.Fragment>
    );
  }
}

export default LoginFooter;
