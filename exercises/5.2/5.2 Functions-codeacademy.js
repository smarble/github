

-----------------------------------------------------------------

PG 29.
6.5 Nested Conditionals Part 1
about: Ternary Operators


ANSWER

var x = 11;
var y = 9;

//The ternary operator in action
// result = x > y ? "good job" : 20;

//Rewrite the ternary code using if else statements
if (x>y){
 result = "good job";
}
else{
 result = 20;
};



CONSOLE READS

NOTES



------------------------------------------------------------------------

---------------------------------------------------------
------------------------------------------------------------------
-----------------------------------------------------------------
---------------------------------------------------------
------------------------------------------------------------------
-----------------------------------------------------------------
---------------------------------------------------------
------------------------------------------------------------------
-----------------------------------------------------------------
---------------------------------------------------------
------------------------------------------------------------------
-----------------------------------------------------------------
---------------------------------------------------------
------------------------------------------------------------------
-----------------------------------------------------------------










FUNCTIONS
From Javascript FUNCTIONS: https://www.codecademy.com/en/courses/functions-in-javascript-2-0/0/1


My first function
Making progress! By now you should know how to define a function and how to call it.

Try to define a function named myFirstFunction and make it print your name on the console:

console.log("yourName");

Instructions
First, define your function.

Second, call your function.

?
Hint
Get live, fast support from Codecademy Advisors when you get stuck.
Learn more.
Try writing the code out by hand first to remember the syntax. To remind you how functions are written, here is an empty function that does nothing:

var empty = function () {};

Dont forget you need to call the function to get anything to happen in the console!



answer



var myFirstFunction = function (){
    console.log ('Sandra')
};

myFirstFunction ();



console reads:




Sandra




--------------------------------------------------------

FUNCTIONS

Fix me!
You never forget your first function!

Alas, Bob isn't there yet. He doesn't know about functions. To the right, you see a whole big bunch of code. It is a bit scary! You can see the code on lines 10-14 is repeated on lines 18-22. We can use a function to simplify all of this!

What does the repeated code do? It takes in some variable name, capitalizes the first character and then prints the full name.

Instructions
There are many things we want you to do!

1) Define a function named fixName beginning on line 7.

2) Copy and paste one set of the repeated code into this function (ie. What was originally on lines 10 - 14).

3) Then delete both the repeated code blocks.

4) After each 'name = prompt' line of code, call your fixName function.

This shows how using a function is more efficient than typing in the same code over and over! Win!

?
Hint
You should be calling the function fixName twice, once after each prompt. We are calling the function fixName to efficiently repeat the code.

Note, the actual line that code is written on does NOT matter. What matters is the ORDER of the code.

If you have forgotten about the substring method, check out this previous course.



answer



var fullName = "";
var name;
var firstLetter;
/*
   fixName function definition should go here.
*/
var fixName = function (){
    firstLetter = name.substring(0, 1);
name = firstLetter.toUpperCase() + name.substring(1);
fullName = fullName + " " + name;
}


name = prompt("Enter your first name (all in lower case):");

fixName();

name = prompt("Enter your second name (all in lower case):");

fixName();

console.log("And your full name is:" + fullName);




console reads



And your full name is: Sandra Marble



--------------------------------------------------
---------------------------------------------------
--------------------------------------------------
---------------------------------------------------
--------------------------------------------------
---------------------------------------------------
--------------------------------------------------
---------------------------------------------------
--------------------------------------------------
---------------------------------------------------
--------------------------------------------------
---------------------------------------------------
--------------------------------------------------
---------------------------------------------------
--------------------------------------------------
---------------------------------------------------
--------------------------------------------------
---------------------------------------------------

FUNCTIONS
