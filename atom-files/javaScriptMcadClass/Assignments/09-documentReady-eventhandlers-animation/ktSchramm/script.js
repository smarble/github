// Implement jQuery in an HTML page, respond to the document ready event by changing text on the page using document.getElementById().

//When you’re finished, post the HTML/JS up on your server space and submit the link in a new thread in the discussion board titled “Assignment 9: Document Ready” and include “Document Ready” in the title.

//Also, post a link to your code in github

$(document).ready(function(){
    $("button").click(function(){
        $("h1").text("All done!");
        $("h1").toggleClass("change");
    });
});
