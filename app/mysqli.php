<?php
include 'conn.inc.php';
$mysqli=new mysqli(HOST,USER,PWD,DBNAME);
$mysqli->set_charset('utf8');
if($mysqli->connect_errno){
    die('数据库链接出错'.$mysqli->connect_error);
}