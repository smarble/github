Notes: Contents of this page:

Exercise 6.2 - Introduction to While Loops in JS
https://www.codecademy.com/courses/javascript-beginner-en-ASGIv/0/1?curriculum_id=506324b3a7dffd00020bf661

COURSE OUTLINE

Section: 'While' Loops: The Basics

1.1: While were at it
1.2: While syntax
1.3: A fellow of infinite loops
1.4: Brevity is the soul of programming
Section: More Practice with Loops!

2.1: Practice makes perfect
2.2: Solo flight
2.3: Mid-lesson breather
Section: More with 'While'

3.1: When to 'while' and when to 'for'
3.2: The 'do' / 'while' loop
3.3: To learn it, you gotta 'do' it
3.4: Review

------------------------------------------------------------------------------
PG:1
1.1: While were at it

Great work with for loops! As a reminder, for loop syntax looks like this:

for (var i = start; i < end; i++) {
  // do something
}
The counter variable i starts at "start", and stops looping when it reaches "end."

But what if you didn't know ahead of time when to stop looping? Say, for example, you wanted to keep choosing playing cards from a deck until you get a spade. You don't know how many cards you'll need to choose, so a for loop won't work.

In situations like these where you dont know in advance when to stop looping, we can use a while loop.

Instructions
Check out the while loop in the editor. Can you guess what it will do? Hit "Save & Submit Code" when you think you know! (The answer is in the Hint.)

Don't worry about the Math.floor bit for now—we'll explain it soon!

?
Hint
The code in the editor keeps flipping a coin until it is tails. Heres how it works:

In line 1, we create a variable named coinFace, which is a random number that is either 0 (heads) or 1 (tails).
Then in lines 3-5 we keep flipping the coin as long as the coin turns up heads. If coinFace is 0 (heads), then the condition in the while loop will evaluate to true, and we flip the coin again.
If coinFace is 1 (tails), then the condition will be false, so we break out of the while loop and print Tails! Done flipping.



ANSWER


var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");



CONSOLE READS

Heads! Flipping again...
Heads! Flipping again...
Tails! Done flipping.



------------------------------------------------------------------------------
PG:2
1.2: While syntax



The while loop is ideal when you want to use a loop, but you don't know how many times you'll have to execute that loop.

In the example you just saw, the computer was randomly flipping a coin: while the coin came up heads (when coinFace equalled 0), it would flip again, and it would stop flipping once it got tails (when coinFace was 1). Since the flip was random, we didn't know ahead of time how many loops we'd need.

The syntax looks like this:

while(condition){
    // Do something!
}
As long as the condition evaluates to true, the loop will continue to run. As soon as it's false, it'll stop. (When you use a number in a condition, as we did earlier, JavaScript understands 1 to mean true and 0 to mean false.)

Since youve already mastered for loops, this simpler syntax should be a breeze for you.

Instructions
Try it yourself—complete the while loop in the editor so it will print out "I'm learning while loops!". Do this by adding the condition between the parentheses—dont change line 5, or you could get an infinite loop!


ANSWER

var understand = true;

while(understand === true  ){
	console.log("I'm learning while loops!");
	understand = false;
}



CONSOLE READS

Im learning while loops!
false



------------------------------------------------------------------------------
PG: 3
1.3: A fellow of infinite loops



Great work!

We mentioned infinite loops in the previous exercise. If you give a while loop a condition that is true and you dont build in a way for that condition to possibly become false, the loop will go on forever and your program will crash. No good!

To prevent this from happening, you always need a way to ensure the condition between your while parentheses can change.

You'll see the same code from the last exercise in the editor to the right, only we've taken out the part that changes the loops condition.

Instructions
DON'T run the code the way it is—you'll have to reload the window to stop the infinite loop! Instead, change the value of understand to something other than true (such as false) on line 6 so the loop will exit.

?
Hint
If you ever submit your JavaScript code and the browser freezes, you may have written an infinite loop! Refresh the page and check your code if this happens.




ANSWER


understand = true;

