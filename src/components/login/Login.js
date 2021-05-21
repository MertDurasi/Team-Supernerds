import React, { Component } from "react";
import "../../css/Background.css";
import Illustration from "./Illustration";
import LoginScreen from "./LoginScreen";

class Login extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <LoginScreen></LoginScreen>
        <Illustration></Illustration>
      </React.Fragment>
    );
  }
}

export default Login;
