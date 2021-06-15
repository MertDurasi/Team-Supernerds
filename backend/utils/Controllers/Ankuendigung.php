<?php


namespace Utils\Controllers;


class Ankuendigung
{
    public function __construct($conn) {

        $this->conn = $conn;
    }

    public function getAnkuendigungen() {

        $sql = "SELECT * FROM ankündigung";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute();

        return $stmt->fetchAll();
    }


    public function getAnkuendigungNachricht($id) {

        $sql = "SELECT nachricht FROM ankündigung WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);

        return $stmt->fetch();
    }

    public function createAnkuendigung($nachricht) {

        $sql = "INSERT INTO ankündigung(nachricht) VALUES (?)";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$nachricht]);

        return array("Success" => "Ankündigung hinzugefügt");
    }


    public function updateAnkuendigung($nachricht, $id) {

        $sql = "UPDATE ankündigung SET nachricht=? WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$nachricht, $id]);

        return array("Success" => "Ankündigung aktualisiert");
    }

    public function deleteAnkuendigung($id) {


        $sql = "DELETE FROM ankündigung WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);

        return array("Success" =>"Ankündigung entfernt");
    }
}