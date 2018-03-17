Notes: Contents of this page:

Lesson 7.1 DOM DOM DOM

Video
Lesson 7.1.1 - What is the DOM?


What is the DOM?

http://www.lynda.com/JavaScript-tutorials/What-DOM/81266/87536-4.html?org=mcad.edu


Video
Lecture 7.1.2 - Working with Nodes and Elements
Working with Nodes and Elements
http://www.lynda.com/JavaScript-tutorials/Working-nodes-elements/81266/87537-4.html?org=mcad.edu


Video
Lecture 7.1.3 - Accessing DOM Elements
Accessing DOM Elements
http://www.lynda.com/JavaScript-tutorials/Accessing-DOM-elements/81266/87539-4.html?org=mcad.edu


Video
Lecture 7.1.4 - Changing DOM Elements
Changing DOM Elements
http://www.lynda.com/JavaScript-tutorials/Changing-DOM-elements/81266/87540-4.html?org=mcad.edu


Video
Lecture 7.1.5 - Creating DOM Elements
Creating DOM Elements
http://www.lynda.com/JavaScript-tutorials/Creating-DOM-elements/81266/87541-4.html?org=mcad.edu
------------------------------------------------------------------------------


There are a dozen kinds of nodes in a document, but we will focus on  3:

Node.ELEMENT_NODE == 1
Node.ATTRIBUT_NODE == 2
Node.TEXT_NODE == 3


How to get at an element node:
does it have an id? Use:

document.getElementById("IdNameHere");


for example, if we are grabbing an element that is an unordered list. The unordered
list has an id of "abc".


var myElement = ddocument.getElementById("abc");


We have now created a variable that is like a handle to that element node.

Next. Notice the command below has element"s" (plural). This is because we
want to select ALL the a Tags in the document.


document.getElementsByTagName("a");


Here we are selecting list element nodes
var myListItems = document.getElementsByTagName("a");

How does a list of nodes get stored in a variable: An array! This command is making
an array. So to tap into this, we could just use the square brackets and say: myListItems[0], etc...

In the next example, we are calling on an element with the ID "main title"
var mainTitle = document.getElementById("mainTitle");


console.log("This is an element of type:", mainTitle.nodeType);
console.log("The Inner HTML is", mainTitle.innerHTML);
console.log("This is an element of type:", mainTitle.childNodes.length);


To explain the commands above:
mainTitle.nodeType = what kind of node type is it, what number? (of the 3 at the top of the page)?
mainTitle.innerHTML = what is its inner html (text that is within the brackets of this ID)?
mainTitle.childNodes = does it have any child nodes? The childNodes will have
multiple results so it is an array, and we can use length property.



CONSOLE RESULTS

This is an element of type: 1
the Inner HTML is Welcome to Explore California!
Child nodes: 1




var myLinks = document.getElementsByTagName("a");
console.log("Links:",myLinks.length);

Here we are creating an array 'myLinks' and telling it to fill with as many
anchor links as we have.

CONSOLE READS
Links: 19



If we want to look for all the list items, not in the entire DOM, but starting
from a deeper point. Starting from a ul element with an id of "abc".

First we need to make a variable to grab the element we want to start looking in,
the ul with the id "abc". We name that variable myFirstList. THEN we search that variable:

var myFirstList = document.getElementById ("abc");
var limitedList = myFirstList.getElementsByTagName("li");


Now how do we start making changes to our dom using javascript, instead of just
reading it?

1. First we always need to grab an element, our starting point.
2. What do you want to change about it?

One of the simplist things to do is change an attribut of an element. There are two
attribut comandes in javascript:

myElement.getAttribute("align");
in quotes we have the name

myElement.setAttribute("align", "left");
in quotes we have the name, value

If this attribute doesnt exist, it will be CREATED!


Example:
we are grabbingand assigning a variable to a div with an ID of "mainContent".
Then we will change attributes of that element with the setAttribute command.
We have changed the attribute to align , right. Changing the allignment of the
contents (in this case text) to right.

var mainContent = document.getElementById("mainContent");
mainContent.setAttribute("align","right");


What if we want to change the contents of an element? We want to change the
inner html (text) of an element with the id mainTitle. In this case the element
is an h1 element with text in it.

First we grab the element and assign it a variable.
Then we ask the console to tell us what the inner HTML is.


EXAMPLE
mainTitle = document.getElementById("mainTitle");
console.log(mainTitle.innerHTML);


CONSOLE READS:
Welcome to California!


What if we want to grab an element that is more complicated than an h1, like
a div with many things inside it? This div has the id of "sidebar".

var sidebar = document.getElementById("sidebar");
console.log(sidebar.innerHTML);
