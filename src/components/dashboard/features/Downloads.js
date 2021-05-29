
import "./Downloads.css";
import DownloadVisualComponent from "./Downloads/DownloadVisualComponent.js";

import { useState } from "react";

const Downloads = () => {
  return (
    <main>
    <div className="main__container">
      <div className="headliner">
        <h2>Downloads hier</h2>
        <span>Hier können Sie verschiedenste Dokumente herunterladen</span>
      </div>
        <div className="grundgeruest-container">
          <div className="downloads-container">
              <DownloadVisualComponent firstFile={true} isFolder={false}></DownloadVisualComponent>
              <DownloadVisualComponent firstFile={false} isFolder={true}></DownloadVisualComponent>
              <DownloadVisualComponent firstFile={false} isFolder={true}></DownloadVisualComponent>
          </div>
        </div>
     </div>
  </main>
  );
};

export default Downloads;
