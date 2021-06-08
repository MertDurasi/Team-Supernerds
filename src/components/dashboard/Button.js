import React, { Component } from "react";
import "./Button.css";
import { Link } from "react-router-dom";

class Button extends Component {
  state = {};

  render() {
    if (this.props.showText) {
      return (
        <div className="btn-container">
          <Link className="btn" to={"/dashboard" + this.props.component.route}>
            <img
              className="logo"
              src={this.props.component.logo}
              alt="Error Displaying"
            ></img>
            <span className="btn-text">{this.props.component.text}</span>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="btn-container">
          <Link className="btn" to={"/dashboard" + this.props.component.route}>
            <img
              className="logo-closed"
              src={this.props.component.logo}
              alt="Error Displaying"
            ></img>
          </Link>
        </div>
      );
    }
  }
}

export default Button;
