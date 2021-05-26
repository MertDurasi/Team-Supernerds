import "./Navigation.css";
import profil_logo from "../../img/dashboard/Profil.svg";
import abmelden from "../../img/dashboard/Abmelden.svg";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
/* hamburger menu momentan schlecht, da weiß auf weiß */

const Navigation = ({ menuOpen, openMenu, closeMenu }) => {
  return (
    <nav className="navigation-bar">
      <div
        className="navigation-icon"
        onClick={menuOpen ? () => closeMenu() : () => openMenu()}
      >
        <img width="20" src={abmelden} alt="|||" />
      </div>
      <div className="navigation-left">
        <a href="#">
          -- Das Nächste WT-2 Praktikum findet am 9.06 um 14:50 statt! --
        </a>
      </div>
      <div className="navigation-right">
        <a href="#!">
          <img width="30" src={profil_logo} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
