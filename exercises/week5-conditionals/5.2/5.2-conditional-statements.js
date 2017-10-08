//
// Exercise 5.2 videos

Conditionals: IF

var answer = window.confirm('Click OK, get true. Click cancel, get false.');
undefined
// Now a window pops up and i hit cancel
answer
false

var answer = window.confirm('Click OK, get true. Click cancel, get false.');

if (answer === true) {
    console.log ('You said true!')
}

// Now a window pops up and i hit OK

VM2402:4 You said true!
undefined

// Now add an else statement to say what to do if the user hits cancel

var answer = window.confirm('Click OK, get true. Click cancel, get false.');

if (answer === true) {
    console.log ('You said true!')
}
else {
console.log ('You said something else')
}
VM2442:7 You said something else
undefined

------------------------------------------------------
FRESH CONSOLE:

var answer = window.prompt('Type YES, NO, or MAYBE. Then click OK.');

if (answer === 'YES') {
console.log ('You said YES!')
}
else if (answer === 'MAYBE'){
console.log ("You said maybe, I don't know what to do with that!")
}
else if (answer === 'NO'){
console.log ('You said NO!')
}
else {
console.log ('You rebel, you!')
};

// ANSWERED YES

VM2664:4 You said YES!
undefined
var answer = window.prompt('Type YES, NO, or MAYBE. Then click OK.');

if (answer === 'YES') {
console.log ('You said YES!')
}
else if (answer === 'MAYBE'){
console.log ("You said maybe, I don't know what to do with that!")
}
else if (answer === 'NO'){
console.log ('You said NO!')
}
else {
console.log ('You rebel, you!')
};

// ANSWERED 'yes' (lowercase)

VM2666:13 You rebel, you!
undefined

--------------------------------

You can put an if statement inside the curly brackets of an if, nesting them:

var answer = window.prompt('Type YES, NO, or MAYBE. Then click OK.');

if (answer === 'YES') {
console.log ('You said YES!');

if (){}

}

else {
console.log ('You rebel, you!')
};


-------------------------------------



CONDITIONALS: SWITCH

we can re-write this example below...
var answer = window.prompt('Type YES, NO, or MAYBE. Then click OK.');

if (answer === 'YES') {
console.log ('You said YES!')
}
else if (answer === 'MAYBE'){
console.log ("You said maybe, I don't know what to do with that!")
}
else if (answer === 'NO'){
console.log ('You said NO!')
}
else {
console.log ('You rebel, you!')
};

LIKE THIS:

var answer = window.prompt('Type YES, NO, or MAYBE. Then click OK.');

switch (answer) {

case "YES":
console.log ('You said YES!');
break;

case 'MAYBE' :
console.log ("You said maybe, I don't know what to do with that!")
break;

case 'NO':
 console.log ('You said no. :(') //THATS A SAD FACE AT THE END
break;

default:

console.log ('You rebel, you!')
break;
}

// "break" exits the switch statement.

// if you omit the break of one of these statements, the browser will execute ALL the following commands. Example, if you remove the break after "yes", "you said yes" will be displayed and then "you said maybe, i don't kknow what to do withh that"



-------------------------------------------------------------------

TERSE IFS: ONE LINERS AND THE TERNARY Operator
You can shorten the way you write ifs, weve taken out the brakets in the example below

EXAMPLE

var cherub = 'Cupid';
//cherub = 'Some Other Guy';

if (cherub === 'Cupid') console.log ("Ouch, an arrow! Ooo, I'm in love!");

else
  console.log('I feel nothing!');
---------------------------------------------------------------------------



TYPE CHECKING
When you want to find out what a variable contains


var thing = 12;
undefined

thing = 'twelve';
"twelve"

typeof thing;
"string"

thing = 12;
12

typeof thing;
"number"

thing = true;
true

typeof thing;
"boolean"

thing = {};
{}

typeof thing;
"object"

thing = [];
[]

typeof thing;
"object"

// To check if something is an Array, you need to do this. An array is an object that has a length, objects dont have a length.

typeof thing === 'object' && thing.hasOwnProperty('length');
true


type of doesnt work for NaN or null
