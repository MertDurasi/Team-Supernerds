import "./ProfilHauptDaten.css";


const ProfilHauptDaten = () => {


  return (
        <div className="profile-first-container">
            <div className="wrapper-for-img">
              <input type="file" className="pfp-upload-img"></input>
            </div>
            <div className="profile-input-container">
            <input className="vorname-field" placeholder="Vorname"></input>
            <input className="nachname-field" placeholder="Nachname"></input>
            <input className="strasse-field" placeholder="Strasse"></input>
            <input className="plz-field" placeholder="Postleitzahl"></input>
            <input className="stadt-field" placeholder="Stadt"></input>
            </div>
            <hr id="horizontal-trenner-e" width="1" size="595"></hr>
        </div>
  );
};

export default ProfilHauptDaten;
