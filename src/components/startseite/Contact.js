import React from "react";
import "./Startseite.css";

function Contact() {
    return (
        <React.Fragment>
            <div id="contact">
                <div>
                    <h3>Nehmen Sie mit uns Kontakt auf.</h3>
                    <hr></hr>
                    <p>
                        Sie sind nur noch ein Schritt von uns entfernt.
                        <br></br>
                        Treten Sie mit uns in Verbindung, um Ihre Firma einzurichten - vollständig
                        <br></br>
                        kostenlos!
                    </p>

                    <form method="post" action="send_email.php">
                        <input className="input-text" type="Email" name="Email" tabindex="1" placeholder="E-Mail"></input><br></br>
                        <input className="input-text" type="text" tabindex="2" name="Betreff" placeholder="Betreff"></input><br></br>
                        <textarea className="input-text" tabindex="3" name="Message" placeholder="Nachricht"></textarea><br></br>
                        <input className="button" id="button" type="submit"></input>
                    </form>
                </div>
            </div>
            <div id="footer">
                <div id="copyright">
                    <p>&copy; 2021 Work Manager by Supernerds</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;
