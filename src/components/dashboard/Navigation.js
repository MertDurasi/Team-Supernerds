import "./Navigation.css";
import profil_logo from "../../img/dashboard/Profil.svg";
import abmelden from "../../img/dashboard/Abmelden.svg";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
/* hamburger menu momentan schlecht, da weiß auf weiß */

const Navigation = ({ menuOpen, openMenu}) => {
    return (
        <nav className="navigation-bar">
            <div className="navigation-icon" onClick={() => openMenu()}>
                <img width="20" src={abmelden} alt="|||" />
            </div>
            <div className="navigation-left">
                <a href="#">-- Das Nächste WT-2 Praktikum findet am 9.06 um 14:50 statt! --</a>
            </div>
            <div className="navigation-right">
                <div className="dropdown">
                <button className="dropbtn">
                    <img width="30" src={profil_logo} alt="avatar" />
                </button>
                <div className="dropdown-content">
                    <a href="/dashboard/profil">Profil</a>
                    <a href="/dashboard/abmelden">Abmelden</a>
                </div>
                </div>
            </div>
        </nav>
    )

}

export default Navigation;