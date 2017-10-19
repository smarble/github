/*  Notes  */

Lesson 8.2 - The Best That JS Can Be

Item 1
Lecture 8.2.1 - Why Best Practices Matter
https://www.youtube.com/watch?time_continue=8&v=Hnjmxfg4fSY


Item 2
Lesson 8.2.2 - Understanding JavaScript Style
Understanding JavaScript Style
http://www.lynda.com/JavaScript-tutorials/Understanding-JavaScript-style/81266/87560-4.html?org=mcad.edu

Item 3
Lesson 8.2.3 - Commenting Your Code


Item 4
Lesson 8.2.4 - Efficiency vs Readability


Item 5
Lesson 8.2.5 - Writing Re-usable Code


Item
Exercise 8.2
Go on to the discussion board titled "Week 8 - Exercise 8.2" and create a new Thread. Make sure your title includes the phrase “Exercise 8.2”. You must post to the discussion board to receive full participation credit for the week.

Write one readable and commented JavaScript function and use it to change text in a DIV on an HTML page. Post your code to the new thread.


-----------------------------------------------------------------------------
Item 1
Lecture 8.2.1 - Why Best Practices Matter
https://www.youtube.com/watch?time_continue=8&v=Hnjmxfg4fSY



-----------------------------------------------------------------------------
Item 2
Lesson 8.2.2 - Understanding JavaScript Style
Understanding JavaScript Style
http://www.lynda.com/JavaScript-tutorials/Understanding-JavaScript-style/81266/87560-4.html?org=mcad.edu

most variables are named: action/noun.  ex: getElementById

Objects capitalize the first letter

camelcase is the dominant style for naming in JavaScript

define your functions before they are called


always use semicolons to end a statement





-----------------------------------------------------------------------------
Item 3
Lesson 8.2.3 - Commenting Your Code
https://www.youtube.com/watch?time_continue=2&v=Y5RuCa1I3lk






-----------------------------------------------------------------------------
Item 4
Lesson 8.2.4 - Efficiency vs Readability
https://www.youtube.com/watch?time_continue=6&v=A-siK9HCokM

num = number
str= string
boo = boolean


instead of this:

var myArray = ["one", "two", "three"]

write this:

var myArray = new Array();
myArray[0] = "one";
myArray[1] = "two";
myArray[2] = "three";

They say the same thing.





-----------------------------------------------------------------------------
Item 5
Lesson 8.2.5 - Writing Re-usable Code
https://www.youtube.com/watch?v=zUFigBivU6g

Example:
Applying a css class to a specific element with an id.

if(headerColor == 'y'){
  /* Here we are getting an element by ID,and then setting it's class (to header-y)*/
  document.getElementById('header').setAttribute('class', 'header_y');
  document.getElementById('footer').setAttribute('class', 'stripe_bkg_y');
  /* Here we are using the function below "changeClass" to do the same thing!*/
} else if (headerColor == 'r'){
    changeClass('header', 'header_r');
    changeClass('footer', 'stripe_bkg_r');
} else if (headerColor == 'b'){
    changeClass('header', 'header_b');
    changeClass('footer', 'stripe_bkg_b');
} else if (headerColor == 'b'){
    changeClass('header', 'header_w');
    changeClass('footer', 'stripe_bkg_w');
  }



The next block is doing the same thing, getting an element by ID,and then
setting its class. But now it is a block of reusable code. We used it in the
block above!

  /* Here we have a function that gives a new class to an element based on the
  element's ID*/
function changeClass(elementID, newClass){
  var element = document.getElementById(elementID);
  element. setAttribute("class", newClass); /*for most browsers*/
}








-----------------------------------------------------------------------------