while(understand){
	console.log("I'm learning while loops!");
	//Change the value of 'understand' here!
	understand=false;
}


CONSOLE READS

Im learning while loops!
false



------------------------------------------------------------------------------
PG:4
1.4: Brevity is the soul of programming



You may have noticed that when we give a variable the boolean value true, we check that variable directly—we dont bother with ===. For instance,

var bool = true;
while(bool){
    //Do something
}
is the same thing as

var bool = true;
while(bool === true){
    //Do something
}
but the first one is faster to type. Get in the habit of typing exactly as much as you need to, and no more!

If you happen to be using numbers, as we did earlier, you could even do:

var myNumber = 1;
while(myNumber) {
    // Do something!
}
Instructions
Weve written the less succinct version in the editor. Correct it to the more elegant version!

?
Hint
Your condition should only be:

while(bool)



ANSWER


var bool = true;

while(bool){
    console.log("Less is more!");
    bool = false;
}



CONSOLE READS

Less is more!
false



------------------------------------------------------------------------------
PG:5
Section: More Practice with Loops!

2.1: Practice makes perfect

Okay. Time for you to create a while loop from scratch!

Weve set up a function, loop, for you to write your while loop in, as well as created the empty loop.

Remember to set up the condition you're checking outside the loop—if you do it in the loop, it will keep resetting and the loop could go on forever!

Instructions
Write a while loop that logs "I'm looping!" to the console three times. You can do this however you like, but NOT with three console.log calls. Check the Hint if you need help!

?
Hint
We actually know we need to loop three times, so we could use a for loop, but we'll use while this time.

If we create a variable called count and set it to 0 outside the loop (on line 2), then do count++ each time we console.log() inside the loop, we'll be able to track how many loops we've made. If we set the while condition to be count < 3, that should do the trick!



ANSWER
THERI ARE MULTIPLE ANSWERS!!!
1.
var count = 0;

var loop = function(){
	while(count < 3){
		//Your code goes here!
		console.log("I'm looping!");
		count++;
	}
};

loop();


2.
var loop = 0;

var loop = function(){
	while(loop !==3){
		//Your code goes here!
		console.log("I'm looping!");
		loop++;
	}
};

loop();




CONSOLE READS

Im looping!
Im looping!
Im looping!


------------------------------------------------------------------------------
PG: 6
2.2: Solo flight


Great work! Lets try another. This time, no help at all! (Well, some help—check the Hint if you get stuck.)

Instructions
Inside the soloLoop function, write a while loop that takes an initial condition that's true. Your loop should log "Looped once!" to the console, then change that initial condition to false.

MAKE SURE to set your condition to false in the body of your loop. Otherwise, you'll loop forever!

?
Hint
Remember, while loops look like this:

while(condition) {
    // Do something!
}
So your loop should do something like this:

var myCondition = true;

while(myCondition) {
    console.log("Looped once!");
    myCondition = false;
}





ANSWER

//Remember to make your condition true outside the loop!
soloLoop=true
var soloLoop = function(){
  //Your code goes here!
  while(soloLoop){
  console.log("Looped once!");
  soloLoop=false;
  }
};

soloLoop();




CONSOLE READS


Looped once!

------------------------------------------------------------------------------
PG:7
2.3: Mid-lesson breather




ANSWER


CONSOLE READS


------------------------------------------------------------------------------
PG:8
Section: More with 'While'

3.1: When to 'while' and when to 'for'

As we mentioned, for loops are great for doing the same task over and over when you know ahead of time how many times you'll have to repeat the loop. On the other hand, while loops are ideal when you have to loop, but you don't know ahead of time how many times youll need to loop.

As you saw, however, you can combine a while loop with a counter variable to do the same kind of work a for loop does. In these cases, its often a matter of preference.

Instructions
Write two loops in the editor: one while, one for. No restrictions on this one; just make sure your loops are syntactically correct, and be careful to avoid infinite loops!

?
Hint
Remember your syntax! While loops look like this:

while(condition) {
    // Do while condition is true
}
For loops look like this:

