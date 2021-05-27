import React, { Component } from "react";
import NavigationBar from "./NavigationBar";

class Startseite extends Component {
  state = {};

  log() {
    console.log("Test");
  }

  render() {
    return (
      <React.Fragment>
        <NavigationBar></NavigationBar>
      </React.Fragment>
    );
  }
}

export default Startseite;
