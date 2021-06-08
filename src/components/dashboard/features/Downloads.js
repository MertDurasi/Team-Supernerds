
import React from "react";
import Datei from "./Allgemein/Datei.js";


class Downloads extends React.Component {

  // Liste -> später aus DB auslesen
  download_files = [
    {
      filename: "Coronainformationen",
      isFolder: false,
    },
    {
      filename: "Allgemeine Daten",
      isFolder: true,
    },
    {
      filename: "Mehrere Daten",
      isFolder: false,
    }
  ];

  render() {
  return (
    <main>
    <div className="main__container">
      <div className="headliner">
        <h2>Downloads</h2>
        <span>Hier können Sie verschiedenste Dokumente herunterladen</span>
      </div>
        <div className="grundgeruest-container">
            {this.download_files.map((field, index) => {
              return (
                <Datei firstFile={index === 0 ? true : false} isFolder={field.isFolder} nameForVis={field.filename} gerade={index % 2 === 0 ? true : false}/>
              )
            })}
        </div>
     </div>
  </main>
  );
  }
};

export default Downloads;
