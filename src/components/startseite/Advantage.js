import React from 'react';
import './Servicebox.css';
import './Startseite.css';

const Advantage = ({logo, ueberschrift, beschreibung}) => {
    return (
        <div id="service-box">
            <img src={ logo } alt="service-logo"></img>
            <br></br>
            <h3>{ ueberschrift }</h3>
            <p>{ beschreibung }</p>
        </div>
    );
}

export default Servicebox;