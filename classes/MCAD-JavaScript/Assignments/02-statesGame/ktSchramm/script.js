// Slide Reveal 

$(document).ready(function(){
    $("#alabama").click(function(){
        $("#montgomery").slideToggle("slow");
    });
});


$(document).ready(function(){
    $("#arkansas").click(function(){
        $("#lr").slideToggle("slow");
    });
});


$(document).ready(function(){
    $("#colorado").click(function(){
        $("#denver").slideToggle("slow");
    });
});



// Toggle

$(document).ready(function(){
    $("#alaska").click(function(){
        $("#juneau").toggle("slow");
    });
});


$(document).ready(function(){
    $("#cali").click(function(){
        $("#sacramento").toggle("slow");
    });
});




// Greeting
$(document).ready(function()
{
    alert('Click on the States to reveal the Captial');
});