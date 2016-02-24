//SLICKNAV JS

$(function(){
      $('#menu').slicknav({
        closeOnClick:true
      });
    });

// COLLAGE JS
     $(window).load(function () {
        $('.Collage').collagePlus();

         function collage() {
    $('.Collage').collagePlus(
        {
            'fadeSpeed' : 2000
        }
    );
};

var resizeTimer = null;
$(window).bind('resize', function() {
    // hide all the images until we resize them
    // set the element you are scaling i.e. the first child nodes of ```.Collage``` to opacity 0
    $('.Collage .Image_Wrapper').css("opacity", 0);
    // set a timer to re-apply the plugin
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(collage, 200);
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


// When overlay is clicked
  // Hide the overlay.

$overlay.click(function(){
  $overlay.hide();
});


    });

