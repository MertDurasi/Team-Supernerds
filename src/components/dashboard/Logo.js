import React, { Component } from "react";
import "../../css/Dashboard.css";

class Logo extends Component {
  state = {};
  render() {
    return (
      <div className="logo-container">
        <img id={this.props.logoid} src={this.props.logosrc} alt="Error Displaying"></img>        
      </div>
    );
  }
}

export default Logo;
