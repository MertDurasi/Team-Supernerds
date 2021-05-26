import "./Sidebar.css";
import profil_logo from "../../img/dashboard/Profil.svg";
import hamburger_logo from "../../img/dashboard/burger_menu.svg";
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
import React from "react";
import Button from "./Button";

class Sidebar extends React.Component {
  state = { showText: true };

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

  setShowButton() {}

  render() {
    return (
      <div
        className={this.props.menuOpen ? "" : "sidebar-responsive"}
        id="sidebar-menu"
      >
        <div className="sidebar-titel">
          <img
            src={hamburger_logo}
            id="sidebar-icon-image"
            onClick={
              this.props.menuOpen
                ? () => this.props.closeMenu()
                : () => this.props.openMenu()
            }
          />
        </div>
        <div className="sidebar-menu-main">
          {this.menu_objekte.map((field) => {
            return (
              <Button
                menuOpen={this.props.menuOpen}
                component={field}
                showText={this.state.showText}
              ></Button>
            );
          })}
          <div className="sidebar__relinkers">
            <a href="#">AGB | Impressum | Datenschutz</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
