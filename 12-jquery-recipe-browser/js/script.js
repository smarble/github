// wrap all in document ready function
$(document).ready(function(){


  // fadeToggle() the recipeArticles when corresponding tab clicked (solution referenced code from http://jsfiddle.net/n53qg/ )
    $('#side-nav a').click (function(evt) {
      $(".recipeArticle").fadeOut (200);
      $("#" + $(this).data("rel")).fadeIn (1200);
    });

// end document ready function
});
