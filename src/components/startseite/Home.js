import React from "react";
import home_illustration from "../../img/startseite/home_illustration.svg";
import supernerds from "../../img/startseite/supernerds.svg";
import "./Startseite.css";

function Home() {
    return (
        <React.Fragment>
            <div id="home">
                <div id="home-left-container">
                    <p>Ihr</p>
                    <h1>Unternehmen</h1>
                    <h2>online.</h2>
                    <p>
                        Der Work Manager ermöglicht es Ihnen, Ihr Unternehmen
                        <br></br>
                        online und bequem zu verwalten.
                    </p>
                    <button id="login-button">Anfragen</button>
                </div>

                <div>
                    <img id="home-illustration" src={home_illustration} alt="home_illustration"></img>
                </div>
            </div>


            { /* ================= Supernerds Bar ================= */}
            <div id="supernerds-container">
                <img id="supernerds" src={supernerds} alt="supernerds"></img>
            </div>
        </React.Fragment>
    );
}

export default Home;