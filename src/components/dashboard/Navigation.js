import "./Navigation.css";
import profil_logo from "../../img/dashboard/Profil.svg";
import menu_logo from "../../img/dashboard/downloads-menu.svg";
import lpfeil_logo from "../../img/dashboard/Pfeil nach links.svg";
import rpfeil_logo from "../../img/dashboard/Pfeil nach rechts.svg";


const Navigation = ({ menuOpen, openMenu, closeMenu }) => {
  return (
    <nav className="navigation-bar">
      <div
        className="navigation-icon"
        onClick={menuOpen ? () => closeMenu() : () => openMenu()}
      >
        <img width="20" src={menu_logo} alt="|||" />
      </div>
      <div className="navigation-left">
        <img id="change-news-left" src={lpfeil_logo} alt="lpf"/>
        <a href="/news">
          -- Das Nächste WT-2 Praktikum findet am 9.06 um 14:50 statt! --
        </a>
        <img id="change-news-right" src={rpfeil_logo} alt="rpf"/>
      </div>
      <div className="navigation-right">
        <div className="dropdown">
          <div className="profile">
            <img
              className="dropbtn"
              width="30"
              src={profil_logo}
              alt="avatar"
            />
            <span id="mitarbeiter_name">Greta Soundso</span>
            <span id="firma_name">Hochschule Bochum</span>
          </div>
          <div className="dropdown-content">
            <a href="/dashboard/einstellungen">Profil</a>
            <a href="/dashboard/abmelden">Abmelden</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
