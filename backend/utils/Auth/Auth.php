<?php

namespace Utils\Auth;

use Utils\Controllers\Account;
use ReallySimpleJWT\Token;

class Auth {


    public function __construct($conn) {

        $this->conn = $conn;
        $this->accountInstance = new Account($conn);

    }

    public function isValidToken($token) {

        return Token::validate($token, \Utils\Auth\SecretKeyInterface::JWT_SECRET_KEY);

    }


    private function generateJWT($user, $role, $accid) {

        $factory = new \PsrJwt\Factory\Jwt();
        $builder = $factory->builder();
        $token = $builder->setSecret(\Utils\Auth\SecretKeyInterface::JWT_SECRET_KEY)
        ->setIssuer('localhost') // $request->getAttribute('ip_address') <- get client ip
        ->setExpiration(time() + 1800)
        ->setPayloadClaimArray(array("accountid" => $accid, "username" => $user, "vorgesetzter" => $role, "ts" => time(), "exp" => time() + 1800))
        ->build();

        return $token->getToken();
    }


    public function authUser($user, $pass) {


        $existingUser = $this->accountInstance->isExistingAccount($user, $pass);

        if (!$existingUser) {
            
            return json_encode(array("Error" => "User does not exist."));
        }

        
        return json_encode(array("token" => $this->generateJWT($user, $this->accountInstance->isAdmin($user, $pass), $this->accountInstance->getAccountId($user, $pass))));
    
    }




}