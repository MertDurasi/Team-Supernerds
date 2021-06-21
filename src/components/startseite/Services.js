import React from "react";
import Servicebox from "./Servicebox";
import "./Startseite.css";
import service_1 from "../../img/startseite/service/Dokumente-Service.png";
import service_2 from "../../img/startseite/service/Dienstplan-Service.png";
import service_3 from "../../img/startseite/service/Urlaubsantrag-Service.png";
import service_4 from "../../img/startseite/service/Kontakt-Service.png";


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
                    <Servicebox
                    logo={service_1}
                    ueberschrift="Dokumente"
                    beschreibung="Ihre Dokumente können Sie jederzeit einsehen."
                    />

                    <Servicebox
                    logo={service_2}
                    ueberschrift="Dienstplan"
                    beschreibung="Den Dienstplan können Sie sich online und bequem anzeigen lassen."
                    />
                    
                    <Servicebox
                    logo={service_3}
                    ueberschrift="Urlaubsanträge"
                    beschreibung="Mit einem Klick im Dashboard ist der Urlaubsantrag erledigt."
                    />

                    <Servicebox
                    logo={service_4}
                    ueberschrift="Kontakt"
                    beschreibung="Erreichen Sie Ihren Vorgesetzten online."
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Services;