<?php


namespace Utils\Controllers;


class Postleitzahl
{
    public function __construct($conn) {

        $this->conn = $conn;
    }


    public function getPostleitzahl($id) {

        $sql = "SELECT postleitzahl FROM postleitzahl WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);

        return $stmt->fetch()["postleitzahl"];

    }

    public function getPostleitzahlIdByName($plz) {

        $sql = "SELECT id FROM postleitzahl WHERE postleitzahl=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$plz]);

        if ($stmt->rowCount() > 0) {
            return $stmt->fetch()["id"];
        }

        return "null";
    }

    public function createPostleitzahl($plz) {

        if ($this->getPostleitzahlIdByName($plz) === "null") {
            $sql = "INSERT INTO postleitzahl(postleitzahl) VALUES (?)";

            $stmt = $this->conn->prepare($sql);

            $stmt->execute([$plz]);


            return $this->conn->lastInsertId();
        }
        else {
            return $this->getPostleitzahlIdByName($plz);
        }
;
    }

    public function editPostleitzahl($plz) {

        $sql = "UPDATE postleitzahl SET postleitzahl=? WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$plz, $this->getPostleitzahlIdByName($plz)]);

        return $this->getPostleitzahlIdByName($plz);

    }
}