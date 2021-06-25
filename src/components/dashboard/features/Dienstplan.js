
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import ScheduleCalender from "./Dienstplan/ScheduleCalender.js";
import "./Dienstplan.css";

const Dienstplan = () => {
  return (
    <main>
      <div className="main__container">
        <div className="headliner">
          <h2>Dienstplan</h2>
          <span>Hier können Sie ihren Dienstplan einsehen</span>
        </div>
        <div className="grundgeruest-container">
          <div className="dienstplan-container">
            <Container fluid>
                <Row className="test" md={12}>
                  <ScheduleCalender></ScheduleCalender>
              </Row>
            </Container> 
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dienstplan;
