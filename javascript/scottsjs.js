// Test javascript for fading in images on the page


//start doc ready function

$(function() {

var $one = $("img");
var $nav = $(".portfolio-nav");


$nav.hide().slideDown(2000);
$("h2").hide().fadeIn(2000);
$one.hide().fadeIn(2000);

}); // end doc ready function





