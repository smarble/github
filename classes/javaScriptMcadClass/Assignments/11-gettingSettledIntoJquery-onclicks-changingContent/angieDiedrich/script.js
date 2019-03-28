//Clicking on an A element applies a CSS class to it that changes it’s background color
//Clicking on one of the H2 post titles in the main content area hides it

$(document).ready(function () {
	//click to addClass that changes background to purple
    $("a").click(function () {
        $(this).addClass("changeBackgroundColor");
 	});

    //hide or slideUp <h2> elements
    $("h2.title").click(function() {
      $(this).slideUp("slow", function() {
    });
	});
});

//Assignment 11
//Add the attached icon image before the text in each LI element in the main navigation
$('#menu ul li a').prepend('<img id="theIcon" src="icon.png" />');

//Clicking on the H1 element in the header changes the background color of the header DIV
$("h1").click(function () {
	$("#header").css("background","purple");
});

//Change the text color of the first LI element in one of the sub-lists in the sidebar
$('#sidebar_content_1 li a:first').css("color","blue");

//Move the position of the even “numbered” LI elements in one of the sub-lists in the sidebar to the right by 5 pixels
$('#sidebar_content_1 li a:even').css("margin-left","5px");

//Clicking on one of the post titles in the main content area replaces the content of the content DIV (with the ID of “content”) with content you specify
$("#content .title").click(function () {
	$("#content").html("Angie's changing content!");
	$("#content").css("font-size", "30px")
});
//Clicking on one of the H2 elements in the sidebar toggles visibility of the list below it
$("#sidebar_content_1 h2").click(function() {
     $(this).next().slideToggle("slow") 
    });
$("#sidebar_content_2 h2").click(function() {
     $(this).next().slideToggle("slow") 
    });