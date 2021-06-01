
import "./Downloads.css";
import DownloadVisualComponent from "./Downloads/DownloadVisualComponent.js";

import { useState } from "react";

const Downloads = () => {
  return (
    <main>
    <div className="main__container">
      <div className="headliner">
        <h2>Downloads</h2>
        <span>Hier können Sie verschiedenste Dokumente herunterladen</span>
      </div>
        <div className="grundgeruest-container">
          <div className="downloads-container">
              <DownloadVisualComponent firstFile={true} isFolder={false} nameForVis="Testname"></DownloadVisualComponent>
              <DownloadVisualComponent firstFile={false} isFolder={true} nameForVis="Testname2"></DownloadVisualComponent>
          </div>
        </div>
     </div>
  </main>
  );
};

export default Downloads;
