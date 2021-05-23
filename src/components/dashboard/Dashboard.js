import React, { Component } from "react";
import Button from "./Button";
import hamburger_logo from "../../img/dashboard/Hamburger-Logo.svg";
import neuigkeiten from "../../img/dashboard/Neuigkeiten.svg";
import dienstplan from "../../img/dashboard/Dienstplan.svg";
import lohnabrechnung from "../../img/dashboard/Lohnabrechnung.svg";
import urlaubsantrag from "../../img/dashboard/Urlaubsantrag.svg";
import downloads from "../../img/dashboard/Downloads.svg";
import kontaktformular from "../../img/dashboard/Kontaktformular.svg";
import einstellungen from "../../img/dashboard/Zahnrad.svg";

class Dashboard extends Component {
  state = {};

  menu_objekte = [
    {
      text: "Neuigkeiten",
      logo: neuigkeiten
    },
    {
      text: "Dienstplan",
      logo: dienstplan
    },
    {
      text: "Urlaubsantrag",
      logo: urlaubsantrag
    },
    {
      text: "Lohnabrechnung",
      logo: lohnabrechnung
    },
    {
      text: "Downloads",
      logo: downloads
    },
    {
      text: "Kontaktformular",
      logo: kontaktformular
    },
    {
      text: "Einstellungen",
      logo: einstellungen
    },

  ]
  render() {
    return (
      <div id="dashboard" className="grid-container">
        <div className="news">Some pretty random and uncreative news</div>
        <div className="location">Hochschule Bochum</div>
        <div className="profile">Profil</div>
        <div className="menu">
          <div id="hamburger-container">
          <img id="hamburger_logo" src={hamburger_logo} alt="| | |"></img>
          </div>
          {this.menu_objekte.map((field) => {
            return <Button key={field.text} component={field.text} logoid={field.logo} logosrc={field.logo}></Button>;
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
