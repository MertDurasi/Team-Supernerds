<?php


namespace Utils\Controllers;

use Utils\Controllers\Postleitzahl;
use Utils\Controllers\Ort;

class Plz_Ort
{
    public function __construct($conn) {
        $this->conn = $conn;
        $this->plzInstance = new Postleitzahl($conn);
        $this->ortInstance = new Ort($conn);
    }

    private function isExistingPlzOrt($plzId, $ortId) {

        $sql = "SELECT * FROM postleitzahl_ort WHERE ortid=? AND postleitzahlid=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$ortId, $plzId]);

        if ($stmt->rowCount() > 0) {
            return true;
        }
        return false;
    }

    public function createPlzOrt($plz, $ort) {

        $ortId = $this->ortInstance->createOrt($ort);

        $plzId = $this->plzInstance->createPostleitzahl($plz);

        if (!$this->isExistingPlzOrt($plzId, $ortId)) {
            $sql = "INSERT INTO postleitzahl_ort(ortid, postleitzahlid) VALUES (?, ?)";

            $stmt = $this->conn->prepare($sql);

            $stmt->execute([$ortId, $plzId]);
        }

        return [$ortId, $plzId];

    }

    public function deletePlzOrt($ortid, $plzid) {

        if (!$this->isExistingPlzOrt($plzid, $ortid)) return null;

        try {
            $sql = "DELETE FROM postleitzahl_ort WHERE ortid=? AND postleitzahlid=?";

            $stmt = $this->conn->prepare($sql);

            $stmt->execute([$ortid, $plzid]);
        } catch(\PDOException $e) {
            return null;
        }



    }

}