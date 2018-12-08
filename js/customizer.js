/*
EKG Javascript
*/

var currentHeadline = 0;

$(document).ready(function(){

    if ($(".chart").length) {

        $(".chart").each(function(){

            $(this).find("span.movingChart").css("width", $(this).find(".chart-bar").attr("data-chart-fill") + "%");

        });

    }

});