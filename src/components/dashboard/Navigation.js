import "./Navigation.css";
import profil_logo from "../../img/dashboard/Profil.svg";
import menu_logo from "../../img/dashboard/downloads-menu.svg";
import lpfeil_logo from "../../img/dashboard/Pfeil nach links.svg";
import rpfeil_logo from "../../img/dashboard/Pfeil nach rechts.svg";
import { useState } from "react";

const Navigation = ({ menuOpen, openMenu, closeMenu }) => {
  const [news, setNews] = useState([
    "-- Das Nächste WT-2 Praktikum findet am 9.06 um 14:50 statt! --",
    "-- Das Übernächste WT-2 Praktikum finet nicht statt! --",
    "-- Das Firmengelände darf nicht ohne FFP2-Maske betreten werden --",
    "-- Wer das liest ist doof --",
    "-- Team Supernerds Präsentiert --",
  ]);

  const [index, setIndex] = useState(0);

  function plusIndex() {
    index < news.length - 1 ? setIndex(index + 1) : setIndex(0);
  }

  function minusIndex() {
    index > 0 ? setIndex(index - 1) : setIndex(news.length - 1);
  }

  return (
    <nav className="navigation-bar">
      <div
        className="navigation-icon"
        onClick={menuOpen ? () => closeMenu() : () => openMenu()}
      >
        <img width="20" src={menu_logo} alt="|||" />
      </div>
      <div className="navigation-left">
        <img
          onClick={minusIndex}
          id="change-news-left"
          src={lpfeil_logo}
          alt="lpf"
        />
        <a href="/news">{news[index]}</a>
        <img
          onClick={plusIndex}
          id="change-news-right"
          src={rpfeil_logo}
          alt="rpf"
        />
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
