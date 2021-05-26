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

class Sidebar extends React.Component {
  onCloseMenu() {
    this.props.closeMenu();
  }

  render() {
    return (
      <div
        className={this.props.menuOpen ? "sidebar-responsive" : ""}
        id="sidebar-menu"
      >
        <div className="sidebar-titel">
          <img
            src={hamburger_logo}
            id="sidebar-icon-image"
            onClick={() => this.onCloseMenu()}
          />
        </div>
        <div className="sidebar-menu-main">
          <div className="sidebar--link active-menu-link">
            <img src={neuigkeiten_logo} alt="error" />
            <a href="#">Neuigkeiten</a>
          </div>
          <div className="sidebar--link">
            <img src={dienstplan_logo} alt="error" />
            <a href="#">Dienstplan</a>
          </div>
          <div className="sidebar--link">
            <img src={lohnabrechnung_logo} alt="error" />
            <a href="#">Urlaubsantrag</a>
          </div>
          <div className="sidebar--link">
            <img src={urlaubsantrag_logo} alt="error" />
            <a href="#">Lohnabrechnung</a>
          </div>
          <div className="sidebar--link">
            <img src={downloads_logo} alt="error" />
            <a href="#">Downloads</a>
          </div>
          <div className="sidebar--link">
            <img src={kontaktformular_logo} alt="error" />
            <a href="#">Kontaktformular</a>
          </div>
          <div className="sidebar--link">
            <img src={einstellungen_logo} alt="error" />
            <a href="#">Einstellungen</a>
          </div>
          <div className="sidebar__relinkers">
            <a href="#">AGB | Impressum | Datenschutz</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
