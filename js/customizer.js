/*
EKG Javascript
*/

var offsetTopChart = 0;

$(document).ready(function(){

    offsetTopChart = $(".chart-container").offset().top - ($(window).height() / 1.3);

});

$(window).scroll(function(){

    setTimeout(function(){
        if ($(".chart").length && ( $(window).scrollTop() >= offsetTopChart )) {
            console.log("start calc " + offsetTopChart)
            $(".chart").each(function(){
    
                $(this).find("span.movingChart").css("width", $(this).find(".chart-bar").attr("data-chart-fill") + "%");
    
            });
    
        }
      }, 1000);

  


});