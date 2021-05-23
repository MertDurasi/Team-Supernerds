import React, { Component } from "react";
import Button from "./Button";

class Dashboard extends Component {
  state = {
    buttons: [
      "Neuigkeiten",
      "Dienstplan",
      "Urlaubsantrag",
      "Lohnabrechnung",
      "Downloads",
      "Kontaktformular",
      "Einstellungen",
    ],
  };
  render() {
    return (
      <div id="dashboard" className="grid-container">
        <div className="news">Some pretty random and uncreative news</div>
        <div className="location">Hochschule Bochum</div>
        <div className="profile">Profil</div>
        <div className="menu">
          <div id="hamburger-container">
            <button id="hamburger">HamburgerLogo</button>
          </div>
          {this.state.buttons.map((button) => {
            return <Button key={button} component={button}></Button>;
          })}
        </div>
        <div className="main">
          <p>
            Hier kommen dann die anderen Features rein wie bsw:
            <br />
            Neuigkeiten
            <br />
            Am besten erst einmal leer lassen, aber bitte den Container nicht
            löschen, da er zum Grid System gehört => siehe Dashboard.css Das
            Grid System habe ich von:
            <br />
            <br />
            https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_layout_named
          </p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
