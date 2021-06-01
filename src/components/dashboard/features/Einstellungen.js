
import "./Einstellungen.css";
import ProfilHauptDaten from "./Einstellungen/ProfilHauptDaten.js";
import ProfilNebenDaten from "./Einstellungen/ProfilNebenDaten";

const Einstellungen = () => {
  return (
    <main>
    <div className="main__container">
      <div className="headliner">
        <h2>Einstellungen hier</h2>
        <span>Hier können Sie änderungen an ihrem Profil vornehmen</span>
      </div>
        <div className="grundgeruest-container"></div>
        <div className="einstellungen-container">
          <ProfilHauptDaten></ProfilHauptDaten>
          <ProfilNebenDaten></ProfilNebenDaten>
        </div>
     </div>
  </main>
  );
};

export default Einstellungen;
