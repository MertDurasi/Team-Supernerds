<?php


namespace Utils\Controllers;

use Utils\Controllers\Account;
use Utils\Controllers\Kontaktdaten;
use Utils\Controllers\Dienstplan;
use ReallySimpleJWT\Token;

class Mitarbeiter
{
    public function __construct($conn) {

        $this->conn = $conn;
        $this->accInstance = new Account($conn);
        $this->kontaktInstance = new Kontaktdaten($conn);
        $this->dienstplanInstance = new Dienstplan($conn);


    }

    public function isExistingMitarbeiter($vorname, $nachname, $geburtsdatum) {

        $sql = "SELECT id FROM mitarbeiter WHERE vorname=? AND nachname=? AND geburtsdatum=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$vorname, $nachname, $geburtsdatum]);

        if ($stmt->rowCount() > 0) {
            return true;
        }
        return false;

    }

    public function getMitarbeiterAccId($token) {

        $payload = Token::getPayload($token, \Utils\Auth\SecretKeyInterface::JWT_SECRET_KEY);

        $sql = "SELECT id FROM mitarbeiter WHERE accountid=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$payload["accountid"]]);

        if ($stmt->rowCount() > 0) {

            return $stmt->fetch()["id"];
        }

        return null;
    }

    public function getMitarbeiter($id) {


        $sql = "SELECT * FROM mitarbeiter WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);

        if ($stmt->rowCount() > 0) {
            return $stmt->fetch();
        }
        return null;
    }

    public function getAllMitarbeiter() {


        $sql = "SELECT * FROM mitarbeiter";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            return $stmt->fetchAll();
        }
        return null;
    }



    public function addMitarbeiter($username, $vorname, $nachname, $geburtsdatum, $vorgesetzter, $title, $start, $end, ...$args) {

        if (!$this->isExistingMitarbeiter($vorname, $nachname, $geburtsdatum)) {

            $accId = $this->accInstance->createAccount($username, $vorgesetzter);

            $dienstplanId = $this->dienstplanInstance->createDienstplan($title, $start, $end);

            $kontaktId = $this->kontaktInstance->createKontaktdaten(...$args);

            $sql = "INSERT INTO mitarbeiter(vorname, nachname, accountid, geburtsdatum, kontaktdatenid, dienstplan) VALUES (?, ?, ?, ?, ?, ?)";

            $stmt = $this->conn->prepare($sql);

            $stmt->execute([$vorname, $nachname, $accId, $geburtsdatum, $kontaktId, $dienstplanId]);

            return json_encode(array("Success" => "Mitarbeiter erfolgreich angelegt."));
        }
        else {
            return json_encode(array("Error" => "Mitarbeiter existiert bereits."));
        }

    }

    public function editMitarbeiter($id, $telefon, $mobil, $email, $strasse, $hausnummer, $ort, $plz) {

        $infos = $this->kontaktInstance->editKontaktdaten($id, $telefon, $mobil, $email, $strasse, $hausnummer, $ort, $plz);

        return $infos;

    }


    public function deleteMitarbeiter($id, $token) {

        if ($this->accInstance->isAdminToken($token)) {

            // do later

        }

    }



}