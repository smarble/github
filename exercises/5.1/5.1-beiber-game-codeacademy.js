//
// Exercise 5.1
// Use Codeacademy.com JavaScript: Introduction to JavaScript - 2. Choose your own adventure. https://www.codecademy.com/courses/javascript-beginner-en-x9DnD/0/1?curriculum_id=506324b3a7dffd00020bf661
//
// ALSO for Exercise 5.1
//
// Use Codeacademy.com JavaScript: Introduction to JavaScript - 9. More on Control Flow in JS (Sections 10-14) https://www.codecademy.com/courses/javascript-beginner-en-qDwp0/2/1



Confirm
You have some programming skills. Time to make something you can show people! We're going to show you how to program a 'code your own adventure' game. It'll have a basic story line, have the user make some choices, and have a happy ending. Then you can modify it as you wish and show off your creative talents!

One note before we begin. Each of the following exercises will ask you to add on to your previous code. Make sure not to delete or change anything that you did in a previous exercise. Good luck!

Instructions
Its always polite to ask your user if they are ready to play.
Using the confirm command, make sure your user is ready to play. For example, I would use the sentence "I am ready to play!". Add whatever phrase you would like in the confirm.
?
Hint
Get live, fast support from Codecademy Advisors when you get stuck.
Learn more.
To get the user to confirm something, the syntax looks like:

confirm("I understand confirm!");


ANSWER:

confirm("I am ready to play!");
-------------------------------------------------------------

Old enough to play?
This will involve two pieces of code:

First we will use prompt to ask a user for their age, like this:

var age = prompt("What's your age");
The variable age will hold the users response.

Then we will use an if/else statement based on the age of the user. Here's an outline of the code, similar to what we've seen before:

if(age is less than 13)
{
    // do this code
}
else   // "otherwise"
{
    // do this code
}
Instructions
Under the existing code, declare a variable age.
Make age equal to prompt("What's your age");. See the example above.
Then write an if/else statement. If age is less than 13, use console.log to tell the user that theyre allowed to play but you take no responsibility.
Else, use console.log and give them an encouraging message to play on!
?
Hint
Recall the syntax for if / else statements.

if (condition) {
    // code code code
} else {
    // code code code
}

ANSWER:

// Check if the user is ready to play!

confirm("I am ready to play!");

var age = prompt("What's your age");

if(age < 13)
{
    console.log ("Play at your own risk!")
}
else
{
    console.log ("Play on!")
};

-------------------------------------------------------

Adding some story
Lets set up the scene for your story. Under all your previous code, print out the following introduction, exactly as it is written.

"You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'"

Instructions
Print the introduction using console.log. Remember that the introduction is a string, so make sure to keep it between quotes.

?
Hint
When I was playing, I made a couple of errors!

Dont forget to use console.log to print stuff out.
The introduction is a string, so dont forget to write it between quotes.
Copy and paste the string exactly as it is written in the instructions.

ANSWER

// Check if the user is ready to play!

confirm("I am ready to play!");

var age = prompt("What's your age");

if(age < 13)
{
    console.log ("Play at your own risk!")
}
else
{
    console.log ("Play on!")
};

console.log ("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");

-------------------------------------------

First move!
Next, your user is about to talk to Justin Bieber.

Instructions
Under your existing code, print out the storyline: "Suddenly, Bieber stops and says, 'Who wants to race me?'"
Then declare a variable userAnswer. Make it equal a prompt that asks the user "Do you want to race Bieber on stage?". This will be the question that you ask your user.

ANSWER

// Check if the user is ready to play!

confirm("I am ready to play!");

var age = prompt("What's your age");

if(age < 13)
{
    console.log ("Play at your own risk!")
}
else
{
    console.log ("Play on!")
};

console.log ("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'")

 console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'")

 var userAnswer = prompt("Do you want to race Bieber on stage?")

 ---------------------------------------------------------


 The story heats up!
Now you have to create different scenarios. Good thing we know how to do that using if / else statements.

If userAnswer is "yes", print out: "You and Bieber start racing. It's neck and neck! You win by a shoelace!"

Otherwise, print out: "Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'"

Remember: = is for assignment, and === is to check if things are equal!

