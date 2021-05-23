import React, { Component } from "react";
import Style from "../../css/Dashboard.css";

class Button extends Component {
  state = {};
  render() {
    return (
      <div className="btn-container">
        <div id="logo">logo</div>
        <button className="btn">{this.props.component}</button>
      </div>
    );
  }
}

export default Button;
