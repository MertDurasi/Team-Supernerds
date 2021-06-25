import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import EinstellungInput from './EinstellungInput';
import Profilbild from '../../../../img/dashboard/ProfilEinstellungen.svg';
import "./Einstellungen.css";

const Einstellungen = () => {
  return (
    <main>
      <div className="main__container">
        <div className="headliner">
          <h2>Einstellungen</h2>
          <span >Hier können Sie Änderungen an Ihrem Profil vornehmen</span>
        </div>





        <div className="d-none d-md-block grundgeruest-container">
          <div className="d-none d-md-block einstellungen-container">

            <Container fluid>

              <Row className="">

                {/* LINKS */}
                <Col className="" md={6}>

                  <Row>
                    <Col className="" md={6}><EinstellungInput identifier={"text-field-vorname"} text={"Vorname"} /></Col>
                    <Col className="" md={6}><EinstellungInput identifier={"text-field-nachname"} text={"Nachname"} /></Col>
                  </Row>

                  <Row>
                    <Col className="" md={12}><EinstellungInput identifier={"text-field-strasse"} text={"Straße"} /></Col>
                  </Row>

                  <Row>
                    <Col className="" md={6}><EinstellungInput identifier={"text-field-postleitzahl"} text={"Postleitzahl"} /></Col>
                    <Col className="" md={6}><EinstellungInput identifier={"text-field-stadt"} text={"Stadt"} /></Col>
                  </Row>

                  <Row className="">
                    <button id="speichern-einstellungen-btn">Speichern</button>
                  </Row>

                </Col>
                {/* LINKS */}

                {/* RECHTS */}
                <Col className="" md={6}>

                  <Row>
                    <Col className="" md={12}><EinstellungInput identifier={"text-field-altespasswort"} text={"Altes Passwort"} /></Col>
                  </Row>

                  <Row>
                    <Col className="" md={12}><EinstellungInput identifier={"text-field-neuespasswort"} text={"Neues Passwort"} /></Col>
                  </Row>

                  <Row>
                    <Col className="" md={12}><EinstellungInput identifier={"text-field-neuespasswortbestaetigen"} text={"Neues Passwort bestätigen"} /></Col>
                 </Row>

                  <Row className="">
                    <button id="speichern-einstellungen-btn">Passwort ändern</button>
                  </Row>

                  <Row>
                    <Col className="" md={12}><EinstellungInput identifier={"text-field-emailadresse"} text={"E-Mail-Adresse"} /></Col>
                  </Row>

                  <Row className="">
                    <button id="speichern-einstellungen-btn">E-Mail aktualisieren</button>
                  </Row>

                </Col>
                {/* RECHTS */}
                
              </Row>

            </Container>

          </div>
        </div>





        {/* Mehr oder weniger REDUNDANT */}
        <div className="d-md-none grundgeruest-container2">
          <div className="d-md-none einstellungen-container">

            <Container fluid>

              <Row>
                <Col className="" xs={12}><EinstellungInput identifier={"text-field-vorname"} text={"Vorname"} /></Col>
                <Col className="" xs={12}><EinstellungInput identifier={"text-field-nachname"} text={"Nachname"} /></Col>
              </Row>

              <Row>
                <Col className="" xs={12}><EinstellungInput identifier={"text-field-strasse"} text={"Straße"} /></Col>
              </Row>

              <Row>
                <Col className="" xs={12}><EinstellungInput identifier={"text-field-postleitzahl"} text={"Postleitzahl"} /></Col>
                <Col className="" xs={12}><EinstellungInput identifier={"text-field-stadt"} text={"Stadt"} /></Col>
              </Row>

              <Row className="">
                <button id="speichern-einstellungen-btn">Speichern</button>
              </Row>

              <Row>
                <Col className="" xs={12}><EinstellungInput identifier={"text-field-altespasswort2"} text={"Altes Passwort"} /></Col>
              </Row>

              <Row>
                <Col className="" xs={12}><EinstellungInput identifier={"text-field-neuespasswort"} text={"Neues Passwort"} /></Col>
              </Row>

              <Row>
                <Col className="" xs={12}><EinstellungInput identifier={"text-field-neuespasswortbestaetigen"} text={"Neues Passwort bestätigen"} /></Col>
              </Row>

              <Row className="">
                <button id="speichern-einstellungen-btn">Passwort ändern</button>
              </Row>

              <Row>
                <Col className="" xs={12}><EinstellungInput identifier={"text-field-emailadresse2"} text={"E-Mail-Adresse"} /></Col>
              </Row>

              <Row className="">
                <button id="speichern-einstellungen-btn2">E-Mail aktualisieren</button>
              </Row>

            </Container>

          </div>
        </div>
        {/* Mehr oder weniger sREDUNDANT */}





      </div>
    </main>
  );
};

export default Einstellungen;