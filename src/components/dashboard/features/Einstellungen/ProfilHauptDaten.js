import "./ProfilHauptDaten.css";


const ProfilHauptDaten = () => {


  return (
        <div className="profile-first-container">
            <h1>Name, Vorname, Bild usw. hier</h1>
            <div className="wrapper-for-img"></div>
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
