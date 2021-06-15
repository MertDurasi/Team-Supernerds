<?php


namespace Utils\Controllers;

use Utils\Controllers\Adresse;

class Kontaktdaten
{
    public function __construct($conn)
    {
        $this->conn = $conn;
        $this->adresseInstance = new Adresse($conn);
    }

    public function getTelefonById($id) {

        $sql = "SELECT telefon FROM kontaktdaten WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);

        if (!is_null($stmt->fetch()["telefon"])) {
            return $stmt->fetch()["telefon"];
        }
        return "null";
    }

    public function getMobilById($id) {

        $sql = "SELECT mobil FROM kontaktdaten WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);

        if (!is_null($stmt->fetch()["mobil"])) {
            return $stmt->fetch()["mobil"];
        }
        return "null";
    }

    public function getAdresseIdInKontakt($id) {

        $sql = "SELECT adresseid FROM kontaktdaten WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);

        return $stmt->fetch()["adresseid"];
    }

    public function getEmailById($id) {

        $sql = "SELECT email FROM kontaktdaten WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);

        if (!is_null($stmt->fetch()["email"])) {
            return $stmt->fetch()["email"];
        }
        return "null";
    }


    public function createKontaktdaten($strasse, $hausnummer, $ort, $plz, $telefon, $mobil, $email) {

        $adresseid = $this->adresseInstance->createAdresse($strasse, $hausnummer, $ort, $plz);

        $sql = "INSERT INTO kontaktdaten (telefon, mobil, email, adresseid) VALUES (?, ?, ?, ?)";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$telefon, $mobil, $email, $adresseid]);

        return $this->conn->lastInsertId();
    }


    // Strasse, Hausnummer, Ort, Plz
    public function editKontaktdaten($id, $telefon, $mobil, $email, ...$args) {

        try {

            $sql = "UPDATE kontaktdaten SET mobil=? AND telefon=? AND email=? WHERE id=?";

            $stmt = $this->conn->prepare($sql);

            $stmt->execute([$mobil, $telefon, $email, $id]);

            // Strasse, Hausnummer, Ort, Plz
            $this->adresseInstance->editAdresse(...$args);

            return array("Success" => "Mitarbeiter Erfolgreich Geupdated.");

        } catch(Exception $e) {

            return $e->getMessage();
        }

    }


    // Strasse, Hausnummer, Ort, Plz
    public function deleteKontaktdaten($id) {

        try {

            $sql = "DELETE FROM kontaktdaten id=?";

            $stmt = $this->conn->prepare($sql);

            $stmt->execute([$id]);

            return array("Success" => "Mitarbeiter Erfolgreich Geupdated.");

        } catch(\PDOException $e) {

            return null;
        }

    }

}