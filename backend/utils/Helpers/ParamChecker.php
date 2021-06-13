<?php


namespace Utils\Helpers;


class ParamChecker
{


    public function __construct() {


    }

    public function getAvailableParams(array $array) {

        $arr = array();

        foreach($array as $item) {
            if (!is_null($item)) {
                array_push($arr, $item);
            }
        }

        return $arr;

    }

}