import React, { Component } from "react";
import "../../css/Dashboard.css";

class Button extends Component {
  state = {};
  render() {
    return (
      <div className="btn-container">
        <button className="btn">
          <img
            className="logo"
            src={this.props.logoid}
            alt="Error Displaying"
          ></img>
          <span className="btn-text">{this.props.component}</span>
        </button>
      </div>
    );
  }
}

export default Button;
