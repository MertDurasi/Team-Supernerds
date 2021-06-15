<?php


namespace Utils\Controllers;

use Utils\Controllers\Account;
use Utils\Controllers\Kontaktdaten;
use Utils\Controllers\Dienstplan;
use Utils\Controllers\Adresse;

use ReallySimpleJWT\Token;

class Mitarbeiter
{
    public function __construct($conn) {

        $this->conn = $conn;
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


    public function getMitarbeiterId($id) {


        $sql = "SELECT id FROM mitarbeiter WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);

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

    public function getMitarbeiterKontaktdatenId($id) {


        $sql = "SELECT kontaktdatenid FROM mitarbeiter WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);

        if ($stmt->rowCount() > 0) {
            return $stmt->fetch()["kontaktdatenid"];
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

            $accInstance = new Account($this->conn);

            $accId = $accInstance->createAccount($username, $vorgesetzter);

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

    public function deleteMitarbeiter($username) {


        $accInstance = new Account($this->conn);

        $id = $accInstance->getAccountIdByUsername($username);


        if ($accInstance->isAdminId($id)) {

            $ktkId = $this->getMitarbeiterKontaktdatenId($id);

            $adresseid = $this->kontaktInstance->getAdresseIdInKontakt($ktkId);

            $adrInstance = new Adresse($this->conn);

            $idArray = $adrInstance->getOrtAndPlzId($adresseid);

            if ($adrInstance->shouldDeleteOrtAndPlz($idArray[0], $idArray[1])) {


                $adrInstance->plzOrtInstance->ortInstance->deleteOrt($idArray[0]);
                $adrInstance->plzOrtInstance->plzInstance->deletePostleitzahl($idArray[1]);

                $adrInstance->plzOrtInstance->deletePlzOrt($idArray[0], $idArray[1]);

                $errorHandling = $adrInstance->deleteAdresse($adresseid);

                if (is_null($errorHandling)) return "Error Occurred Deleting this Mitarbeiter, Contact Admin";

            } else {
                $errorHandling = $adrInstance->deleteAdresse($adresseid);

                if (is_null($errorHandling)) return "Error Occurred Deleting this Mitarbeiter, Contact Admin";

            }

            $errorHandlingKtk = $this->kontaktInstance->deleteKontaktdaten($ktkId);

            if (is_null($errorHandlingKtk)) return "Error Occurred Deleting this Mitarbeiter, Contact Admin";


            try{
                $sql = "DELETE FROM mitarbeiter WHERE id=?";

                $stmt = $this->conn->prepare($sql);

                $stmt->execute([$id]);

                $accInstance->deleteAccount($id);

            } catch(\PDOException $e) {
                return "Error Occurred Deleting this Mitarbeiter, Contact Admin";
            }


        }

    }






}