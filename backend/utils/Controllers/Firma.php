<?php


namespace Utils\Controllers;


use Utils\Controllers\Kontaktdaten;


class Firma
{
    public function __construct($conn) {

        $this->conn = $conn;
        $this->kontaktInstance = new Kontaktdaten($conn);
    }

    public function getFirmaName($id) {

        $sql = "SELECT name FROM firma WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);


        return $stmt->fetch()["name"];

    }


    public function getFirmaId($name) {

        $sql = "SELECT id FROM firma WHERE name=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$name]);

        return $stmt->fetch()["id"];

    }


    public function getFirma($id) {

        $sql = "SELECT * FROM firma WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);


        if ($stmt->rowCount() > 0) {
            return $stmt->fetch();
        }
        return null;

    }


    public function isExistingFirma($firmaName) {

        $sql = "SELECT id FROM firma WHERE name=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$firmaName]);

        if ($stmt->rowCount() > 0) {
            return true;
        }
        return false;

    }

    public function addFirma($firmaName, $strasse, $hausnummer, $ort, $plz, $telefon, $mobil, $email) {

        if (!$this->isExistingFirma($firmaName)) {
            $kontaktId = $this->kontaktInstance->createKontaktdaten($strasse, $hausnummer, $ort, $plz, $telefon, $mobil, $email);

            $sql = "INSERT INTO firma(name, kontaktdatenid) VALUES (?, ?)";

            $stmt = $this->conn->prepare($sql);

            $stmt->execute([$firmaName, $kontaktId]);

            return json_encode(array("Success" => "Firma erfolgreich angelegt."));
        }
        else {
            return json_encode(array("Error" => "Firma existiert bereits."));
        }

    }

    public function deleteFirma($id) {

        $sql = "DELETE FROM firma WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $var = $stmt->execute([$id]);

        if ($var) {
            return json_encode(array("Success" => "Firma wurde erfolgreich gelöscht."));
        }
        return json_encode(array("Error" => "Es ist ein Fehler bei der Löschung der Firma aufgetreten."));

    }

}