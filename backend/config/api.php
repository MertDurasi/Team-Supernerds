<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Slim\Routing\RouteCollectorProxy;
use Utils\Auth\Auth;
use Utils\Controllers\Account;
use Utils\Controllers\Mitarbeiter;
use Utils\Controllers\Firma;
use Utils\Controllers\Dienstplan;




require __DIR__ . '/../vendor/autoload.php';

$container = require __DIR__ . '/database.php';

AppFactory::setContainer($container);

$app = AppFactory::create();

$app->addRoutingMiddleware();

$app->addErrorMiddleware(true, true, true);



function tokenParser($request) : string {

    return substr($request->getHeader('Authorization')[0], 7);

}




/**
 * API GRUPPE FÜR AUTH
 */

$app->group("/auth", function (RouteCollectorProxy $group) {

    $group->post("/login", function(Request $request, Response $response) {
        $authorization = new Auth($this->get("db"));

        $data = $request->getParsedBody();

        $authToken = $authorization->authUser($data["username"], $data["passwort"]);
        $response->getBody()->write($authToken);

        return $response->withHeader("Content-Type", "application/json");

    });

});






/**
 * API GRUPPE FÜR DASHBOARD
 */

$app->group("/api/dashboard", function (RouteCollectorProxy $group) {



    /**
     * API GRUPPE FÜR DASHBOARD --- ANKÜNDIGUNG
     */


    $group->group("/ankuendigung", function (RouteCollectorProxy $group) {

        /**
         * Endpunkt, um Ankündigungen anzuzeigen
         */

        $group->get("/", function (Request $request, Response $response, $params) {

            $ankuendigungsInstance = new \Utils\Controllers\Ankuendigung($this->get("db"));

            $response->getBody()->write(json_encode($ankuendigungsInstance->getAnkuendigungen()));

            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um spezielle Ankündigungen anzuzeigen
         */

        $group->get("/{id:[0-9]+}", function (Request $request, Response $response, $params) {

            $ankuendigungsInstance = new \Utils\Controllers\Ankuendigung($this->get("db"));

            $response->getBody()->write(json_encode($ankuendigungsInstance->getAnkuendigungNachricht($params["id"])));

            return $response->withHeader("Content-Type", "application/json");

        });



        /**
         * Endpunkt, um spezielle Ankündigungen zu ändern
         */

        $group->put("/edit/{id:[0-9]+}", function (Request $request, Response $response, $params) {

            $ankuendigungsInstance = new \Utils\Controllers\Ankuendigung($this->get("db"));

            $data = $request->getParsedBody();

            $response->getBody()->write(json_encode($ankuendigungsInstance->updateAnkuendigung($data["nachricht"],$params["id"])));

            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um spezielle Ankündigung zu löschen
         */

        $group->delete("/delete/{id:[0-9]+}", function (Request $request, Response $response, $params) {

            $ankuendigungsInstance = new \Utils\Controllers\Ankuendigung($this->get("db"));

            $response->getBody()->write(json_encode($ankuendigungsInstance->deleteAnkuendigung($params["id"])));

            return $response->withHeader("Content-Type", "application/json");

        });

    });

    /**
     * API GRUPPE FÜR DASHBOARD --- DIENSTPLAN
     */

    $group->group("/dienstplan", function (RouteCollectorProxy $group) {

        /**
         * Endpunkt, um Dienstplan von speziellen Mitarbeiter anzuzuzeigen
         */

        $group->get("/{mitid:[0-9]+}", function(Request $request, Response $response, $params) {

        $dienstplanInstance = new Dienstplan($this->get("db"));

        $response->getBody()->write(json_encode($dienstplanInstance->getDienstplanByMitarbeiterId($params["mitid"])));

        return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um Dienstplan von speziellen Mitarbeiter zu ändern
         */

        $group->put("/edit/{mitid:[0-9]+}", function(Request $request, Response $response, $params) {

            $dienstplanInstance = new Dienstplan($this->get("db"));

            $data = $request->getParsedBody();

            $dienstplanInstance->editDienstplan($data["title"], $data["start"], $data["end"],$params["mitid"]);

            return $response->withHeader("Content-Type", "application/json");

        });



        /**
         * Endpunkt, um Dienstplan von speziellen Mitarbeiter anzulegen
         */

        $group->post("/create", function(Request $request, Response $response, $params) {

            $dienstplanInstance = new Dienstplan($this->get("db"));

            $data = $request->getParsedBody();

            $dienstplanInstance->createDienstplanMitarbeiter($data["title"], $data["start"], $data["end"], $data["mitid"]);

            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um Dienstplan von speziellen Mitarbeiter zu löschen
         */

        $group->delete("/delete/{mitid:[0-9]+}", function(Request $request, Response $response, $params) {

            $dienstplanInstance = new Dienstplan($this->get("db"));


            $dienstplanInstance->deleteDienstplan($params["mitid"]);

            return $response->withHeader("Content-Type", "application/json");

        });



    });





    /**
     * API GRUPPE FÜR DASHBOARD --- URLAUBSANTRAG
     */


    $group->group("/urlaubsantrag", function (RouteCollectorProxy $group) {

        /**
         * Endpunkt, um Urlaubsantrag von zu erstellen
         */

        $group->post("/create", function(Request $request, Response $response, $params) {

            $urlaubsantragInstance = new \Utils\Controllers\Urlaubsantrag($this->get("db"));

            $data = $request->getParsedBody();

            $urlaubsantragInstance->createUrlaubsantrag($data["datum_von"], $data["datum_bis"], tokenParser($request));


            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um Urlaubsantrag anzunehmen
         */

        $group->post("/accept/{id:[0-9]+}", function(Request $request, Response $response, $params) {

            $urlaubsantragInstance = new \Utils\Controllers\Urlaubsantrag($this->get("db"));

            // TODO

            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um Urlaubsanträge anzuzeigen
         */

        $group->get("/", function(Request $request, Response $response, $params) {

            $urlaubsantragInstance = new \Utils\Controllers\Urlaubsantrag($this->get("db"));

            $response->getBody()->write(json_encode($urlaubsantragInstance->getUrlaubsantraege()));

            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um speziellen Urlaubsantrag anzuzeigen
         */

        $group->get("/{id:[0-9]+}", function(Request $request, Response $response, $params) {

            $urlaubsantragInstance = new \Utils\Controllers\Urlaubsantrag($this->get("db"));

            $response->getBody()->write(json_encode($urlaubsantragInstance->getUrlaubsantrag($params["id"])));
            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um speziellen Urlaubsantrag abzulehnen/löschen
         */

        $group->delete("/delete/{id:[0-9]+}", function(Request $request, Response $response, $params) {

            $urlaubsantragInstance = new \Utils\Controllers\Urlaubsantrag($this->get("db"));

            $urlaubsantragInstance->deleteUrlaubsantrag($params["id"]);

            return $response->withHeader("Content-Type", "application/json");

        });


    });










    /**
     * API GRUPPE FÜR DASHBOARD --- LOHNABRECHNUNG
     */



    $group->group("/lohnabrechnung", function (RouteCollectorProxy $group) {



        /**
         * Endpunkt, um spezielle Lohnabrechnungen anzuzeigen
         */

        $group->get("/{id:[0-9]+}/{mitid:[0-9]+}", function(Request $request, Response $response, $params) {

            $lohnabrechnungInstance = new \Utils\Controllers\Lohnabrechnung($this->get("db"));

            $response->getBody()->write(json_encode($lohnabrechnungInstance->getLohnabrechnungMitarbeiter($params["id"], $params["mitid"])));


            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um alle Lohnabrechnungen von einem Mitarbeiter anzuzeigen
         */

        $group->get("/{mitid:[0-9]+}", function(Request $request, Response $response, $params) {

            $lohnabrechnungInstance = new \Utils\Controllers\Lohnabrechnung($this->get("db"));

            $response->getBody()->write(json_encode($lohnabrechnungInstance->getLohnabrechnungenMitarbeiter($params["mitid"])));

            return $response->withHeader("Content-Type", "application/json");

        });

        /**
         * Endpunkt, um alle Lohnabrechnungen  anzuzeigen
         */

        $group->get("/all", function(Request $request, Response $response, $params) {

            $lohnabrechnungInstance = new \Utils\Controllers\Lohnabrechnung($this->get("db"));

            $response->getBody()->write(json_encode($lohnabrechnungInstance->getLohnabrechnungen()));

            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um spezielle Lohnabrechnung zu erstellen
         */


        $group->post("/create", function(Request $request, Response $response, $params) {

            $lohnabrechnungInstance = new \Utils\Controllers\Lohnabrechnung($this->get("db"));

            $data = $request->getParsedBody();


            $files = $request->getUploadedFiles();

            $response->getBody()->write($lohnabrechnungInstance->createLohnabrechnung($data["mitid"], $files["datei"], $data["datum"]));

            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um spezielle Lohnabrechnung zu ändern
         */

        $group->put("/edit/{id:[0-9]+}/{mitid:[0-9]+}", function(Request $request, Response $response, $params) {

            $lohnabrechnungInstance = new \Utils\Controllers\Lohnabrechnung($this->get("db"));

            $data = $request->getParsedBody();


            $files = $request->getUploadedFiles();

            $response->getBody()->write($lohnabrechnungInstance->editLohnabrechnung($params["mitid"], $params["id"], $files["datei"], $data["datum"]));

            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um spezielle Lohnabrechnung zu löschen
         */

        $group->delete("/delete/{id:[0-9]+}", function(Request $request, Response $response, $params) {

            $lohnabrechnungInstance = new \Utils\Controllers\Lohnabrechnung($this->get("db"));

            $response->getBody()->write($lohnabrechnungInstance->deleteLohnabrechnung($params["mitid"], $params["id"]));

            return $response->withHeader("Content-Type", "application/json");

        });

    });


    /**
     * API GRUPPE FÜR DASHBOARD --- KONTAKTFORMULAR
     */


    $group->group("/kontaktformular", function (RouteCollectorProxy $group) {


        /**
         * Endpunkt, um spezielles Formular anzuzeigen
         */

        $group->get("/{id:[0-9]+}/{mitid:[0-9]+}", function(Request $request, Response $response, $params) {

            $kontaktFormularInstance = new \Utils\Controllers\Kontaktformular($this->get("db"));

            $response->getBody()->write(json_encode($kontaktFormularInstance->getKontaktRequestSpeziell($params["mitid"], $params["id"])));

            return $response->withHeader("Content-Type", "application/json");

        });



        /**
         * Endpunkt, um spezielles alle Formular von einem Mitarbeiter anzuzeigen
         */

        $group->get("/{mitid:[0-9]+}", function(Request $request, Response $response, $params) {

            $kontaktFormularInstance = new \Utils\Controllers\Kontaktformular($this->get("db"));

            $response->getBody()->write(json_encode($kontaktFormularInstance->getKontaktRequestMitarbeiter($params["mitid"])));

            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um alle Formulare anzuzeigen
         */

        $group->get("/{id:[0-9]+}{mitid:[0-9]+}", function(Request $request, Response $response, $params) {

            $kontaktFormularInstance = new \Utils\Controllers\Kontaktformular($this->get("db"));

            $response->getBody()->write(json_encode($kontaktFormularInstance->getAllKontaktRequests()));

            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um spezielles Formular zu erstellen
         */

        $group->post("/create", function(Request $request, Response $response, $params) {

            $kontaktFormularInstance = new \Utils\Controllers\Kontaktformular($this->get("db"));

            $data = $request->getParsedBody();

            $files = $request->getUploadedFiles();

            $response->getBody()->write($kontaktFormularInstance->createKontaktRequest($data["mitid"], $data["nachricht"], $files["anhang"]));

            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um spezielles Formular zu löschen
         */

        $group->delete("/delete/{id:[0-9]+}", function(Request $request, Response $response, $params) {

            $kontaktFormularInstance = new \Utils\Controllers\Kontaktformular($this->get("db"));

            $response->getBody()->write(json_encode($kontaktFormularInstance->deleteKontaktRequest($params["id"])));

            return $response->withHeader("Content-Type", "application/json");

        });


    });


    /**
     * API GRUPPE FÜR DASHBOARD --- DOWNLOADS
     */


    $group->group("/downloads", function (RouteCollectorProxy $group) {


        /**
         * Endpunkt, um alle Downloads anzuzeigen
         */

        $group->get("/", function(Request $request, Response $response, $params) {

            $downloadsInstance = new \Utils\Controllers\Downloads($this->get("db"));

            $response->getBody()->write(json_encode($downloadsInstance->getDownloads()));


            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um speziellen Download anzuzeigen
         */

        $group->get("/{id:[0-9]+}", function(Request $request, Response $response, $params) {

            $downloadsInstance = new \Utils\Controllers\Downloads($this->get("db"));

            $response->getBody()->write(json_encode($downloadsInstance->getDownload($params["id"])));

            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um speziellen Download zu erstellen
         */

        $group->post("/create", function(Request $request, Response $response, $params) {

            $downloadsInstance = new \Utils\Controllers\Downloads($this->get("db"));

            $files = $request->getUploadedFiles();

            $response->getBody()->write($downloadsInstance->createDownload($files["datei"]));

            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um speziellen Download zu löschen
         */

        $group->delete("/delete/{id:[0-9]+}", function(Request $request, Response $response, $params) {

            $downloadsInstance = new \Utils\Controllers\Downloads($this->get("db"));

            $response->getBody()->write($downloadsInstance->deleteDownload($params["id"]));

            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um speziellen Download zu ändern
         */

        $group->put("/edit/{id:[0-9]+}", function(Request $request, Response $response, $params) {

            $downloadsInstance = new \Utils\Controllers\Downloads($this->get("db"));

            $files = $request->getUploadedFiles();

            $response->getBody()->write($downloadsInstance->editDownload($params["id"], $files["datei"]));

            return $response->withHeader("Content-Type", "application/json");

        });


    });


    /**
     * API GRUPPE FÜR DASHBOARD --- EINSTELLUNGEN
     */


    $group->group("/einstellungen", function (RouteCollectorProxy $group) {


        /**
         * Endpunkt, um Einstellungen von Mitarbeiter zu laden (Strasse, Hausnummer etc)
         */

        $group->get("/{id:[0-9]+}", function(Request $request, Response $response, $params) {

            // Erstellen, wenn andere Endpunkte nicht aussreichen

            return $response->withHeader("Content-Type", "application/json");

        });


        /**
         * Endpunkt, um Einstellungen von Mitarbeiter zu ändern (Passwort, Email etc)
         */

        $group->put("/edit/{id:[0-9]+}", function(Request $request, Response $response, $params) {

            $mitarbeiterInstance = new Mitarbeiter($this->get("db"));

            $data = $request->getParsedBody();

            $resp = $mitarbeiterInstance->editMitarbeiter($params["id"], $data["telefon"], $data["mobil"], $data["email"], $data["strasse"], $data["hausnummer"], $data["ort"], $data["plz"]);


            $response->getBody()->write(json_encode($resp));

            return $response->withHeader("Content-Type", "application/json");

        });



    });

})->add(\PsrJwt\Factory\JwtMiddleware::json(\Utils\Auth\SecretKeyInterface::JWT_SECRET_KEY, '', array("Error" =>'Authorization Failed')));





/**
 * API GRUPPE FÜR FIRMA
 */


$app->group("/api/firma", function (RouteCollectorProxy $group) {

    /**
     * Endpunkt um neue Firma zu erstellen
     */

    $group->post("/create", function(Request $request, Response $response, $params) {
        $firmaInstance = new Firma($this->get("db"));

        $data = $request->getParsedBody();

        $firmaInstance->addFirma($data["firmaName"], $data["strasse"], $data["hausnummer"], $data["ort"],
        $data["plz"], $data["telefon"], $data["mobil"], $data["email"]);


        return $response->withHeader("Content-Type", "application/json");

    });



    /**
     * Endpunkt um eine bestimmte Firma anzuzeigen
     */

    $group->get("/{id:[0-9]+}", function(Request $request, Response $response, $params) {
        $firmaInstance = new Firma($this->get("db"));


        $response->getBody()->write($firmaInstance->getFirma($params["id"]));

        return $response->withHeader("Content-Type", "application/json");

    });


    /**
     * Endpunkt um eine bestimmte Firma zu löschen
     */

    $group->delete("/{id:[0-9]+}", function(Request $request, Response $response, $params) {
        $firmaInstance = new Firma($this->get("db"));


        $response->getBody()->write($firmaInstance->deleteFirma($params["id"]));

        return $response->withHeader("Content-Type", "application/json");

    });


})->add(\PsrJwt\Factory\JwtMiddleware::json(\Utils\Auth\SecretKeyInterface::JWT_SECRET_KEY, '', array("Error" =>'Authorization Failed')));





/**
 * API GRUPPE FÜR ACCOUNT
 */

$app->group("/api/account", function (RouteCollectorProxy $group) {


    /**
     * Endpunkt um speziellen Account anzuzeigen (mittels ID)
     */

    $group->get("/{id:[0-9]+}", function(Request $request, Response $response, $params) {
        $account = new Account($this->get("db"));


        $accountInfos = $account->getAccountById($params["id"]);

        $response->getBody()->write(json_encode($accountInfos));

        return $response->withHeader("Content-Type", "application/json");

    });


    /**
     * Endpunkt um speziellen Account zu ändern (mittels ID)
     */

    $group->put("/edit/password", function(Request $request, Response $response, $params) {
        $account = new Account($this->get("db"));

        $data = $request->getParsedBody();

        $account->updateAccount(tokenParser($request), $data["newpassword"]);


        return $response->withHeader("Content-Type", "application/json");

    });


    /**
     * Endpunkt um speziellen Account zu löschen (mittels ID)
     * (evtl nicht nötig, da wenn Mitarbeiter gelöscht wird, wird acc mit gelöscht
     */

    $group->delete("/delete/{id:[0-9]+}", function(Request $request, Response $response, $params) {
        $account = new Account($this->get("db"));


        $account->deleteAccount($params["id"], tokenParser($request));

        return $response->withHeader("Content-Type", "application/json");

    });


})->add(\PsrJwt\Factory\JwtMiddleware::json(\Utils\Auth\SecretKeyInterface::JWT_SECRET_KEY, '', array("Error" =>'Authorization Failed')));





/**
 * API GRUPPE FÜR MITARBEITER
 */

$app->group("/api/mitarbeiter", function (RouteCollectorProxy $group) {


    /**
     * Endpunkt zum erstellen von einem neuen Mitarbeiter
     */

    $group->post("/create", function(Request $request, Response $response) {
        $mitarbeiter = new Mitarbeiter($this->get("db"));

        $data = $request->getParsedBody();


        $resp = $mitarbeiter->addMitarbeiter($data["username"], $data["vorname"], $data["nachname"],
            $data["geburtsdatum"], $data["vorgesetzter"], $data["title"], $data["start"], $data["end"],
            $data["strasse"], $data["hausnummer"], $data["ort"], $data["plz"], $data["telefon"], $data["mobil"], $data["email"]);


        $response->getBody()->write($resp);


        return $response->withStatus(200)->withHeader("Content-Type", "application/json");

    });

    /**
     * Endpunkt um alle Mitarbeiter anzuzeigen
     */


    $group->get('/', function (Request $request, Response $response, $params) {


        $mitarbeiter = new Mitarbeiter($this->get("db"));

        $data = $request->getParsedBody();

        $response->getBody()->write(json_encode($mitarbeiter->getAllMitarbeiter()));


        return $response->withStatus(200)->withHeader("Content-Type", "application/json");
    });

    /**
     * Endpunkt um einen speziellen Mitarbeiter information zu erhalten (über die ID)
     */


    $group->get('/{id:[0-9]+}', function (Request $request, Response $response, $params) {


        $mitarbeiter = new Mitarbeiter($this->get("db"));

        $data = $request->getParsedBody();

        $response->getBody()->write(json_encode($mitarbeiter->getMitarbeiter($params["id"])));


        return $response->withStatus(200)->withHeader("Content-Type", "application/json");
    });



    /**
     * Endpunkt um speziellen Mitarbeiter zu löschen
     */


    $group->delete('/delete/{id:[0-9]+}', function (Request $request, Response $response, $params) {


        $mitarbeiter = new Mitarbeiter($this->get("db"));

        $data = $request->getParsedBody();

        // Später

        return $response->withStatus(200)->withHeader("Content-Type", "application/json");
    });



})->add(\PsrJwt\Factory\JwtMiddleware::json(\Utils\Auth\SecretKeyInterface::JWT_SECRET_KEY, '', array("Error" =>'Authorization Failed')));





$app->run();
