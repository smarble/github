/* Exercise 8.1
Go on to the discussion board titled "Week 8 - Exercise 8.1" and create a new Thread. Make sure your title includes the phrase
“Exercise 8.1”. You must post to the discussion board to receive full participation credit for the week.

Create a function that can be reused in different situations on the same HTML page. Post your code to the new thread.

This code is leveraged from video lecture 8.2.5*/



// Reusable block for getting an element by ID and giving it a new class
function changeClass(elementID, newClass){
  var element = document.getElementById(elementID);
  element. setAttribute("class", newClass); /*for most browsers*/
}

// using the changeClass function to change the background color of "box1"
document.getElementById("box1").onmouseover = function (){
  changeClass("box1", "colorPurpleYellow");
}

 // using the changeClass function to change the background color of "box1"
 // on this block I used an addEventListener because I read online
 // that it is best to avoid using inline event handlers. But it still only
 // works as an onclick, not an onmouseover.
document.getElementById("box2").addEventListener("mouseover",function(){
  changeClass("box2", "colorBlueOrange");
});
