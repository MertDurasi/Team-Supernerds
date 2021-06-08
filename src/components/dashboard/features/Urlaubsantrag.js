
import "./Urlaubsantrag.css";
import info_logo from "../../../img/dashboard/info-urlaubsantrag.png";

// TODO: Responsive, evtl. Date time für Von-Bis Daten & "Form" für POST request

const Urlaubsantrag = () => {
  return (
    <main>
    <div className="main__container">
      <div className="headliner">
        <h2>Urlaubsantrag</h2>
        <span>Hier können Sie einen Urlaubsantrag einreichen</span>
      </div>
        <div className="grundgeruest-container">
          
              <div id="urlaubsmethoden">
              <input type="radio" id="tariflich" value="urlaub_tariflich" name="reasoning-group-u"></input>
              <label for="tariflich">Tariflicher Urlaub</label>
              <input type="radio" id="sonder" value="urlaub_sonder" name="reasoning-group-u"></input>
              <label for="sonder">Sonderurlaub</label> 
              </div>
            {/* Evtl. type=date */}
            <div id="urlaubsdaten">
            <input type="date" className="von-field" id="von-field-id" placeholder="Von [TT.MM.JJJJ]"></input>
            <label for="von-field-id" id="label-von-field">Von:</label>
            <input type="date" className="bis-field" id="bis-field-id" placeholder="Bis [TT.MM.JJJJ]"></input>
            <label for="bis-field-id" id="label-bis-field">Bis:</label>
            </div>
            <textarea id="message-field-urlaubsantrag" placeholder="Schreiben Sie einen Kommentar..."></textarea>
            <span id="info-text-urlaubsantrag">
            <img width="20" src={info_logo} alt="info"/> Mit der Bestätigung des Antrag-Buttons bestätigen Sie die Richtigkeit<br />
              Ihrer Angaben. Eine Änderung des vorstehend genehmigten Urlaubs<br />
              bedarf der Zustimmung des Arbeitgebers.
            </span>

            <button id="antrag-stellen-btn" >Antrag stellen</button>
        
        </div>
     </div>
  </main>
  );
};

export default Urlaubsantrag;
