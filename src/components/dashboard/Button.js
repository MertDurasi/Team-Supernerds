import React, { Component } from "react";
import Logo from "./Logo";
import "../../css/Dashboard.css";

class Button extends Component {
  state = {};
  render() {
    return (
      <div className="btn-container">
        <Logo logoid={this.props.logoid} logosrc={this.props.logosrc}></Logo>
        <button className="btn">{this.props.component}</button>
      </div>
    );
  }
}

export default Button;
