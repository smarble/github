// wrap all in document ready function
$(document).ready(function(){
  console.log("javascript loaded successfully")
  $(".revealedCapital").hide();

  $(".california").click(function() {
    console.log("click")
    // you can pass in a milisecond duration for fadeIn or a keyword like slow, normal or fast
    $(".stateNameCalifornia").fadeOut(0);
    // you can pass in a milisecond duration for fadeIn or a keyword like slow, normal or fast
    $(".revealSacramento").fadeIn(0);
  });

  $(".alaska").click(function() {
    console.log("click")
    // you can pass in a milisecond duration for fadeIn or a keyword like slow, normal or fast
    $(".stateNameAlaska").fadeOut(0);
    // you can pass in a milisecond duration for fadeIn or a keyword like slow, normal or fast
    $(".revealJuneau").fadeIn(0);
  });

  $(".colorado").click(function() {
    console.log("click")
    // you can pass in a milisecond duration for fadeIn or a keyword like slow, normal or fast
    $(".stateNameColorado").fadeOut(0);
    // you can pass in a milisecond duration for fadeIn or a keyword like slow, normal or fast
    $(".revealDenver").fadeIn(0);
  });

  $(".arizona").click(function() {
    console.log("click")
    // you can pass in a milisecond duration for fadeIn or a keyword like slow, normal or fast
    $(".stateNameArizona").fadeOut(0);
    // you can pass in a milisecond duration for fadeIn or a keyword like slow, normal or fast
    $(".revealPhoenix").fadeIn(0);
  });

  $(".arkansas").click(function() {
    console.log("click")
    // you can pass in a milisecond duration for fadeIn or a keyword like slow, normal or fast
    $(".stateNameArkansas").fadeOut(0);
    // you can pass in a milisecond duration for fadeIn or a keyword like slow, normal or fast
    $(".revealLittleRock").fadeIn(0);
  });

  $(".alabama").click(function() {
    console.log("click")
    // you can pass in a milisecond duration for fadeIn or a keyword like slow, normal or fast
    $(".stateNameAlabama").fadeOut(0);
    // you can pass in a milisecond duration for fadeIn or a keyword like slow, normal or fast
    $(".revealMontgomery").fadeIn(0);
  });









// end of document ready  function
});
