import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./Kontaktformular.css";
import DragDropFeature from "./Kontaktformular/DragDropFeature.js";

class Kontaktformular extends Component {
  render() {
    return (
      <main>
        <div className="main__container">
          <div className="headliner">
            <h2>Kontaktformular</h2>
            <span>Schreiben Sie ihren Vorgesetzten an</span>
          </div>





          <div className="d-none d-md-block grundgeruest-container">
            <div className="d-none d-md-block kontaktformular-container">
              
              <Container fluid>
                
                <Row>

                  <Col className="" md={2}>
                  </Col>

                  <Col className="" md={4}>
                    <input className="betreff-field" placeholder="Betreff"></input>
                  </Col>

                  <Col className="" md={4}>
                    <input className="empfaenger-field" placeholder="Empfänger"></input>
                  </Col>

                  <Col className="" md={2}>
                  </Col>

                </Row>

                <Row>

                  <Col className="" md={2}>
                  </Col>

                  <Col className="" md={4}>
                    <input className="email-adresse-field" placeholder="Ihre E-Mail-Adresse"></input>
                  </Col>

                  <Col className="" md={4}>
                    <input className="mobilfunknummer-field" placeholder="Ihre Mobilfunknummer"></input>
                  </Col>

                  <Col className="" md={2}>
                  </Col>

                </Row>

                <Row>

                  <Col className="" md={2}>
                  </Col>

                  <Col className="" md={8}>
                    <textarea className="message-field" placeholder="Nachricht"></textarea>
                  </Col>

                  <Col className="" md={2}>
                  </Col>

                </Row>

                <Row>

                  <Col className="" md={2}>
                  </Col>

                  <Col className="" md={8}>
                    <DragDropFeature></DragDropFeature>
                  </Col>

                  <Col className="" md={2}>
                  </Col>

                </Row>

                <Row>

                  <Col className="" md={2}>
                  </Col>

                  <Col className="row justify-content-center" md={8}>
                    <button className="absenden-button">Absenden</button>
                  </Col>

                  <Col className="" md={2}>
                  </Col>

                </Row>
                
              </Container>

            </div>
          </div>





          {/* Mehr oder weniger REDUNDANT */}
          <div className="d-md-none grundgeruest-container3">
            <div className="d-md-none kontaktformular-container">
              
              <Container fluid>
                
                <Row>

                  <Col className="" md={2}>
                  </Col>

                  <Col className="" md={4}>
                    <input className="betreff-field" placeholder="Betreff"></input>
                  </Col>

                  <Col className="" md={4}>
                    <input className="empfaenger-field2" placeholder="Empfänger"></input>
                  </Col>

                  <Col className="" md={2}>
                  </Col>

                </Row>

                <Row>

                  <Col className="" md={2}>
                  </Col>

                  <Col className="" md={4}>
                    <input className="email-adresse-field2" placeholder="Ihre E-Mail-Adresse"></input>
                  </Col>

                  <Col className="" md={4}>
                    <input className="mobilfunknummer-field2" placeholder="Ihre Mobilfunknummer"></input>
                  </Col>

                  <Col className="" md={2}>
                  </Col>

                </Row>

                <Row>

                  <Col className="" md={2}>
                  </Col>

                  <Col className="" md={8}>
                    <textarea className="message-field" placeholder="Nachricht"></textarea>
                  </Col>

                  <Col className="" md={2}>
                  </Col>

                </Row>

                <Row>

                  <Col className="" md={2}>
                  </Col>

                  <Col className="" md={8}>
                    <DragDropFeature></DragDropFeature>
                  </Col>

                  <Col className="" md={2}>
                  </Col>

                </Row>

                <Row>

                  <Col className="" md={2}>
                  </Col>

                  <Col className="row justify-content-center" md={8}>
                    <button className="absenden-button2">Absenden</button>
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
  }
};

export default Kontaktformular;
