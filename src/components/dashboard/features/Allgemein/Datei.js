
import Ordner_logo from "../../../../img/dashboard/Ordner.svg";
import Pdf_logo from "../../../../img/dashboard/PDF.svg";
import downloads_menu_logo from "../../../../img/dashboard/downloads-menu.svg";
import "./Datei.css";
import React from "react";
import moment from "moment";

// TODO: Später: in Datenbank einfügen, um löschen zu ermöglichen
// Dieser Komponent dient für den Downloadsbereich.

const Datei = ( { firstFile, isFolder, nameForVis, gerade, datei  } ) => {


  return (
      
      <ul className="list-group" id={gerade ? "list-group-grey" : "list-group-white"}>
        <div className="inlinetext-handling-dw">
        <li className={firstFile ? "list-group-item-f" : "list-group-item-nf"}>
        <img id={isFolder ? "dc-isfolder-verify" : "dc-ispdf-verify"} src={isFolder ? Ordner_logo : Pdf_logo} alt="doc"></img>
        <span id={isFolder ? "namefv-downloads-f" : "namefv-downloads-nf"}>{nameForVis}</span>
        <span id={isFolder ? "timesave-downloads-f" : "timesave-downloads-nf"}>{moment().format("DD.MM.YYYY")}</span>
        <div className="dropdown-helper-downloads">
        <img id={isFolder ? "expanded-options-downloads-folder" : "expanded-options-downloads-pdf"} src={downloads_menu_logo} alt="src"></img>
        <div className="dropdown-content-downloads">
            <a href="/dashboard/einstellungen">Herunterladen</a>
            <a href="/dashboard/abmelden">Anzeigen</a>
          </div> 
        </div>
        </li>
        </div>
       
      </ul>
 
  );
};

export default Datei;
