<?php


namespace Utils\Controllers;


class Kontaktformular
{
    public function __construct($conn) {

        $this->conn = $conn;
    }

    public function createKontaktRequest($mitarbeiterid, $nachricht, $anhang) {

        $sql = "INSERT INTO kontaktformular(mitarbeiterid, nachricht, anhang) VALUES (?, ?, ?)";

        $stmt = $this->conn->prepare($sql);

        $val = $stmt->execute([$mitarbeiterid, $nachricht, $anhang]);

        if ($val) {

            return json_encode(array("Success" => "Formular erfolgreich eingereicht."));
        }

        return json_encode(array("Error" => "Es ist ein Fehler bei der Einreichung des Formulars aufgetreten."));


    }

    public function getKontaktRequestSpeziell($mitarbeiterid, $id) {

        $sql = "SELECT id, nachricht, anhang FROM kontaktformular WHERE mitarbeiterid=? AND id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$mitarbeiterid, $id]);


        if ($stmt->rowCount() > 0) {

            return $stmt->fetchAll();
        }

        return array("Error" => "Dieser Mitarbeiter hat keine offenen Formulare.");

    }

    public function getAllKontaktRequests() {

        $sql = "SELECT * FROM kontaktformular";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute();


        if ($stmt->rowCount() > 0) {

            return $stmt->fetchAll();
        }

        return array("Error" => "Dieser Mitarbeiter hat keine offenen Formulare.");

    }


    public function getKontaktRequestMitarbeiter($mitarbeiterid) {

        $sql = "SELECT id, nachricht, anhang FROM kontaktformular WHERE mitarbeiterid=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$mitarbeiterid]);


        if ($stmt->rowCount() > 0) {

            return $stmt->fetchAll();
        }

        return array("Error" => "Dieser Mitarbeiter hat keine offenen Formulare.");

    }


    public function deleteKontaktRequest($id) {

        $sql = "DELETE FROM kontaktformular WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);


        return array("Success" => "Das Formular wurde erfolgreich entfernt.");

    }
}