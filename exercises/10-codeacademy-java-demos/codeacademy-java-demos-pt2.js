
Use Codeacademy.com JavaScript: Data Structures - 11. Arrays and Objects in JS https://www.codecademy.com/courses/javascript-beginner-en-9Sgpi/0/1?curriculum_id=506324b3a7dffd00020bf661

You know this!
You already know about arrays, so we wont spend a lot of time going over them. Go ahead and check out the past exercises on arrays if you need a refresher.

Instructions
Create an array called list in the editor. It can contain any data you want! Make sure it has at least three elements.

var list = [
    'one',
    'two',
    'three'
    ];

    Access by offset
    Good! Do you remember how to access an element of an array by offset (with the [] notation)? Check the Hint if you need help.

    Instructions
    Log the third element of the languages array to the console. Make sure to do this by accessing the third elements index.

    ?
    Hint

    If you want the first element of languages, youd type

    languages[0];
    because arrays start counting their elements at 0.

    answer:
    var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
    console.log (languages[2]);




    Array properties

    Good work! If you remember, arrays have a property in common with strings: they can both use .length. When you call .length on an array, it returns the number of elements that array has.
    Instructions

    Under your existing code, log the number of elements in languages to the console.

    answer:
    var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
console.log (languages[2]);
console.log(languages.length);


you get back:
JavaScript
5




Iterating over an array

By combining all these ideas with a for loop, you can iterate over the languages array and print out each element in turn!
Instructions

Go ahead and use a for loop to log each element of the languages array to the console.

Click "Stuck? Get a hint!" if you need a reminder of for loop syntax.
?
Hint

Your for loop should look like this:

for (var i = 0; i < languages.length; i++) {
    // console.log the 'i'th element
    // of the languages array
}

You should always include curly braces around the body of your for loop, even if its only one line.

answer:
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for (var i = 0; i < languages.length; i++) {
    // console.log the 'i'th element
    console.log(languages[i])
    // of the languages array
}

console reads back:
HTML
CSS
JavaScript
Python
Ruby


--------------------------------------------
Heterogeneous arrays

Now that we've reviewed some array basics, it's time to cover a little new ground.

First, it's not necessary for you to put the same type of data in an array! For instance, you don't have to have

var pronouns = ["I", "you", "we"];
var numbers = [1, 2, 3];

You can have a heterogeneous array, which means a mixture of data types, like so:

var mix = [42, true, "towel"];

Instructions

Create a heterogeneous array called myArray with at least three elements. The first element should be a number, the second should be a boolean (true or false), and the third should be a string. Feel free to add more elements of any type if you like!

answer:
var myArray = [5, true, "howdy doody"];
--------------------------------------------


Arrays of arrays

Good! The next thing to know is that not only can you put a mixture of types in an array, you can even put other arrays inside arrays. You can make a two-dimensional array by nesting arrays one layer deep, like so:

var twoDimensional = [[1, 1], [1, 1]];

This array is two-dimensional because it has two rows that each contain two items. If you were to put a new line between the two rows, you could log a 2D object—a square—to the console, like so:

[1, 1]
[1, 1]

Instructions

Create a two-dimensional array called newArray in the editor. It should have three rows and three columns containing any data you like. Check the Hint if you need help!

answer: var newArray = [[1,1,1],[1,1,1,],[1,1,1,]];
----------------------------------------


Jagged arrays

Great work! That's a fine-looking multidimensional array you've got there. (Yours is nested once, so its a two-dimensional array, but if you really wanted, you could put arrays inside arrays inside arrays for even more dimensions.)

Sometimes you want arrays that arent as nice and even as your 3 x 3 two-dimensional array: you may have three elements in the first row, one element in the second row, and two elements in the third row. JavaScript allows those, and theyre called jagged arrays.
Instructions

Create a jagged array called jagged. You can place whatever you like in it! The only requirement is that it have at least two rows (that is, the first two elements need to be arrays), and those rows cannot be the same length.
?
Hint

An example of a jagged array might be:

[[1,2],[3]];

Since there are two elements in the first nested array but only one element in the second nested array.

answer:
var jagged = [[1,1,1,1],[1,1,1],[1,1,],[1]];
------------------------------------------


Nouns and verbs together

Lets go back to the analogy of computer languages being like regular spoken languages. In English, you have nouns (which you can think of as "things") and verbs (which you can think of as "actions"). Until now, our nouns (data, such as numbers, strings, or variables) and verbs (functions) have been separate.

No longer!

Using objects, we can put our information and the functions that use that information in the same place.

You can also think of objects as combinations of key-value pairs (like arrays), only their keys dont have to be numbers like 0, 1, or 2: they can be strings and variables.
Instructions

Weve put an example of how objects can be used in the editor. Click Save & Submit Code to see objects in action.

answer:
var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();

calls out:
Calling Oxnard Montalvo at (555) 555-5555...
--------------------------------------


Object syntax

