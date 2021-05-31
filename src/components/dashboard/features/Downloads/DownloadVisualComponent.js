
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
      
      <ul className="list-group">
        <li className={firstFile ? "list-group-item-f" : "list-group-item-nf"}>
        <img id={isFolder ? "dc-isfolder-verify" : "dc-ispdf-verify"} src={isFolder ? Ordner_logo : Pdf_logo} alt="doc"></img>
          <span id={isFolder ? "timesave-downloads-f" : "timesave-downloads-nf"}>{moment().format("DD.MM.YYYY")}</span>
          <img id={isFolder ? "expanded-options-downloads-folder" : "expanded-options-downloads-pdf"} src={downloads_menu_logo} alt="src"></img> 
        </li>
      </ul>
 
  );
};

export default DownloadVisualComponent;
