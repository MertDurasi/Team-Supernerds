import React from "react";
import Teammate from './Teammate';
import "./Startseite.css";
import logo1 from "../../img/startseite/mates/1.png";
import logo2 from "../../img/startseite/mates/2.png";
import logo3 from "../../img/startseite/mates/3.png";
import logo4 from "../../img/startseite/mates/4.png";
import logo5 from "../../img/startseite/mates/5.png";

function Team() {
    return (
        <React.Fragment>
            <div id="about">
                <h3>Hallo. Wir sind Supernerds.</h3>
                <hr></hr>
                <p>
                    Wir wollen die Organisation von Firmen weltweit digitalisieren - angefangen in <br></br> Deutschland.
                </p>

                <div id="team-container">
                    <Teammate name="Linta Amirthasingam" aufgabe="Designerin" logoNr={logo4}/>       
                    <Teammate name="Bünyamin Akkoc" aufgabe="Designer" logoNr={logo5} />
                    <Teammate name="Mert Durasi" aufgabe="Programmierer" logoNr={logo2}/>       
                    <Teammate name="Alexander Kokoreff" aufgabe="Programmierer" logoNr={logo1}/>       
                    <Teammate name="Denny Falls Rodriguez" aufgabe="Programmierer" logoNr={logo3}/>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Team;