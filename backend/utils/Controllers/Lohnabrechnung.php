<?php


namespace Utils\Controllers;


class Lohnabrechnung
{
    public function __construct($conn) {

        $this->conn = $conn;
    }

    public function getLohnabrechnungen() {

        $sql = "SELECT * FROM lohnabrechnung";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute();

        return $stmt->fetchAll();

    }


    public function getLohnabrechnungenMitarbeiter($mitarbeiterid) {

        $sql = "SELECT * FROM lohnabrechnung mitarbeiterid=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$mitarbeiterid]);

        return $stmt->fetchAll();

    }

    public function getLohnabrechnungMitarbeiter($id, $mitarbeiterid) {

        $sql = "SELECT * FROM lohnabrechnung id=?, mitarbeiterid=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id, $mitarbeiterid]);

        return $stmt->fetchAll();

    }

    public function createLohnabrechnung($mitarbeiterid, $datei, $datum) {

        $sql = "INSERT INTO lohnabrechnung(mitarbeiterid, datei, datum) VALUES (?, ?, ?)";

        $stmt = $this->conn->prepare($sql);

        $val = $stmt->execute([$mitarbeiterid, $datei, $datum]);

        if ($val) {

            return json_encode(array("Success" => "Lohnabrechnung erfolgreich erstellt."));
        }

        return json_encode(array("Error" => "Es ist ein Fehler bei der Erstellung der Lohnabrechnung aufgetreten."));


    }

    public function deleteLohnabrechnung($mitid, $id) {

        $sql = "DELETE FROM lohnabrechnung WHERE id=? AND mitarbeiterid=?";

        $stmt = $this->conn->prepare($sql);

        $val = $stmt->execute([$id, $mitid]);

        if ($val) {

            return json_encode(array("Success" => "Lohnabrechnung erfolgreich entfernt."));
        }

        return json_encode(array("Error" => "Es ist ein Fehler bei der Entfernung der Lohnabrechnung aufgetreten."));


    }



    public function editLohnabrechnung($mitid, $id, $datei, $datum) {

        $sql = "UPDATE lohnabrechnung SET datei=? AND datum=? WHERE id=? AND mitarbeiterid=?";

        $stmt = $this->conn->prepare($sql);

        $val = $stmt->execute([$datei, $datum, $id, $mitid]);

        if ($val) {

            return json_encode(array("Success" => "Lohnabrechnung erfolgreich verändert."));
        }

        return json_encode(array("Error" => "Es ist ein Fehler bei der Veränderung der Lohnabrechnung aufgetreten."));


    }

}