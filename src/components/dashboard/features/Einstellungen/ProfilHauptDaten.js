import "./ProfilHauptDaten.css";
import EinstellungInput from "./EinstellungInput.js";


const ProfilHauptDaten = () => {


  return (
        <div className="profile-first-container">
            <div className="wrapper-for-img">
            <input type="file" className="pfp-upload-img"></input>
            </div>
            <EinstellungInput text="Vorname" identifier="field-vorname-container" styling={{position: "absolute", top: "30%", left: "10%", width: "15%", height: "10%"}}/>
            <EinstellungInput text="Nachname" identifier="field-nachname-container" styling={{position: "absolute", top: "30%", left: "50%", width: "15%", height: "10%"}}/>
            <EinstellungInput text="Straße" identifier="field-strasse-container" styling={{position: "absolute", top: "45%", left: "10%", width: "15%", height: "10%"}}/>
            <EinstellungInput text="Postleitzahl" identifier="field-plz-container" styling={{position: "absolute", top: "60%", left: "10%", width: "15%", height: "10%"}}/>
            <EinstellungInput text="Stadt" identifier="field-stadt-container" styling={{position: "absolute", top: "60%", left: "50%", width: "15%", height: "10%"}}/>
            <button id="speichern-einstellungen-btn">Speichern</button>
            <hr id="horizontal-trenner-e" width="1" size="595"></hr>
        </div>
  );
};

export default ProfilHauptDaten;
