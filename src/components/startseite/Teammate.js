import React from 'react';
import './Teammate.css';
import './Startseite.css';

const Teammate = ({name, aufgabe, logoNr}) => {
    return (
        <div id="mate">
            <img src={logoNr} alt="logo"></img>
            <h3>{name}</h3>
            <p>{aufgabe}</p>
        </div>
    );
}

export default Teammate;