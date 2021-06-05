
import React from "react";
import "./Downloads.css";
import DownloadVisualComponent from "./Downloads/DownloadVisualComponent.js";


class Downloads extends React.Component {

  // Liste -> später aus DB auslesen
  download_files = [
    {
      filename: "Testname",
      isFolder: false,
    },
    {
      filename: "Testname2",
      isFolder: true,
    },
    {
      filename: "Testname3",
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
          <div className="downloads-container">
            {this.download_files.map((field, index) => {
              return (
                <DownloadVisualComponent firstFile={index == 0 ? true : false} isFolder={field.isFolder} nameForVis={field.filename} gerade={index % 2 == 0 ? true : false}/>
              )
            })}
          </div>
        </div>
     </div>
  </main>
  );
  }
};

export default Downloads;
