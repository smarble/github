/* Exercise 8.2
Go on to the discussion board titled "Week 8 - Exercise 8.2" and create a new Thread. Make sure your title includes the phrase “Exercise 8.2”. You must post to the discussion board to receive full participation credit for the week.
Write one readable and commented JavaScript function and use it to change text in a DIV on an HTML page. Post your code to the new thread.


This code is leveraged from video lecture 8.2.5*/



// Reusable block for getting an element by ID and giving it a new class
function changeClass(elementID, newClass){
  var element = document.getElementById(elementID);
  element. setAttribute("class", newClass); /*for most browsers*/
}

// using the changeClass function to change the background color of "box1" and to change the text
document.getElementById("box1").onmouseover = function (){
  changeClass("box1", "colorPurpleYellow")
  document.getElementById("text").innerHTML = "As much wood as a woodchuck could chuck, If a woodchuck could chuck wood.";
};
