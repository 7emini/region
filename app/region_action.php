<?php
header("Content-Type:text/json;charset=utf-8");
include_once './mysqli.php';
$type = isset($_GET["type"]) ? $_GET["type"] : "";
$parent_id = isset($_GET["parent_id"]) ? $_GET["parent_id"] : "";
if ($type == "" || $parent_id == "") {
    exit(json_encode(array("flag" => false, "msg" => "查询类型错误")));
} else {  
    $sql="select *from global_region where parent_id=$parent_id AND region_type=$type";
    $result=$mysqli->query($sql);
    if($result->num_rows>0)
    {
        $arr=[];
        while ($row=$result->fetch_assoc())
        {
        // "167": {
        //     "region_id": "167",
        //     "region_name": "哈尔滨"
        // },
            $arr[$row["region_id"]]['region_id']=$row["region_id"];
            $arr[$row["region_id"]]['region_name']=$row["region_name"];
        }
    }
    $provinces_json = json_encode($arr);
    exit($provinces_json);
}
?>