Instructions
Use an if / else statement to write out the last part of this game!

Make sure to check the console for error messages and suggestions for how to fix them.

?
Hint
Get live, fast support from Codecademy Advisors when you get stuck.
Learn more.
Cut and paste the sentences that you have to print out to avoid typos. If you don't type things exactly right, things don't work!

Remember, if/else works like this:

if (condition) {
    // Do something
} else { // Otherwise...
    // Do something else!
}

ANSWER

// Check if the user is ready to play!

confirm("I am ready to play!");

var age = prompt("What's your age");

if(age < 13)
{
    console.log ("Play at your own risk!")
}
else
{
    console.log ("Play on!")
}

console.log ("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'")

 console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'")

 var userAnswer = prompt("Do you want to race Bieber on stage?")

if(userAnswer==="yes")
 {
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!")
 }
 else
 {
     console.log ("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")
     }

-----------------------------------------------------


Asking for feedback
It is worthwhile asking your user for feedback!

Instructions
Create a variable called feedback and prompt the user to rate your game out of 10.

If feedback is greater than 8, print out: "Thank you! We should race at the next concert!"

Otherwise, print out:
"I'll keep practicing coding and racing."

?
Hint
Remember, your prompt should look something like this:

var feedback = prompt("Message");

ANSWER:

// Check if the user is ready to play!

confirm("I am ready to play!");

var age = prompt("What's your age");

if(age < 13)
{
    console.log ("Play at your own risk!")
}
else
{
    console.log ("Play on!")
}

console.log ("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'")

 console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'")

 var userAnswer = prompt("Do you want to race Bieber on stage?")

if(userAnswer==="yes")
 {
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!")
 }
 else
 {
     console.log ("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")
     }

var feedback = prompt("Between 1 and 10, how would you rate this game?")



if(feedback >8)
{
 console.log ("Thank you! We should race at the next concert!")
    }
else
{
console.log ("I'll keep practicing coding and racing.")
}

-----------------------------------------------------

// Use Codeacademy.com JavaScript: Introduction to JavaScript - 9. More on Control Flow in JS (Sections 10-14) https://www.codecademy.com/courses/javascript-beginner-en-qDwp0/2/1

Overview
So far weve seen how to control our programs given a single condition: whether one variable is equal to a certain value, for instance. But what if we want to check more than one variable?

For this, well need logical operators. JavaScript has three: and (&&), or (||), and not (!).

Using these, we can check several variables at once! Check out the code in the editor.

Instructions
Starting to make sense? Set both variables in the editor to true and hit Save & Submit Code to see what happens!

ANSWER:

// Complete lines 3 and 4!

var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning (neither):
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}

------------------------------------------------------------



&& and "RETURN"

The logical operator and is written in JavaScript like this: &&. It evaluates to true when both expressions are true; if theyre not, it evaluates to false.

true && true;    // => true
true && false;   // => false
false && true;   // => false
false && false;  // => false
Instructions
Create two variables, hungry and foodHere, and set them both equal to true. Inside the eat function, create an if statement that returns true only if both hungry and foodHere are true, and false otherwise. The function eat should take no input and hungry and foodHere should both be globals.

ANSWER:

// Declare your variables here!
var hungry = true;
var foodHere = true;
var eat = function() {
  // Add your if/else statement here!
  if (hungry && foodHere)
  {
     return true;
  }
  else
  {
  return false;
  }
};


-------------------------------------------------

OR ||


The logical operator or is written in JavaScript like this: ||. It evaluates to true when one or the other or both expressions are true; if theyre not, it evaluates to false.

true || true;     // => true
true || false;    // => true
false || true;    // => true
false || false;   // => false
The or operator is written with two vertical bars ||. The vertical bar character is located right above the Enter key on your keyboard.

Instructions
Create two variables, tired and bored, and set one equal to true and the other equal to false. (It doesnt matter which is which.) Inside the nap function, create an if statement that returns true if either tired or bored (or both!) are true, and false otherwise.

ANSWER

// Declare your variables here!
var tired = true;
var bored = false;


var nap = function() {
  // Add your if/else statement here!
     if (tired || bored)
{
     return true;
 }
else
 {
     return false;
     }
};
