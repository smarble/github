Notes: Contents of this page:

Lesson 7.2 Trading Classes

Video
Lesson 7.1.1 - What is the DOM?

Lesson 7.2 - What to watch for...

How to modify attribute of HTML elements
How to apply CSS styles with JavaScript

Item
Lecture 7.2.1 - CSS and JavaScript


CSS and JavaScript

http://www.lynda.com/JavaScript-tutorials/CSS-JavaScript/81266/87556-4.html?org=mcad.edu

Item
Lesson 7.2.2 - Removing and Applying CSS Classes


Removing and Applying CSS Classes

http://www.lynda.com/JavaScript-tutorials/Removing-applying-CSS-classes/81266/87557-4.html?org=mcad.edu

Item
Lesson 7.2.3 - Changing Inline Styles


Changing Inline Styles

http://www.lynda.com/JavaScript-tutorials/Changing-inline-styles/81266/87558-4.html?org=mcad.edu

Item

------------------------------------------------------------------------------
Item
Lecture 7.2.1 - CSS and JavaScript


CSS and JavaScript

http://www.lynda.com/JavaScript-tutorials/CSS-JavaScript/81266/87556-4.html?org=mcad.edu

We can set inline styles on an element directly from javaScript.

Step 1
grab the element using document.getElementById

Step 2,

use the .style property to apply a css style.

Examples:

myElement.style.color = "#ff0000";
myElement.style.left = "40px";
myElement.style.backgroundRepeat= "repeat-x";


All the css styles are available, but they may need to be written differently.
Anything written with a dash in CSS is written in camelcase in javascript.

Example;
#example { font-weight: bold;}  would be myElement.style.fontWeight = "bold";


If you have predefined classes in your CSS and youd like to use javaScript to apply
an entire class to an element.

Instead of using the word "class" in javaScript, we use the term "className", because
class is a reserved word in javaScript.

myElement.className = "someCSSclass";

if you need to clear this, you can just set it to an empty starting


myElement.className = "";


----------------------------------------------------------------------------
Item
Lesson 7.2.2 - Removing and Applying CSS Classes


Removing and Applying CSS Classes

http://www.lynda.com/JavaScript-tutorials/Removing-applying-CSS-classes/81266/87557-4.html?org=mcad.edu

If you have predefined classes in your CSS and youd like to use javaScript to apply
an entire class to an element.


Example CSS:

.exampleClass {
  color: #fff;
  font-size: 1em;
  text-align: right;
}


What you write in js

document.getElementById("mainContent").className = "exampleClass";

Example of how you remove and set a class in js:
function preparePage(){
  document.getElementById("mainContent").onclick = function(){
    if (document.getElementById("mainContent").className == "example"){
        document.getElementById("mainContent").className = "";
    }else{
      document.getElementById("mainContent").className == "example";
    }
  };
}
window.onload = function(){
preparePage();

}





-------------------------------------------------------------------------

Changing Inline Styles

http://www.lynda.com/JavaScript-tutorials/Changing-inline-styles/81266/87558-4.html?org=mcad.edu

Item

CSS:
<div id = "join" class = "callOut callOutRight">
<h1>Monthly Specials</h1>
<p>Join our Exploreres Program and get access ect...</p>
<a href = "explorers.htm" title="join our community" class = "accent">Join here</a></p>
