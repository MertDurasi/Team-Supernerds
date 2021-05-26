import React, { Component } from "react";
import "../../css/Dashboard.css";
import "./Button.css";

class Button extends Component {
  state = {};
  render() {
    if (this.props.menuOpen) {
      return (
        <div className="btn-container">
          <button className="btn">
            <img
              className="logo"
              src={this.props.component.logo}
              alt="Error Displaying"
            ></img>
            <span className="btn-text">{this.props.component.text}</span>
          </button>
        </div>
      );
    } else {
      return (
        <div className="btn-container">
          <button className="btn">
            <img
              className="logo"
              src={this.props.component.logo}
              alt="Error Displaying"
            ></img>
          </button>
        </div>
      );
    }
  }
}

export default Button;
