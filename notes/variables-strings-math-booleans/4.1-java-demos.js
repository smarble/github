/*

Fall 2017 JavaScript and Jquery class.
The script below is to be typed into the console of a browser.
*/

// Declaring and assingning a variable: JavaScript and jquery class Fall 2017. From the lynda.com JavaScript tutorials.

http://www.lynda.com/JavaScript-tutorials/Declaring-assigning-variable/123563/133776-4.html?org=mcad.edu

// -you can name a variable anything you want, use camelcase.
// -there are a few "reserved" words that you can not use, google that
// you dont need to use the semicolon at the end of the line if there is just one command on one line

var x = 32;
undefined
x;
32
var whereAmI = "Graz, Austria";
undefined
whereAmI;
"Graz, Austria"
x = 45;
45
x
45
whereAmI = 75;
75
whereAmI;
75
var monster1 = "Grover", monster2 = "Cookie Monster", monster3 = "Animal";
undefined
monster1;
"Grover"
monster2
"Cookie Monster"
monster3
"Animal"
var presidentOfUSA = "Obama";
undefined
presidentOfUSA
"Obama"



// Numbers: JavaScript and jquery class Fall 2017. From the lynda.com JavaScript tutorials.
// -there is a global object called math that lets you do different opperations on Numbers
// -Math.random(); gives you a different number between zero and one each time.
http://www.lynda.com/JavaScript-tutorials/Numbers/123563/133777-4.html?org=mcad.edu

12
12
12.0;
12
12.98989898989989899898989898989898989898989898
12.989898989899899
-12
-12
Infinity
Infinity
-Infinity
-Infinity

// NaN means not a number, it's an error message
NaN;
NaN

// I don't know what typing just Math does, it is not necessary to type just Math before starting commands.
Math
Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}

Math.round(12.9999999999999999)
13
Math.round(12.33333333333333333)
12
Math.random();
0.5643022352873215
Math.random();
0.2749537932628221
Math.random()
0.8137003301471422
Math.random()
0.12726159922150937
Math.random()
0.6962226484638281
Math.random()
0.11804265507251066
Math.random()
0.6526976571950784
Math.random()
0.7907251415715659


// Strings: JavaScript and jquery class Fall 2017. From the lynda.com JavaScript tutorials.
// -a string literal is anything in quotes, even numbers. you can use single or double quotes, just keep it consistent.
// -if you are getting complicated with quotes in quotes, use an html text editor to decipher what is embedded in the string (active).
//
// Example: "This is Joe's "favorite" string". The word favorite is not embeded. to make it embeded, place a backslash in front of each effected quoteation mark like so: "This is Joe's \"favorite\" string"
//
// strings have properties and functions. You can ask javascript about those properties: example: look how many characters are in string. first you can make a string into a variable, then myString.length
//
// variableName.property (or function)
//
// You don't have to make the string a variable Example:
//
// "This is my string".length;

http://www.lynda.com/JavaScript-tutorials/Strings/123563/133778-4.html?org=mcad.edu


"This is a string"
"This is a string"
"12"
"12"
'This is a string'
"This is a string"
'<a href="">'
"<a href="">"
"This is Joe's favorite string"
"This is Joe's favorite string"

// The word favorite is not embeded. to make it embeded, place a backslash in front of each effected quoteation mark like so: "This is Joe's \"favorite\" string"


"This is Joe's "favorite" string"
VM3067:1 Uncaught SyntaxError: Unexpected identifier
"This is Joe's \"favorite\" string"
"This is Joe's "favorite" string"
var myString = "This is my string. Leave it alone";
undefined
myString
"This is my string. Leave it alone"
myString.length;
33
myString.toUpperCase();
"THIS IS MY STRING. LEAVE IT ALONE"
"This is my string".length;
17





// Booleans: JavaScript and jquery class Fall 2017. From the lynda.com video, Booleans and the quest for truth.
http://www.lynda.com/JavaScript-tutorials/Booleans-quest-truth/123563/133779-4.html?org=mcad.edu

true
true
false
false
// true or false must be lower case. notice below you get an error message.
True
VM1460:1 Uncaught ReferenceError: True is not defined at <anonymous>:1:1 (anonymous) @ VM1460:1

var myLocation = "Graz", myOtherLocation = "Los Angeles";
undefined
// NOW LETS ASK JAVASCRIPT A STATEMENT WE KNOW WILL BE FALSE. ARE THESE TWO LOCATIONS THE SAME?
VM1699:1 Uncaught SyntaxError: Unexpected identifier

myLocation === myOtherLocation
false
myOtherLocation = "Graz";
"Graz"
myLocation === myOtherLocation;
true
