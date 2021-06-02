import "./ProfilHauptDaten.css";
import EinstellungInput from "./EinstellungInput.js";


const ProfilHauptDaten = () => {


  return (
        <div className="profile-first-container">
            <div className="wrapper-for-img">
            <input type="file" className="pfp-upload-img"></input>
            </div>
            <EinstellungInput text="Vorname" identifier="field-vorname-container" styling={{position: "absolute", top: "30%", left: "0", width: "15%", height: "10%"}}/>
            <EinstellungInput text="Nachname" identifier="field-nachname-container" styling={{position: "absolute", top: "30%", left: "25%", width: "15%", height: "10%"}}/>
            <EinstellungInput text="Straße" identifier="field-strasse-container" styling={{position: "absolute", top: "45%", left: "0", width: "15%", height: "10%"}}/>
            <EinstellungInput text="Postleitzahl" identifier="field-plz-container" styling={{position: "absolute", top: "60%", left: "0", width: "15%", height: "10%"}}/>
            <EinstellungInput text="Stadt" identifier="field-stadt-container" styling={{position: "absolute", top: "60%", left: "25%", width: "15%", height: "10%"}}/>
            <button id="speichern-einstellungen-btn">Speichern</button>
            <hr id="horizontal-trenner-e" width="1" size="595"></hr>
            <EinstellungInput text="Altes Passwort" identifier="field-oldpw-container" styling={{position: "absolute", top: "0", left: "60%", width: "15%", height: "10%"}}/>
            <EinstellungInput text="Neues Passwort" identifier="field-newpw-container" styling={{position: "absolute", top: "12%", left: "60%", width: "15%", height: "10%"}}/>
            <EinstellungInput text="Neues Passwort bestätigen" identifier="field-newpwagain-container" styling={{position: "absolute", top: "25%", left: "60%", width: "20%", height: "10%"}}/>
            <button id="pwchange-einstellungen-btn">Passwort ändern</button>
            <hr id="linebreaker-rightside-einstellungen"></hr>
            <EinstellungInput text="Email-Adresse" identifier="field-email-container" styling={{position: "absolute", top: "60%", left: "60%", width: "15%", height: "10%"}} />
            <button id="emailchange-einstellungen-btn">E-Mail Aktualisieren</button>
        </div>
  );
};

export default ProfilHauptDaten;
