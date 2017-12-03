// wrap all in document ready function
$(document).ready(function(){
  $(".recipeArticle").hide();
  $('#side-nav a').click (function(evt) {
    $(".recipeArticle").fadeOut (200);
    // Wrapps "this", does not wrap the resulting string. example "#recipe1"
    var articleId = $(this).data("rel")
    // example print out "anything = #recipe1"
    console.log("anything = "+ articleId)
    var article = $(articleId)
    console.log("anything2="+ article.attr('id') )
    console.log("anything3="+ article.toString() )
    //this is the same as asking the line above
    console.log("anything4="+ article)
    article.fadeIn (1200);
    //Why doesn't this work?: $(this).fadeIn (1200); Because "this is attached to the a, not to the recipe you want to fade in"
    });
});

//
// Previous solution. To work, you must remove the # from the data-rel of each a in #side-nav in the HTML. Example: data-rel="#recipe1" remove the #
// // wrap all in document ready function
// $(document).ready(function(){
//   $(".recipeArticle").hide();
//     // fadeToggle() the recipeArticles when corresponding tab clicked (solution referenced code from http://jsfiddle.net/n53qg/ )
//     $('#side-nav a').click (function(evt) {
//       $(".recipeArticle").fadeOut (200);
//       $("#" + $(this).data("rel")).fadeIn (1200);
//       //Why doesn't this work?: $(this).fadeIn (1200);
//     });
// // end document ready function
// });
