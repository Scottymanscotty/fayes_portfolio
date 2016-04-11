// Test javascript for fading in images on the page


//start doc ready function

$(function() {

//declare variabled
var $one = $("img.portfolio");
var $nav = $(".portfolio-nav");
var $button = $("#magic");
var $para = $(".paragraph");
var $inpt = $("input:text");
var $placeholder = $("input[placeholder]");
var $ul = $('<ul class="generated"></ul>');
var $delete = $("#delete");

var $blue = $('<button class="blue">Blue</button>');
var $red = $('<button class="red">Red</button>');
var $green = $('<button class="green">Green</button>');
var $default = $('<button class="default">Default</button><br>');
var $defaultColour =$("body").css("color")
var $caps = $('<button class="caps">CAPS</button>');
var $noCaps = $('<button class="noCaps">NO-CAPS</button>');
var $noTextTransform = $('<button class="noTextTransform">NO TRANSFORM</button><br>');
var $increaseFontSize = $('<button class="increaseFont">Size +</button>');
var $decreaseFontSize = $('<button class="decreaseFont">Size -</button>');
var $reset = $('<button class="reset">Reset (Work in progress)</button>');


/* $("footer").before("<strong>Colours</strong> <br>");
$("footer").before($blue);
$("footer").before($red);
$("footer").before($green);
$("footer").before($default);
$("footer").before("<strong>Text Transform</strong> <br>");
$("footer").before($caps);
$("footer").before($noCaps);
$("footer").before($noTextTransform);
$("footer").before("<strong>Font Size</strong> <br>");
$("footer").before ($increaseFontSize);
$("footer").before ($decreaseFontSize);
$("footer").before($reset);
$para.after($ul);



$delete.attr("disabled","true");  // temporarily disable original delete button

function makeList(listText) {
    $listHTML = '';
    $listHTML += '<li class="counter">';
    $listHTML += listText;
    $listHTML += '</li>';
    $listHTML += '<button class="deleteMe">Delete!</button>';
    return $listHTML;
}

*/
     //AJAX main nav

  /*  $("body").on("click", "#menu li a ", function(e){
        e.preventDefault();
        var url = this.href



   $("#ajaxx").remove();
   $("#test").load(url + " #ajaxx");


    });

  */

    //AJAX portfolio pages

$("body").on("click", ".portfolio-nav a", function (e){
    e.preventDefault();
    var url = this.href;
    var $content =$("#content");

    $.ajax({
        type: "GET",
        url: url,
        timeout: 10000,
        beforeSend: function () {
            $content.html('<h1 id="loading"><b>Loading...</b></h1>')
            },
            complete: function () {
                $("#loading").remove()
            },
            success: function (data) {
                $content.html( $(data).find("#ajax") ).hide().fadeIn(1000);
            },
            error: function() {
                $content.html("<h1> Page has not loaded. Please try again. </h1>")
            }
    });

//    $("#ajax").remove();
//    $("#content").load(url + " #ajax").hide().fadeIn(1500);

});



   $nav.hide().slideDown(1500);
   $("#ajax h2").hide().fadeIn(1500);
   $("#ajax p").hide().fadeIn(1500);
   $one.hide().fadeIn(1500);








$blue.on("click", function(){
    $("ul.generated").css("color", "blue");
});

$red.on("click", function(){
    $("ul.generated").css("color", "red");
});

$green.on("click", function(){
    $("ul.generated").css("color", "green");
});

$default.on("click", function(){
    $("ul.generated").css("color", $defaultColour);
});

$caps.on("click", function(){
    $("ul.generated").css("textTransform","uppercase");
    $(".deleteMe").css("textTransform","uppercase");
});

$noCaps.on("click", function(){
    $("ul.generated").css("textTransform", "lowercase");
    $(".deleteMe").css("textTransform","lowercase");
});

$noTextTransform.on("click", function(){
    $("ul.generated").css("textTransform", "none");
    $(".deleteMe").css("textTransform","none");
});

$increaseFontSize.on("click", function(){
    $("ul.generated").css("fontSize", "+=2");
});

$decreaseFontSize.on("click", function(){
    $("ul.generated").css("fontSize", "-=2");
});

$reset.on("click", function(){
    $("ul.generated").animate({
        fontSize: 16
    },500, function(){

    });
});
/*
// IGNORE
$("body").on("click", ".changeColour", function(e){
    e.preventDefault();
    $this = $(this);

    $this.prev().css("color","red");



    });
*/

$("ul").on("click", ".deleteMe", function(e){
    e.preventDefault();

    $this = $(this);
    $this.prev().animate({
        opacity: 0.0,
        padding: "+= 300"
    }, 500, function(){
      $this.prev().remove();
     // $this.next().remove();
      $this.remove();
    })
});

$button.on("click", function(e) {
    e.preventDefault();
    $response = $inpt.val();
    if(!$response) {
        $placeholder.attr("placeholder", "Make sure you type in here!");
        $para.text("Please Type in the text input");
    } else {
    makeList($response);
    $ul.append($listHTML);
    $para.text($response + " This is your last entry");
    $inpt.val("");
    $placeholder.attr("placeholder", "Type here!");
    }
});

var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

// an image

$overlay.append($image);


  // a caption
$overlay.append($caption);
// Add Overlay
 $("body").append($overlay);

//.capture the click event on an a link to an image
$(".Collage a").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  // update overlay with the image linked in the link.
  $image.attr("src", imageLocation);
  // show the overlay
  $overlay.show();

  // Get child's alt attribute at set caption.
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

$("#content").on("click", ".clearfix a", function() {
    event.preventDefault();
  var imageLocation = $(this).attr("href");
  // update overlay with the image linked in the link.
  $image.attr("src", imageLocation);
  // show the overlay
  $overlay.show();

  // Get child's alt attribute at set caption.
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});


// When overlay is clicked
  // Hide the overlay.

$overlay.click(function(){
  $overlay.hide();
});







}); // end doc ready function





