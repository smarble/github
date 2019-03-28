$("document").ready(function(){
  $("a").click(function () {
      $("p[entry]").css('background-color', 'red');
    });

    //hid div "content" by clicking h2
    $( "h2.title" ).click(function() {
      $( "#content" ).hide( "slow", function() {
        alert( "Animation complete." );
      });
    });

});
