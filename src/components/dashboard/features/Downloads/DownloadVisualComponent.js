
import Ordner_logo from "../../../../img/dashboard/Ordner.svg";
import Pdf_logo from "../../../../img/dashboard/PDF.svg";
import downloads_menu_logo from "../../../../img/dashboard/downloads-menu.svg";
import "./DownloadVisualComponent.css";
import React from "react";


// TODO: Später: in Datenbank einfügen, um löschen zu ermöglichen
// Dieser Komponent dient für den Downloadsbereich.

const DownloadVisualComponent = ( {isFolder, file}) => {
  return (
        <div className="data-component-container">
            <hr id="folder-line-top"></hr>
            <img id={isFolder ? "dc-isfolder-verify" : "dc-ispdf-verify"} src={isFolder ? Ordner_logo : Pdf_logo} alt="doc"></img>
            <div className="dropdown-downloads">
            <img id={isFolder ? "expanded-options-downloads-folder" : "expanded-options-downloads-pdf"} src={downloads_menu_logo} alt="src"></img> 
            <div className="dropdown-content-downloads">
                <a href="/dashboard/downloads">Link kopieren</a>
                <a href="/dashboard/downloads">Herunterladen</a>
                <a href="/dashboard/downloads">Betrachten</a>
                </div>
            </div>
            <hr id="folder-line-bottom"></hr>
        </div>
  );
};

export default DownloadVisualComponent;
