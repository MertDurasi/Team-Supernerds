import React, { Component } from "react";
import "../../css/Login.css";
import illustration from "../../img/login/Illustration.svg";

class Illustration extends React.Component {
  state = {};
  render() {
    return (
        <img id="login-illustration" src={illustration} alt="illustration"></img>
    );
  }
}

export default Illustration;