Did you see that? The phonebookEntry object handled data (a name and a telephone number) as well as a procedure (the function that printed who it was calling).

In that example, we gave the key name the value 'Oxnard Montalvo' and the key number the value '(555) 555-5555'. An object is like an array in this way, except its keys can be variables and strings, not just numbers.

Objects are just collections of information (keys and values) between curly braces, like this:

var myObject = {
    key: value,
    key: value,
    key: value
};

Instructions

Using the above syntax as a guide, create an object, me, in the editor. It should have a name key with the value of your name (as a string) and an age key with the value of your age (as a number).
?
Hint

Your code should look something like this:

var me = {
    name: 'Eric',
    age: 26
};

answer:
var me = {
    name: 'Sandra',
    age: 42
}

------------------------------------------


Creating a new object

Great work! You just created your very first object.

There are two ways to create an object: using object literal notation (which is what you just did) and using the object constructor.

Literal notation is just creating an object with curly braces, like this:

var myObj = {
    type: 'fancy',
    disposition: 'sunny'
};

var emptyObj = {};

When you use the constructor, the syntax looks like this:

var myObj = new Object();

This tells JavaScript: "I want you to make me a new thing, and I want that thing to be an Object.

You can add keys to your object after you've created it in two ways:

myObj["name"] = "Charlie";
myObj.name = "Charlie";

Both are correct, and the second is shorthand for the first. See how this is sort of similar to arrays?
Instructions

Recreate your me object in the editor, but this time, use the object constructor. Once you make it, use either the [] notation or the . notation to give it a name property with a string value (your name) and an age property with a number value (your age).

answer:
var me = new Object();
me["name"] = "Sandra";
me["age"] = 42;
------------------------------------------------


Practice makes perfect

Great work! Let's make a few more objects, just for practice.
Instructions

Create three objects called object1, object2, and object3 in the editor. Use either literal notation or the object constructor, and give your objects any properties you like!
?
Hint

Literal syntax:

var myObj = {
    key1: value,
    key2: value
};

var myObj = {};
myObj.key1 = value;
myObj['key2'] = value;

Object constructor:

var myObj = new Object();
myObj.key1 = value;
myObj['key2'] = value;



answer:

var object1 = new Object();
object1["size"] = "the biggest";

var object2 = {
    size: 'the biggest',
    feel: 'fuzzy'
}

var object3 = {
    size: 'the biggest',
    feel: 'fuzzy'
}

--------------------------------------------


Heterogeneous arrays
ADDING AN OBJECT TO AN ARRAY

Let's warm up with some arrays! Let's make an array thats a veritable potpourri of data types.
Instructions

Create an array, myArray. Its first element should be a number, its second should be a boolean, its third should be a string, and its fourth should be... an object! You can add as many elements of any type as you like after these first four.
?
Hint

Booleans can be true or false. To add a boolean to an array, we could do:

var bool1 = true;

myArray = [bool1];

To add an object to an array, we could do:

var myObj = {
    type: 'fancy',
    disposition: 'sunny'
};

myArray = [myObj];

answer:

var myObj = {
    holds: 3,
    hairy: true,
    smells: 'stinky',
};

var myArray = [
    3,
    true,
    'stinky',
    {myObj} (this shouldnt have worked i think. it should have been square brakets[])
    ];

----------------------------------


Multidimensional arrays
ADDING AN OBJECT TO AN ARRAY

Good! Now let's create a 2D array. Not only that, but a 2D array that's jagged. Remember, that means it's an array of arrays, and its nested arrays aren't all the same length! For example:

var aList = [ [1, 4, 2], [7] ];

Instructions

Make an array called newArray. It should be 2D (that is, it should contain two elements that, in turn, are arrays) and jagged (those two arrays should be of different lengths, like in the example above).

The ultimate kicker? Make one of your inner arrays contain an object!
?
Hint

To add an object to an array, we could do:

var myObj = {
    type: 'fancy',
    disposition: 'sunny'
};

myArray = [myObj];

 answer:

 var myObj = {
    hair: 'curly',
    taste: 'sour'
};

newArray = [
  [1,2,3],
  [1,2],
  [myObj]
    ];

----------------------------------------


Editing an existing object

Nice work! Now let's do a little work with objects. We'll start by modifying an existing one.
Instructions

Add a key called interests to myObject. Give this key an array value (the array can contain whatever you like).
?
Hint

Use the object syntax you see in the editor as a guide for adding your own key: value.

answer:
var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  // Add your code here!
  interests: 'tennis'
};

---------------------------------


Editing an existing object
ADDING AN ARRAY TO AN OBJECT

Nice work! Now let's do a little work with objects. We'll start by modifying an existing one.
Instructions

Add a key called interests to myObject. Give this key an array value (the array can contain whatever you like).
?
Hint

Use the object syntax you see in the editor as a guide for adding your own key: value.

answer:

var myArray = [
    'tennis'
    ]



var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  // Add your code here!
  interests: [myArray]
};

---------------------------------
