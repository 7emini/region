$(document).ready(function () {
    //  加载所有的省份
    $.ajax({
        type: "get",
        url: "../app/region_action.php", // type=1表示查询省份
        data: { "parent_id": "1", "type": "1" },
        dataType: "json",
        success: function (data) {
            $("#provinces").html("<option value=''>请选择省份</option>");
            $.each(data, function (i, item) {
                // alert(item.region_id);
                $("#provinces").append("<option value='" + item.region_id + "'>" + item.region_name + "</option>");
            });
        }
    });
    $("#provinces").change(function () {
        $.ajax({
            type: "get",
            url: "../app/region_action.php", // type =2表示查询市
            data: { "parent_id": $(this).val(), "type": "2" },
            dataType: "json",
            success: function (data) {
                $("#citys").html("<option value=''>请选择市</option>");
                $.each(data, function (i, item) {
                    $("#citys").append("<option value='" + item.region_id + "'>" + item.region_name + "</option>");
                });
            }
        });
    });
    $("#citys").change(function () {
        $.ajax({
            type: "get",
            url: "../app/region_action.php", // type =2表示查询市
            data: { "parent_id": $(this).val(), "type": "3" },
            dataType: "json",
            success: function (data) {
                $("#countys").html("<option value=''>请选择区</option>");
                $.each(data, function (i, item) {
                    $("#countys").append("<option value='" + item.region_id + "'>" + item.region_name + "</option>");
                });
            }
        });
    });
    //显示地址
    $("#countys").change(function () {

        var value = $("#provinces").find("option:selected").text()
            + $("#citys").find("option:selected").text()
            + $("#countys").find("option:selected").text();
            if ($("#alt")) {
                $("#alt").remove();  
            }
                       
        $("#region").append("<p id='alt'>选择的地址是:" + value + "</p>");
    });
});