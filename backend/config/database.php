<?php

use DI\Container;

$container = new Container();



$container->set('db', function() {
    $settings = [
        "host" => "localhost",
        "port" => "3306",
        "dbname" => "db",
        "user" => "root",
        "pass" => ""
    ];
    $dsn = 'mysql:host=' . $settings['host'] . ';port=' . $settings['port'] . ';dbname=' . $settings['dbname'];
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];
    return new PDO($dsn, $settings['user'], $settings['pass'], $options);
});


return $container;

