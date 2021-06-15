<?php


namespace Utils\Controllers;

use Utils\Controllers\Mitarbeiter;


class Account {

	
    public function __construct($conn) {

        $this->conn = $conn;
        $this->mitarbeiterInstance = new Mitarbeiter($conn);
    }

    public function getAccountById($id) {
        
        $sql = "SELECT * FROM account WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);

	    return $stmt->fetch();
    }

    public function getAccountIdByUsername($user) {

        $sql = "SELECT id FROM account WHERE username=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$user]);

        return $stmt->fetch()["id"];
    }


    public function getAccountId($user, $pass) {

        $sql = "SELECT id FROM account WHERE username=? AND passwort=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$user, $pass]);

        return $stmt->fetch()["id"];
    }

    public function getAllAccounts($id) {

        $sql = "SELECT * FROM account";

        $stmt = $this->conn->prepare($sql);
        $stmt->execute();


        return $stmt->fetchAll();
    }

    public function isExistingAccount($user, $pass) {
        // encoding of password maybe

        $sql = "SELECT * FROM account WHERE username=? AND passwort=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$user, $pass]);
	
        if ($stmt->rowCount() > 0) {
            return true;
        }

        return false;

    }


    public function getAccountRolleId($user, $pass) {
        // encoding of password maybe

        $sql = "SELECT rolleid FROM account WHERE username=? AND passwort=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$user, $pass]);
	
        return $stmt->fetch()["rolleid"];

    }


    public function isAdmin($user, $pass) {
        // encoding of password maybe

        $rolleid = $this->getAccountRolleId($user, $pass);

        if ($rolleid === 0) {
            return false;
        }

        return true;

    }

    public function isAdminId($id) {

        $sql = "SELECT rolleid FROM account WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$id]);


        if ($stmt->fetch()["rolleid"] === 0) {
            return false;
        }

        return true;

    }

    public function isAdminToken($token) {

        $payload = Token::getPayload($token, \Utils\Auth\SecretKeyInterface::JWT_SECRET_KEY);

        if (intval($payload["vorgesetzter"]) >= 1) {
            return true;
        }
        return false;

    }


    public function createAccount($user, $rolleid) {
        
        $sql = "INSERT INTO account(`username`, `passwort`, `rolleid`) VALUES (?, ?, ?)";

        $stmt = $this->conn->prepare($sql);

        // Mail Password to user
        $pass = $this->generateRandomPasswort();

        $stmt->execute([$user, $pass, $rolleid]);

        // Hopefully Id of account

        return $this->conn->lastInsertId();


    }

    public function deleteAccount($id) {

        if ($this->isAdminId($id)) {

            $mitid = $this->mitarbeiterInstance->getMitarbeiterId($id);

            if ($id === $mitid) return "Sie können ihren eigenen Account nicht löschen";

            $sql = "DELETE FROM account WHERE id=?";

            $stmt = $this->conn->prepare($sql);

            $val = $stmt->execute([$id]);

            if ($val) {
                return "Successfully deleted Account";
            }
        }
        return "Not Authorized to delete Accounts";
    }

    public function updateAccount($token, $newPass) {

        $accId = $this->mitarbeiterInstance->getMitarbeiterAccId($token);

        $sql = "UDPATE account SET passwort=? WHERE id=?";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute([$newPass, $accId]);


    }


    public function generateRandomPasswort() {

        $alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890&%_!?=$"';
        $pass = array(); //remember to declare $pass as an array
        $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
        for ($i = 0; $i < 10; $i++) {
            $n = rand(0, $alphaLength);
            $pass[] = $alphabet[$n];
        }
        return implode($pass); //turn the array into a string
    }



}