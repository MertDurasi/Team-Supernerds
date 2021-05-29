
import "./Kontaktformular.css";

const Kontaktformular = () => {
  return (
    <main>
    <div className="main__container">
      <div className="headliner">
        <h2>Kontaktformular hier</h2>
        <span>Schreiben Sie ihren Vorgesetzten an</span>
      </div>
        <div className="grundgeruest-container">
          <div className="kontaktformular-container">
              <input className="betreff-field" placeholder="Betreff"></input>
              <input className="empfaenger-field" placeholder="Empfänger"></input>
              <input className="email-adresse-field" placeholder="Ihre E-Mail-Adresse"></input>
              <input className="mobilfunknummer-field" placeholder="Ihre Mobilfunknummer"></input>
              <textarea className="message-field" placeholder="Hier kommt Ihre Nachricht rein"></textarea>
              <textarea className="draggable-field" placeholder="Drag n Drop"></textarea>
              <button className="absenden-button" >Absenden</button>
          </div>
        </div>
     </div>
  </main>
  );
};

export default Kontaktformular;
