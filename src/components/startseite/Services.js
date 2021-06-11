import React from "react";
import Servicebox from "./Servicebox";
import "./Startseite.css";

function Services() {
    return (
        <React.Fragment>
            <div id="services">
                <h3>Unsere Dienstleistungen</h3>
                <hr></hr>
                <p>
                    Der Work Manager hilft Unternehmen dabei, ihren innerbetrieblichen
                    <br></br>
                    Datenaustausch zu erleichtern. Worauf warten Sie?
                </p>

                <div id="service-container">
                    <img src="https://via.placeholder.com/300x400" alt="service"></img>
                    <img src="https://via.placeholder.com/300x400" alt="service"></img>
                    <img src="https://via.placeholder.com/300x400" alt="service"></img>
                    <img src="https://via.placeholder.com/300x400" alt="service"></img>
                    <img src="https://via.placeholder.com/300x400" alt="service"></img>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Services;