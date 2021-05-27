import React, { Component } from "react";
import { useHistory } from "react-router";
import "../../css/Dashboard.css";
import "./Button.css";

class Button extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.log = this.log.bind(this);
  }

  log() {
    console.log(this.props.component.text);
  }

  render() {
    if (this.props.menuOpen) {
      return (
        <div className="btn-container">
          <button className="btn" onClick={this.log}>
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
          <button className="btn" onClick={this.log}>
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