for(start; end; increment) {
    // Do something!
}
For example, you might have a for loop that looks like this:

for (var i = 1; i < 11; i++) {
    // Print the numbers 1 - 10
    console.log(i);
}


ANSWER



var familyMember = ["Rebeca", "Nathan", "Palito", "Chanchito", "Stanley"];


for (var i = 0; i < familyMember.length; i++){
    console.log(familyMember[i] + " is family.");
}


/* my While Loop */

var j = 0;

while(j < familyMember.length){
    console.log(familyMember[j]);
    j++;
}



CONSOLE READS



Rebeca is family.
Nathan is family.
Palito is family.
Chanchito is family.
Stanley is family.
Rebeca
Nathan
Palito
Chanchito
Stanley
4


------------------------------------------------------------------------------
PG:9
3.2: The 'do' / 'while' loop



Sometimes you want to make sure your loop runs at least one time no matter what. When this is the case, you want a modified while loop called a do/while loop.

This loop says: "Hey! Do this thing one time, then check the condition to see if we should keep looping." After that, its just like a normal while: the loop will continue so long as the condition being evaluated is true.

Instructions
Click Save & Submit Code to see the loop in action. It runs once because do tells it to, but then never again because loopCondition is false!

ANSWER

var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");
} while (loopCondition);

CONSOLE READS

I'm gonna stop looping 'cause my condition is false!



------------------------------------------------------------------------------
PG: 10

3.3: To learn it, you gotta 'do' it


Your turn! Now that youve seen how do/while loops work, you can easily write your own. (Check the Hint if you need a syntax refresher!)

Your loop should print a string of your choice to the editor one time. Remember: make sure you give your while condition a way to become false, or itll loop forever!

Instructions
Write a do/while loop inside the function we've created for you, getToDaChoppa. The function should log a string of your choice to the console. do it now!

?
Hint
Remember, the syntax looks like this:

do {

    // The thing to do at least once!

} while(  /* some condition */  );

ANSWER



var getToDaChoppa = function(){
do{
  console.log("We make a stand now, or there will be nobody left to go to the chopper.");
}while(getToDaChoppa===true);
};
getToDaChoppa(false);



CONSOLE READS


We make a stand now, or there will be nobody left to go to the chopper.





------------------------------------------------------------------------------
PG:11
3.4: Review



Review
Awesome work! Youve now learned about all the loops there are: for, while, and do.

Instructions
To finish up and prove your loop mastery, write three syntactically correct loops in the editor: one for, one while, and one do. Beware of infinite loops!

?
Hint
Remember your loop syntax!

For example:

for (var i = 1; i < 11; i++) {
    // Prints numbers 1 - 10
    console.log(i);
}
While example:

var condition = true;
while(condition) {
    console.log("Hello!");
    // Avoid infinite loops!
    condition = false;
}
Do/while example:

// Can be false from the start, since
// do/while runs at least one time
var condition = false;
do {
    console.log("I'm printed once!");
} while(condition);





ANSWER

for (var g = 1; g < 10; g++) {
console.log("I will finish this JavaScript course before winter, and winter is coming");
}




var j = 0;

while(j < familyMember.length){
console.log(familyMember[j]);
j++;
}




var getToDaChoppa = function(){
do{
console.log("We make a stand now, or there will be nobody left to go to the chopper.");
}while(getToDaChoppa===true);
};
getToDaChoppa(false);



CONSOLE READS


I will finish this JavaScript course before winter, and winter is coming
I will finish this JavaScript course before winter, and winter is coming
I will finish this JavaScript course before winter, and winter is coming
I will finish this JavaScript course before winter, and winter is coming
I will finish this JavaScript course before winter, and winter is coming
I will finish this JavaScript course before winter, and winter is coming
I will finish this JavaScript course before winter, and winter is coming
I will finish this JavaScript course before winter, and winter is coming
I will finish this JavaScript course before winter, and winter is coming
Rebeca
Nathan
Palito
Chanchito
Stanley
We make a stand now, or there will be nobody left to go to the chopper.
