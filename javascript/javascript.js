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


    });

