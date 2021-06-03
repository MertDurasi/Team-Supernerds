
import "./Einstellungen.css";
import ProfilHauptDaten from "./Einstellungen/ProfilHauptDaten.js";

const Einstellungen = () => {
  return (
    <main>
    <div className="main__container">
      <div className="headliner">
        <h2>Einstellungen</h2>
        <span>Hier können Sie änderungen an ihrem Profil vornehmen</span>
      </div>
        <div className="grundgeruest-container">
          <div className="einstellungen-container">
            <ProfilHauptDaten></ProfilHauptDaten>
          </div>
      </div>
     </div>
  </main>
  );
};

export default Einstellungen;
