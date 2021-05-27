import "./Sidebar.css";
import hamburger_logo from "../../img/dashboard/burger_menu.svg";
import neuigkeiten_logo from "../../img/dashboard/Neuigkeiten.svg";
import dienstplan_logo from "../../img/dashboard/Dienstplan.svg";
import lohnabrechnung_logo from "../../img/dashboard/Lohnabrechnung.svg";
import urlaubsantrag_logo from "../../img/dashboard/Urlaubsantrag.svg";
import downloads_logo from "../../img/dashboard/Downloads.svg";
import kontaktformular_logo from "../../img/dashboard/Kontaktformular.svg";
import einstellungen_logo from "../../img/dashboard/Zahnrad.svg";
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

  render() {
    return (
      <div
        className={this.props.menuOpen ? "" : "sidebar-responsive"}
        id="sidebar-menu"
      >
        <div
          className={
            this.props.menuOpen ? "sidebar-titel-open" : "sidebar-titel-closed"
          }
        >
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
        <div className={this.props.menuOpen ? "sidebar-menu-main" : "sidebar-menu-main-closed"}>
          {this.menu_objekte.map((field) => {
            return (
              <Button
                key={field.text}
                menuOpen={this.props.menuOpen}
                component={field}
                showText={this.state.showText}
              ></Button>
            );
          })}

          <div className="sidebar__relinkers">
          <p className="sidebar-footer-text">
              &copy; Workmanager 2021
            </p>
            <a href="/infos">AGB |</a>
            <a href="/infos"> Datenschutz |</a>
            <a href="/infos"> Impressum</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
