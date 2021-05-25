import React, { Component } from "react";
import Button from "./Button";
import hamburger_logo from "../../img/dashboard/Hamburger-Logo.svg";
import neuigkeiten_logo from "../../img/dashboard/Neuigkeiten.svg";
import dienstplan_logo from "../../img/dashboard/Dienstplan.svg";
import lohnabrechnung_logo from "../../img/dashboard/Lohnabrechnung.svg";
import urlaubsantrag_logo from "../../img/dashboard/Urlaubsantrag.svg";
import downloads_logo from "../../img/dashboard/Downloads.svg";
import kontaktformular_logo from "../../img/dashboard/Kontaktformular.svg";
import einstellungen_logo from "../../img/dashboard/Zahnrad.svg";
import LPfeil_logo from "../../img/dashboard/Pfeil nach links.svg";
import RPfeil_logo from "../../img/dashboard/Pfeil nach rechts.svg";
import Profil_logo from "../../img/dashboard/Profil.svg";

class Dashboard extends Component {
  state = {};

  menu_objekte = [
    {
      text: "Neuigkeiten",
      logo: neuigkeiten_logo,
    },
    {
      text: "Dienstplan",
      logo: dienstplan_logo,
    },
    {
      text: "Urlaubsantrag",
      logo: urlaubsantrag_logo,
    },
    {
      text: "Lohnabrechnung",
      logo: lohnabrechnung_logo,
    },
    {
      text: "Downloads",
      logo: downloads_logo,
    },
    {
      text: "Kontaktformular",
      logo: kontaktformular_logo,
    },
    {
      text: "Einstellungen",
      logo: einstellungen_logo,
    },
  ];
  render() {
    return (
      <div id="dashboard" className="grid-container">
        <div className="news-container">
          <div className="news">
            <img className="LPfeil" src={LPfeil_logo} alt="linker pfeil"></img>
            Wichtige Information: Am 08. Juni 2021 findet das zweite
            WT2-Praktikum statt.
            <img className="RPfeil" src={RPfeil_logo} alt="rechter pfeil"></img>
          </div>
        </div>
        <div className="location">Hochschule Bochum</div>
        <div className="profile">
          <img src={Profil_logo}/> Profil
        </div>
        <div className="menu">
          <div id="hamburger-container">
            <img id="hamburger_logo" src={hamburger_logo} alt="| | |"></img>
          </div>
          {this.menu_objekte.map((field) => {
            return (
              <Button
                key={field.text}
                component={field.text}
                logoid={field.logo}
                logosrc={field.logo}
              ></Button>
            );
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
