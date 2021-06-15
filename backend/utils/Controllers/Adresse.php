<?php


namespace Utils\Controllers;

use Utils\Controllers\Plz_Ort;

class Adresse
{
    public function __construct($conn) {

        $this->conn = $conn;
        $this->plzOrtInstance = new Plz_Ort($conn);
    }

    public function getAdresseId($strasse, $hausnummer) {

        $sql = "SELECT id FROM adresse WHERE strasse=? AND hausnummer=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$strasse, $hausnummer]);

        return $stmt->fetch()["id"];
    }


    public function shouldDeleteOrtAndPlz($ortid, $plzid) {

        $sql = "SELECT id FROM adresse WHERE ortid=? AND postleitzahlid=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$ortid, $plzid]);

        return $stmt->fetchAll()->rowCount() > 1;
    }

    public function getOrtAndPlzId($id) {

        $sql = "SELECT ortid, postleitzahlid FROM adresse WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);

        return [$stmt->fetch()["ortid"], $stmt->fetch()["postleitzahlid"]];

    }


    public function createAdresse($strasse, $hausnummer, $ort, $plz) {

        $ids = $this->plzOrtInstance->createPlzOrt($plz, $ort);

        $sql = "INSERT INTO adresse(strasse, hausnummer, ortid, postleitzahlid) VALUES (?, ?, ?, ?)";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$strasse, $hausnummer, $ids[0], $ids[1]]);

        return $this->conn->lastInsertId();
    }

    public function editAdresse($strasse, $hausnummer, $ort, $plz) {

        $certainId = $this->getAdresseId($strasse, $hausnummer);

        $ortId = $this->plzOrtInstance->ortInstance->editOrt($ort);
        $plzId = $this->plzOrtInstance->plzInstance->editPostleitzahl($plz);


        $sql = "UPDATE adresse SET strasse=? AND hausnummer=? AND ortid=? AND postleitzahlid=? WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$strasse, $hausnummer, $ortId, $plzId, $certainId]);

    }


    public function deleteAdresse($id) {


        try {
            $sql = "DELETE FROM adresse WHERE id=?";

            $stmt = $this->conn->prepare($sql);

            $stmt->execute([$id]);

            return "Success";

        } catch (\PDOException $e) {
            return null;
        }
    }


}