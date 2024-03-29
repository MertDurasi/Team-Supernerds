import React from "react";

import Datei from "./Allgemein/Datei.js";


class Lohnabrechnung extends React.Component {

  // Liste -> später aus DB auslesen
  lohnabrechnungen_files = [
    {
      filename: "Lohnabrechnung1",
      isFolder: false,
      mitarbeiterid : 1,
    },
    {
      filename: "Lohnabrechnung2",
      isFolder: true,
      mitarbeiterid: 2,
    },
    {
      filename: "Lohnabrechnung3",
      isFolder: false,
      mitarbeiterid: 3,
    }
  ];


  render() {
  return (
    <main>
    <div className="main__container">
      <div className="headliner">
        <h2>Lohnabrechnung</h2>
        <span>Hier können Sie ihre Lohnabrechnungen einsehen</span>
      </div>
        <div className="grundgeruest-container">
          {this.lohnabrechnungen_files.map((field, index) => {
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

export default Lohnabrechnung;
