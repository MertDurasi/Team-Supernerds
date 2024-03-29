import React, { Component } from "react";
import "./Kontaktformular.css";
import DragDropFeature from "./Kontaktformular/DragDropFeature.js";

class Kontaktformular extends Component {

  render() {
  return (
    <main>
    <div className="main__container">
      <div className="headliner">
        <h2>Kontaktformular</h2>
        <span>Schreiben Sie ihren Vorgesetzten an</span>
      </div>
        <div className="grundgeruest-container">
          <div className="kontaktformular-container">
              <input className="betreff-field" placeholder="Betreff"></input>
              <input className="empfaenger-field" placeholder="Empfänger"></input>
              <input className="email-adresse-field" placeholder="Ihre E-Mail-Adresse"></input>
              <input className="mobilfunknummer-field" placeholder="Ihre Mobilfunknummer"></input>
              <textarea className="message-field" placeholder="Hier kommt Ihre Nachricht rein"></textarea>
              <DragDropFeature></DragDropFeature>
              <button className="absenden-button">Absenden</button>
        </div>
        </div>
     </div>
  </main>
  );
  }
};

export default Kontaktformular;
