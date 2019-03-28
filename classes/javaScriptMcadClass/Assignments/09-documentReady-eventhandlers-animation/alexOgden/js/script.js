// jQuery fun times! 
$("document").ready(function() {
	// rolling over orange box reveals message
	$("#textbox").mousemove(function(){
		$("#textbox").html("<h2>I am but a humble orange box.</h2>");
		$("#textbox").css("backgroundColor", "orange");
	});
	// clicking on the orange box changes its color, size, and initiates an animation sequence
	$("#animayshun").click(function() {
		$("#textbox").html("<h2></h2>");
		$("#animayshun").html("<h2>Oh, you clicked me!</h2>");
		$("#animayshun").css("backgroundColor", "blue");
		$("#textbox").css("backgroundColor", "blue");
		$("#animayshun").animate({width: 800}, 400)
		.animate({left: 500}, 700)
		.animate({height: 800}, 600);	
		$("#animayshun").animate({width: 250}, 400)
		.animate({left: 0}, 700)
		.animate({height: 250}, 600);
		var blankSpace = $("#button");
		$("h1").html(blankSpace);
	});

});