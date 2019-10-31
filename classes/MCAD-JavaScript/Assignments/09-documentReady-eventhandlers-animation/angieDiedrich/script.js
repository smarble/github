$("document").ready(function () {
    $("#mainDIV").html("Knock, Knock - who's there?");
    //Thanks to Nick Martin I was able to realize why my click function wouldn't work
    //adding .one function did the trick!!
    $("#button").one('click', function() {
      $("#mainDIV").html("Boo").css("background-color", "black") .css("color", "orange");
    });
});

$("document").ready(function () {
    $("#mainDIV2").html("Boo Who?");
    //Thanks to Nick Martin I was able to realize why my click function wouldn't work
    //adding .one function did the trick!!
    $("#button2").one('click', function() {
      $("#mainDIV2").html("Don't Cry! I'm just a Halloween trick or treater.").css("background-color", "black") .css("color", "orange");
    });
});