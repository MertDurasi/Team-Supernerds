<?php


namespace Utils\Controllers;


use Utils\Helpers\ParamChecker;

class Dienstplan
{
    public function __construct($conn) {

        $this->conn = $conn;
    }

    public function getDienstplanByMitarbeiterId($mitarbeiterid) {

        $sql = "SELECT * FROM dienstplan WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$mitarbeiterid]);

        if ($stmt->rowCount() > 0){
            return $stmt->fetch();
        }

        return null;
    }

    public function getDienstplanIdByMitarbeiterId($mitarbeiterid) {

        $sql = "SELECT id FROM dienstplan WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$mitarbeiterid]);

        if ($stmt->rowCount() > 0){
            return $stmt->fetch()["id"];
        }

        return null;
    }

    public function createDienstplan($title, $start, $end) {

        $sql = "INSERT INTO dienstplan(title, start, end) VALUES (?, ?, ?)";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$title, $start, $end]);

        return $this->conn->lastInsertId();
    }

    public function createDienstplanMitarbeiter($title, $start, $end, $id) {

        $sql = "INSERT INTO dienstplan(id, title, start, end) VALUES (?, ?, ?, ?)";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id, $title, $start, $end]);

        return $this->conn->lastInsertId();

    }


    public function editDienstplan($title, $start, $end, $id) {

        $sql = "UPDATE dienstplan SET title=? AND start=? AND end=? WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$title, $start, $end, $this->getDienstplanIdByMitarbeiterId($id)]);

        return $this->conn->lastInsertId();
    }


    public function deleteDienstplan($id) {

        $sql = "DELETE FORM dienstplan WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);


    }


}