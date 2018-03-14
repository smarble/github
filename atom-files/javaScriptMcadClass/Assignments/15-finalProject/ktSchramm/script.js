

$('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
    });
    
    return false;
});

//colorbox jquery
$(document).ready(function(){
    $(".group4").colorbox({rel:'group4', slideshow:true});
   
    $("#click").click(function(){ 
        $('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
        return false;
    });
});


(function() {

var img = document.getElementById('container').firstChild;
img.onload = function() {
    if(img.height > img.width) {
        img.height = '100%';
        img.width = 'auto';
    }
};

}());

function checkbox(){
	var dining = document.getElementById("dining").checked,
		stay = document.getElementById("stayHome").checked,
		adventure = document.getElementById("adventure").checked;

	if (dining) {
		$("h2[data-type=dining]").parent().css('display', 'block');
	}
	else {
		$("h2[data-type=dining]").parent().css('display', 'none');
	}
			
	if (stay) {
		$("h2[data-type=stayHome]").parent().css('display', 'block');
	}
	else {
		$("h2[data-type=stayHome]").parent().css('display', 'none');
	}
			
	if (adventure) {
		$("h2[data-type=adventure]").parent().css('display', 'block');
	}
	else {
		$("h2[data-type=adventure]").parent().css('display', 'none');
	}	
}


function myFunction() {
  alert("If you're interested in Date Deck please consider buying or gifting it!");
}