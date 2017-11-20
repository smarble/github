// wrap all the jquery code in a document ready function
$(document).ready(function () {


  //Add the attached icon image before the text in each LI element in the main navigation
  $("#menu li a").prepend("<img src='img/icon.png' alt='icon'>");

  // Clicking on the H1 element in the header changes the background color of the header DIV
  $('#header h1').click(function () {
	    $("#header").css("background","purple");
  });

  // Change the text color of the first LI element in one of the sub-lists in the sidebar
  $('#sidebar_content_1 li a:first').css('color', 'brown');

  // Move the position of the even “numbered” LI elements in one of the sub-lists in the sidebar to the right by 5 pixels. Note, targeting the even children of li had the same effect as targeting the even children of a (as seen in the line above).
  $('#sidebar_content_2 li:even').css("margin-left","5px");

  // Clicking on one of the post titles in the main content area replaces the content of the content DIV (with the ID of “content”) with content you specify
  $('h2.title').on('click', newContent);

  function newContent(){
      // The content we are replacing with includes a div because we are deleting the original div with this function. This function structure was leveraged from Stacy Mann.
      $('#content').replaceWith("<div id=content><img id=pauly src='img/pauly.jpg' alt='imageOfPaulyShore'></div>");

      var paulystyle = {
      width: '50%'
      };
      $('#pauly').css(paulystyle);
  };

  // Clicking on one of the H2 elements in the sidebar toggles visibility of the list below it. Leveraged code for this function from Angie Diedrich.
  $("#sidebar_content_1 h2").click(function() {
		  $("#sidebar_content_1 ul").slideToggle("slow")
	});

}) //end of onready function
