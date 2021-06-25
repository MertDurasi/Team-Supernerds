import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
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





        <div className="d-none d-md-block grundgeruest-container">
          <div className="d-none d-md-block urlaubsantrag-container">
          
          <Container fluid>
                
                <Row>

                  <Col className="" md={2}>
                  </Col>
                  
                  <Col className="tariflich" md={4}>
                      <input type="radio" id="tariflich" value="urlaub_tariflich" name="reasoning-group-u"></input>
                      <label for="tariflich">Tariflicher Urlaub</label>
                  </Col>

                  <Col className="sonder" md={4}>
                      <input type="radio" id="sonder" value="urlaub_sonder" name="reasoning-group-u"></input>
                      <label for="sonder">Sonderurlaub</label>
                  </Col>

                  <Col className="" md={2}>
                  </Col>

                </Row>

                <Row>

                  <Col className="" md={2}>
                  </Col>
                  
                  <Col className=" von" md={4}>
                    <label for="von-field-id" id="label-von-field">Von:</label>
                    <input type="date" className="von-field" id="von-field-id" placeholder="Von [TT.MM.JJJJ]"></input>
                  </Col>

                  <Col className=" bis" md={4}>
                    <label for="bis-field-id" id="label-bis-field">Bis:</label>
                    <input type="date" className="bis-field" id="bis-field-id" placeholder="Bis [TT.MM.JJJJ]"></input>
                  </Col>

                  <Col className="" md={2}>
                  </Col>

                </Row>

                <Row>

                  <Col className="" md={2}>
                  </Col>
                  
                  <Col className="" md={8}>
                    <textarea id="message-field-urlaubsantrag" placeholder="Kommentar"></textarea>
                  </Col>

                  <Col className="" md={2}>
                  </Col>

                </Row>

                <Row>

                  <Col className="" md={2}>
                  </Col>
                  
                  <Col className="" md={8}>
                    <span id="info-text-urlaubsantrag">
                      <img width="20" src={info_logo} alt="info"/>
                        Mit der Bestätigung des Antrag-Buttons bestätigen Sie die Richtigkeit Ihrer Angaben. Eine Änderung des vorstehend genehmigten Urlaubs bedarf der Zustimmung des Arbeitgebers.
                    </span>
                  </Col>

                  <Col className="" md={2}>
                  </Col>

                </Row>

                <Row>

                  <Col className="" md={2}>
                  </Col>
                  
                  <Col className="row justify-content-center" md={8}>
                    <button id="antrag-stellen-btn" >Antrag stellen</button>
                  </Col>

                  <Col className="" md={2}>
                  </Col>

                </Row>


          </Container>
          
          
          </div>
        </div>



        {/* Mehr oder weniger REDUNDANT */}
        <div className="d-md-none grundgeruest-container4">
          <div className="d-md-none urlaubsantrag-container">
          
          <Container fluid>
                
                <Row>

                  
                  <Col className="tariflich2" xs={6}>
                      <input type="radio" id="tariflich2" value="urlaub_tariflich" name="reasoning-group-u"></input>
                      <label for="tariflich">Tariflicher Urlaub</label>
                  </Col>

                  <Col className="sonder2" xs={6}>
                      <input type="radio" id="sonder2" value="urlaub_sonder" name="reasoning-group-u"></input>
                      <label for="sonder">Sonderurlaub</label>
                  </Col>


                </Row>

                <Row>

                  <Col className="von" xs={6}>
                    <label for="von-field-id2" id="label-von-field">Von:</label>
                    <input type="date" className="von-field2" id="von-field-id2" placeholder="Von [TT.MM.JJJJ]"></input>
                  </Col>

                  <Col className="bis" xs={6}>
                    <label for="bis-field-id2" id="label-bis-field">Bis:</label>
                    <input type="date" className="bis-field2" id="bis-field-id2" placeholder="Bis [TT.MM.JJJJ]"></input>
                  </Col>

                </Row>

                <Row>

                  <Col className="" md={2}>
                  </Col>
                  
                  <Col className="" md={8}>
                    <textarea id="message-field-urlaubsantrag2" placeholder="Kommentar"></textarea>
                  </Col>

                  <Col className="" md={2}>
                  </Col>

                </Row>

                <Row>

                  <Col className="" md={2}>
                  </Col>
                  
                  <Col className="" md={8}>
                    <span id="info-text-urlaubsantrag">
                      <img width="20" src={info_logo} alt="info"/>
                        Mit der Bestätigung des Antrag-Buttons bestätigen Sie die Richtigkeit Ihrer Angaben. Eine Änderung des vorstehend genehmigten Urlaubs bedarf der Zustimmung des Arbeitgebers.
                    </span>
                  </Col>

                  <Col className="" md={2}>
                  </Col>

                </Row>

                <Row>

                  <Col className="" md={2}>
                  </Col>
                  
                  <Col className="row justify-content-center" md={8}>
                    <button id="antrag-stellen-btn2" >Antrag stellen</button>
                  </Col>

                  <Col className="" md={2}>
                  </Col>

                </Row>


          </Container>
          
          
          </div>
        </div>
        {/* Mehr oder weniger REDUNDANT */}

        







        
      </div>
    </main>
  );
};

export default Urlaubsantrag;
