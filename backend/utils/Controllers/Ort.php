<?php


namespace Utils\Controllers;


class Ort
{
    public function __construct($conn) {

        $this->conn = $conn;
    }
    public function getOrt($id) {

        $sql = "SELECT ort FROM ort WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);

        return $stmt->fetch()["ort"];

    }

    public function getOrtIdByName($ort) {

        $sql = "SELECT id FROM ort WHERE ort=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$ort]);

        if ($stmt->rowCount() > 0) {
            return $stmt->fetch()["id"];
        }

        return "null";
    }


    public function createOrt($ort) {

        if ($this->getOrtIdByName($ort) === "null") {

            $sql = "INSERT INTO ort(ort) VALUES (?)";

            $stmt = $this->conn->prepare($sql);

            $stmt->execute([$ort]);

            return $this->conn->lastInsertId();
        } else {
            return $this->getOrtIdByName($ort);
        }

    }


    public function editOrt($ort) {

        $sql = "UPDATE ort SET ort=? WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$ort, $this->getOrtIdByName($ort)]);

        return $this->getOrtIdByName($ort);

    }

    public function deleteOrt($id) {

        $sql = "DELETE FROM ort WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);


    }


}