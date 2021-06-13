<?php


namespace Utils\Controllers;



class Downloads
{
    public function __construct($conn) {

        $this->conn = $conn;
    }

    public function getDownloads() {

        $sql = "SELECT * FROM downloads";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute();

        return $stmt->fetchAll();

    }

    public function getDownload($id) {

        $sql = "SELECT * FROM downloads WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);

        return $stmt->fetch();

    }


    public function createDownload($datei) {

        $sql = "INSERT INTO downloads(datei) VALUES (?)";

        $stmt = $this->conn->prepare($sql);

        $val = $stmt->execute([$datei]);


        if ($val) {

            return json_encode(array("Success" => "Download erfolgreich erstellt."));
        }

        return json_encode(array("Error" => "Es ist ein Fehler bei der Erstellung des Downloads aufgetreten."));


    }

    public function deleteDownload($id) {

        $sql = "DELETE FROM downloads WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $val = $stmt->execute([$id]);

        if ($val) {

            return json_encode(array("Success" => "Download erfolgreich entfernt."));
        }

        return json_encode(array("Error" => "Es ist ein Fehler bei der Entfernung des Downloads aufgetreten."));


    }

    public function editDownload($id, $datei) {

        $sql = "UPDATE downloads SET datei=? WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $val = $stmt->execute([$datei, $id]);

        if ($val) {

            return json_encode(array("Success" => "Download erfolgreich entfernt."));
        }

        return json_encode(array("Error" => "Es ist ein Fehler bei der Entfernung des Downloads aufgetreten."));


    }



}