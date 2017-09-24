/*

Fall 2017 JavaScript and Jquery class.
The script below is to be typed into the console of a browser.
*/

// OBJECTS: From the lynda.com JavaScript tutorials.
//
// http://www.lynda.com/JavaScript-tutorials/Objects/123563/133781-4.html?org=mcad.edu
//
// -To type a line break without executing the code, hold down the shift key while pressing return.
// Objects are like filing systems or data structures and can get quite sophisticated. Example:
// "label" : "value(can be any thing, function, number, or even another object)"
// -use the up arrow to retype the last line you typed.

'key'.


{}
{}__proto__: Object
{};
undefined

var emptyObject = {};
undefined

emptyObject;
{}__proto__: Object
var notEmptyObject = {

};
undefined

var notEmptyObject = {
'label' : 'value',
'label' : 'value2'
};
undefined

Object
ƒ Object() { [native code] }
notEmptyObject
{label: "value2"}label: "value2"__proto__:

Object
var animal = {
'genus' : 'bird',
'speceis' : 'raven',
'callType' : 'squawky',
'quote' : 'Nevermore',
'maxOffspring' : 5,
'noisy' : 'true',
'deadly' : 'false',
}
undefined

animal
{genus: "bird", speceis: "raven", callType: "squawky", quote: "Nevermore", maxOffspring: 5, …}callType: "squawky"deadly: "false"genus: "bird"maxOffspring: 5noisy: "true"quote: "Nevermore"speceis: "raven"__proto__: Object

var animal = {
'genus' : 'bird',
'speceis' : 'raven',
'callType' : 'squawky',
'quote' : 'Nevermore',
'maxOffspring' : 5,
'noisy' : 'true',
'deadly' : 'false',
}
undefined

var animal2 = {
'genus' : 'bear',
'speceis' : 'grizzly',
'callType' : 'roar',
'quote' : "",
'maxOffspring' : 3,
'noisy' : 'true',
'deadly' : 'true',
}
undefined

var bookOfKnowledge = {
'lunch time' : '12:30 PM',
'the ultimate answer' : 42,
'bestSong' : 'Lonnie\'s Lament',
'earth' : 'Mostly harmless.'
}
undefined


// Manipulating Objects
// http://www.lynda.com/JavaScript-tutorials/Manipulating-objects/123563/133782-4.html?org=mcad.edu

var animal = {
'genus' : 'bird',
'speceis' : 'raven',
'callType' : 'squawky',
'quote' : 'Nevermore',
'maxOffspring' : 5,
'noisy' : 'true',
'deadly' : 'false',
}

undefined

// These two ways of asking for animal.quote get the same result
animal.quote
"Nevermore"
animal["quote"];
"Nevermore"

// This is how to add a property to an allready existing object, note we are adding color=black
animal.color="black";
"black"
animal;
{genus: "bird", speceis: "raven", callType: "squawky", quote: "Nevermore", maxOffspring: 5, …}callType: "squawky"color: "black"deadly: "false"genus: "bird"maxOffspring: 5noisy: "true"quote: "Nevermore"speceis: "raven"__proto__: Object


// Now we are adding a property that has spaces to a pre-existing object. We must use square brackets.
animal["where it lives"] = "in a tree";
"in a tree"
// Or you could do this:
animal.whereItLives = "in a tree";
"in a tree"

// How to delete a property from an object. This is a key:
delete animal.color;
true
animal




http://www.lynda.com/JavaScript-tutorials/Objects-references/123563/133783-4.html?org=mcad.edu
// Objects are references to specific memory in a location. If you make animal equal to animal2 (var animal2 = animal), they are now both the same and share the same info, they are not just copies of one another.






// http://www.lynda.com/JavaScript-tutorials/Arrays/123563/133784-4.html?org=mcad.edu
// An array is good for a series of things that you want to stay in a certain order (days of the week) An array is a list of ordered data, and you use the square brackets.

var myArray = [];
undefined

var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday'];
undefined

daysOfTheWeek
(4) ["Sunday", "Monday", "Tuesday", "Wednesday"]

var myArray=[
0, 1, 2,"string1","string2", true, false]


undefined
myArray
(7) [0, 1, 2, "string1", "string2", true, false]

// you can ask how long an array is, because it counts its contents
myArray.length
7



http://www.lynda.com/JavaScript-tutorials/Manipulating-arrays/123563/133785-4.html?org=mcad.edu
Arrays are zero indexed.

var counties = [
'Belknap',
'Strafford',
'Carroll',
'Rockingham'
];
undefined

counties[0];
"Belknap"

counties[2];
"Carroll"

// How to replace an item in an array:
counties[2] = 'Cheshire';
"Cheshire"

counties
(4) ["Belknap", "Strafford", "Cheshire", "Rockingham"]

// How to add an item to the end of an array:
counties[counties.length] = 'Merrimack';

counties
(5) ["Belknap", "Strafford", "Cheshire", "Rockingham", "Merrimack"]

// Another way to add to the end of an array is to push
counties.push("Coos");
6
counties
(6) ["Belknap", "Strafford", "Cheshire", "Rockingham", "Merrimack", "Coos"]

To remove from the end of an array, you can use pop.

counties.pop();
"Coos"

counties
(5) ["Belknap", "Strafford", "Cheshire", "Rockingham", "Merrimack"]

// .shift and .unshift do the same, but adding and taking off from the FRONT of an array

// How to delete from the middle of an array. You must SPLICE!

counties.splice(2, 1);
["Cheshire"]

counties
(4) ["Belknap", "Strafford", "Rockingham", "Merrimack"]


http://www.lynda.com/JavaScript-tutorials/Readability-Whitespace/123563/133786-4.html?org=mcad.edu
