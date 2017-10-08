Notes: Contents of this page:

Lecture 6.2.1 - While Loops
Video


------------------------------------------------------------------------------

This is a simple for loop:

for (var i = 0; i< 10; i++) {
  console.log (i + '...This will go until we hit 10')
}

This is the same loop, but written as a 'while' loop:

var i = 0;
while (i < 10) {
  console.log (i + '...This will go until we hit 10');
  i+= 1;
}


When would you use while instead of for? When you have an amount of things to
go through that are undefined. And when you know at least ONE condition that you
can check against (in this case we know the items are true/false booleans)

For example. Pretend that in the array below, we dont know how many booleans are
in the array.

var myArray = [true, true, true, false, true, true];

var myItem = null;
while (myItem !== false){
  console.log ('myArray has  ' + myArray.lenth + ' items now. This loop will go until we pop a false.');
  myItem = myArray.pop();
}


A for loop would keep looping through EVERY item in the array, but this while loop
will keep going while myItem is not false. It will stop once myItem is false.

use a break, to make a loop cycle only once. Example:

var myArray = [true, true, true, false, true, true];

var myItem = null;
while (myItem !== false){
  console.log ('myArray has  ' + myArray.lenth + ' items now. This loop will go until we pop a false.');
  myItem = myArray.pop();
  break;
}



When you run this loop, without the break:

var myArray = [true, true, true, false, true, true];

var myItem = null;
while (myItem !== false){
  console.log ('myArray has  ' + myArray.lenth + ' items now. This loop will go until we pop a false.');
  myItem = myArray.pop();
}


Console reads:

myArray has 6 items now. This loop will go until we pop a false.
myArray has 5 items now. This loop will go until we pop a false.
myArray has 4 items now. This loop will go until we pop a false.
false



If you want to make sure a loop goes at least for one loop, use a do loop.
As this statement is written, the console will never log because the condition
is satisfied before the first loop (myItem is false)

var myArray = [true, true, true, false, true, true];

var myItem = false;
while (myItem !== false){
  console.log ('myArray has  ' + myArray.lenth + ' items now. This loop will go until we pop a false.');
  myItem = myArray.pop();
}


So we change this to a do while like so:

var myArray = [true, true, true, false, true, true];

var myItem = false;
do{
  console.log ('myArray has  ' + myArray.lenth + ' items now. This loop will go until we pop a false.');
  myItem = myArray.pop();
}
while (myItem !== false);


Now, regardless of the condition we set after the 'while', the items in the do brackets will get
run at least once.


Console reads:

myArray has 6 items now. This loop will go until we pop a false.
myArray has 5 items now. This loop will go until we pop a false.
myArray has 4 items now. This loop will go until we pop a false.
false
