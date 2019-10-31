// Add the attached icon image before the text in each LI element in the main navigation

$(document).ready(function(){
  $( '#menu li a' ).prepend('<img id="icon" src="icon.png" />'); 
        
    //Clicking on the H1 element in the header changes the background color of the header DIV
    
$("#header h1").click(function(){
    $("#header").css("backgroundColor", "purple");
});
    
    // Change the text color of the first LI element in one of the sub-lists in the sidebar

$("#sidebar_content_1 li a:first").css('color', 'magenta');

    // Move the position of the even “numbered” LI elements in one of the sub-lists in the sidebar to the right by 5 pixels

$("#sidebar_content_2 li a:even").css('padding-left', '5px');
    
    //Clicking on one of the post titles in the main content area replaces the content of the content DIV (with the ID of “content”) with content you specify

$("h2.title").click(function() {
    $( "#content" ).replaceWith( "<h2>This is new content</h2>" );
});
    
    //Clicking on one of the H2 elements in the sidebar toggles visibility of the list below it

$( "#sidebar-content h2" ).click(function() {
  $( "#sidebar-content li a" ).fadeToggle( "slow", function() {
  });
});

});

//Used animation code from API & W3C
