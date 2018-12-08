/*
EKG Javascript
*/

var offsetTopChart = 0;

$(document).ready(function(){

    offsetTopChart = $(".chart-container").offset().top;

});

$(window).scroll(function(){

    if ($(".chart").length && ( $(window).scrollTop() + ($(window).height() / 2) >= offsetTopChart )) {
        console.log("start calc " + offsetTopChart)
        $(".chart").each(function(){

            $(this).find("span.movingChart").css("width", $(this).find(".chart-bar").attr("data-chart-fill") + "%");

        });

    }


});