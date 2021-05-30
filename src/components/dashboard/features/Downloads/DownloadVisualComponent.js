
import Ordner_logo from "../../../../img/dashboard/Ordner.svg";
import Pdf_logo from "../../../../img/dashboard/PDF.svg";
import downloads_menu_logo from "../../../../img/dashboard/downloads-menu.svg";
import "./DownloadVisualComponent.css";
import React from "react";
import moment from "moment";


// TODO: Später: in Datenbank einfügen, um löschen zu ermöglichen
// Dieser Komponent dient für den Downloadsbereich.

const DownloadVisualComponent = ( {firstFile, isFolder, file}) => {


  return (
        <div className="data-component-container">
            <hr id={firstFile ? "folder-line-top": "folder-line-empty"}></hr>
            <img id={isFolder ? "dc-isfolder-verify" : "dc-ispdf-verify"} src={isFolder ? Ordner_logo : Pdf_logo} alt="doc"></img>
            <div className="dropdown-downloads">
            <img id={isFolder ? "expanded-options-downloads-folder" : "expanded-options-downloads-pdf"} src={downloads_menu_logo} alt="src"></img> 
            <div className="dropdown-content-downloads">
                <a href="/dashboard/downloads">Herunterladen</a>
                <a href="/dashboard/downloads">Anzeigen</a>
                </div>
            </div>
            <span className="datetime-downloads">{ moment().format("DD.MM.YYYY")}</span>
            <hr id="folder-line-bottom"></hr>
        </div>
  );
};

export default DownloadVisualComponent;
