<?php
include 'conn.inc.php';
$mysqli=new mysqli(HOST,USER,PWD,DBNAME);
//注意设置字符集
$mysqli->set_charset('utf8');
if($mysqli->connect_errno){
    die('数据库链接出错'.$mysqli->connect_error);
}