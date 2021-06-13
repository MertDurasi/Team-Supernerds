<?php


namespace Utils\Controllers;


use Utils\Controllers\Mitarbeiter;

class Urlaubsantrag
{
    public function __construct($conn) {

        $this->conn = $conn;
        $this->mitarbeiterInstance = new Mitarbeiter($conn);
    }


    public function getUrlaubsantraege() {

        $sql = "SELECT * FROM urlaubsantrag";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute();

        return $stmt->fetchAll();

    }

    public function getUrlaubsantrag($id) {

        $sql = "SELECT * FROM urlaubsantrag WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);

        if ($stmt->rowCount() > 0) {
            return $stmt->fetch();
        }

        return null;

    }


    public function deleteUrlaubsantrag($id) {

        $sql = "DELETE FROM urlaubsantrag WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);


    }


    public function createUrlaubsantrag($datum_von, $datum_bis, $token) {

        $mitarbeiterId = $this->mitarbeiterInstance->getMitarbeiterAccId($token);

        // TODO: Einfügen von "Text" Feld in die Datenbank, sowie "Urlaubstyp", wie bei Frontend



        $sql = "INSERT INTO urlaubsantrag(mitarbeiter_id, datum_von, datum_bis) VALUES (?, ?, ?)";

        $stmt = $this->conn->prepare($sql);


        $val = $stmt->execute([$mitarbeiterId, $datum_von, $datum_bis]);


        if ($val) {
            return json_encode(array("Success" => "Urlaubsantrag wurde erfolgreich eingereicht."));
        }
        return json_encode(array("Error" => "Es ist ein Fehler beim der Einreichung aufgetreten."));


    }



}