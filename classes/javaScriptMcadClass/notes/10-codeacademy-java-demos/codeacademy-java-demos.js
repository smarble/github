Use Codeacademy.com JavaScript: Introduction to JavaScript - 1. Getting started with programming
https://www.codecademy.com/courses/getting-started-v2/0/1?curriculum_id=506324b3a7dffd00020bf661


From codeacademy Interactive JavaScript

makes a pop up box that you need to hit ok to leave.
confirm("Do you like to party?")
confirm("Clap your hands if you care!")

Data Types I & II: Numbers & Strings

To do any of these actions, the program needs an input. You can ask for input with a prompt.

Examples:

prompt("What is your name?");
prompt("What is Ubuntu?");


Data Types I & II: Numbers & Strings
Data comes in various types. You have used two already!

a. numbers are quantities, just like youre used to. You can do math with them.

b. strings are sequences of characters, like the letters a-z, spaces, and even numbers. These are all strings: "Ryan", "4" and "What is your name?" Strings are extremely useful as labels, names, and content for your programs.

To make a number in your code, just write a number as numerals without quotes: 42, 190.12334.

To write a string, surround words with quotes: "What is your name?"

To check your string length:
"This is a string, Yo!"

"This is a string, Yo!".length;

Data Type III: Booleans
Nice job! Next lets look at booleans. A boolean is either true or false.

For example, comparing two numbers returns a true or false result:

23 > 10 is true
5 < 4 is false

Lets compare two numbers to return a true result:

First, write the string "I'm coding like a champ"
Next, find the length of the string using .length
Then, compare the strings length to see if it is greater than 10

"I'm coding like a champ"
"I'm coding like a champ".length
23>10

Using console.log
You may have noticed that the interpreter doesn't print out every single thing it does. So if we want to know what it's thinking, we sometimes have to ask it to speak to us.

console.log() will take whatever is inside the parentheses and log it to the console below your code—that's why it's called console.log()!

This is commonly called printing out.

Please print the following two console.log statements at the same time. Type one on line 1 and the other on line 2. Then press Save & Submit Code.

console.log(2 * 5)
console.log("Hello")

These two commands printed out:
10
Hello

Comparisons
So far weve learned about three data types:

strings (e.g. "dogs go woof!")
numbers (e.g. 4, 10)
booleans (e.g. false, 5 > 4)
Now lets learn more about comparison operators.

List of comparison operators:

> Greater than
< Less than
<= Less than or equal to
>= Greater than or equal to
=== Equal to
!== Not equal to

Try to use each of the operators above.

Choose the correct comparison operator to make each of the four statements print out true.

// Here is an example of using the greater than (>) operator.
console.log(15 > 4); // 15 > 4 evaluates to true, so true is printed.

// Fill in with >, <, === so that the following print out true:
console.log("Xiao Hui".length < 122);
console.log("Goody Donaldson".length > 8);
console.log(8*2 === 16);

true
true
true
true


Decisions, decisions
Nice work on comparisons! Now lets see how we can use comparisons to ask yes or no questions.

Say we want to write a program that asks whether your name is longer than 7 letters. If the answer is yes, we can respond with "You have a long name!" We can do this with an if statement:

if( "myName".length >= 7 ) {
    console.log("You have a long name!");
}
An if statement is made up of the if keyword, a condition like weve seen before, and a pair of curly braces { }. If the answer to the condition is yes, the code inside the curly braces will run.

Instructions
Check out the if statement in the editor.

On line 1, add a condition inside the parentheses ( ).
If the answer to the condition is yes, the code inside the curly braces will run. So on line 2, use console.log to print out a string.


if ("myName".length >=5 ) {
    console.log("You have a long name");
}

You have a long name



Computers are smart

Great! We used an if statement to do something if the answer to the condition was yes, or true as we say in JavaScript.

In addition to doing something when the condition is true, we can do something else if the condition is false. For example, if your name is shorter than 7 letters, we can respond with "You have a short name!" We can do this using an if / else statement:

if( "myName".length >= 7 ) {
    console.log("You have a long name!");
}
else {
    console.log("You have a short name!");
}
Just like before, if the condition is true, then only the code inside the first pair of curly braces will run. Otherwise, the condition is false, so only the code inside the second pair of curly braces after the else keyword will run.

In the example above the condition "myName".length >= 7 evaluates to false since "myName" only has 6 letters. Since the condition is false, only the code inside the curly braces after the else keyword runs, and prints out You have a short name!.

In line 1, fill in a condition that will evaluate to false
Fill in some code to run in the else portion (this will run if the condition is false). Use console.log for this part.

if ("myName".length >= 7)
{
    console.log("Let's go down the first road!");
}
else
{
  console.log("You have a short name!");

}

You have a short name!



More practice with conditionals
Now lets practice using if/else statements. Do as much as you can by yourself, but if you need a reminder, click the "Stuck? Get a hint!" button below.

Instructions
Write an if/else statement, just like we did in the last exercise. Heres what the outline of the code looked like:

if (condition)
{
    // if condition is true
    // do this code
}
else // "otherwise"
{
    // do this code instead
}
If your condition is true, use console.log to print "The condition is true".

Otherwise (else) when it is false, use console.log to print "The condition is false".

Make sure your condition evaluates to false, so that your program prints out "The condition is false".

// Remember, the order and punctuation matter.
// If you get an error, check carefully, line by line.
// If you're really stuck, click "Stuck? Get a hint!"

if (5>7)
{
  console.log("The condition is true")
}
else
{
    console.log("The condition is false")
}



Computers arent that smart
Well done! Now, computers are very literal. Syntax needs to be in exactly the right place for the computer to understand the code.

As you get started with programming, we will teach you many syntax rules. This is sort of like the grammar of programming languages. Grammar first, then programming poetry!

Instructions
There are many mistakes in this code. Find them and fix them all.

You are doing whats called "debugging," a term popularized by Grace Hopper when she literally removed a moth from her computer.

// The computer doesn't worry about extra spaces between words or brackets
// It just cares about the order of where things are placed
// and that you have used the right characters (){}[]"";

// For extra help, a program called a 'linter' is checking your code
// and will put a red 'x' next to the first line that contains errors

if (10===10)
{
    console.log("You got a true!");
}
else
{
    console.log("You got a false!");
}


Mid-lesson breather

We've covered a lot of ground so far! So many new terms, so much syntax. Let's take a breather and review. We have learned:

1. Confirm and prompt

We can make pop-up boxes appear!
confirm("I am ok");
prompt("Are you ok?");

2. Data types

a. numbers (e.g. 4.3, 134)

b. strings (e.g. "dogs go woof!", "JavaScript expert")

c. booleans (e.g. false, 5 > 4)

3. Conditionals

If the first condition is met, execute the first code block. If it is not met, execute the code in the else block. See the code on the right for another example.

// This is an example of an if / else statement.

if (12 / 4 === "Ari".length) {
    confirm("Will this run the first block?");
} else {
    confirm("Or the second block?");
}

Math
We saw basic math before. The basic math symbols we learned in school work here. Even the order in which the computer understands the math is the same as in school!

Code:

( ): control order of operations
* and /: multiplication and division
- and +: subtraction and addition
Examples:

100/10 evaluates to 10
"Jane".length + 5 evaluates to 9
5*(3+1) evaluates to 20
Instructions
Complete the missing bits of code to construct the if / else statement. Make the condition evaluate to true.
Finish the else statement by printing out the string "Error Error Error" to the console.

if ("Jon".length * 2 / (2+1) === 2)
{
   console.log("The answer makes sense!");
}
else
{
   console.log("Error Error Error");
}

The answer makes sense!

Math and the modulo
Lets meet an interesting symbol called modulo. When % is placed between two numbers, the computer will divide the first number by the second, and then return the remainder of that division.

So if we do 23 % 10, we divide 23 by 10 which equals 2 with 3 left over. So 23 % 10 evaluates to 3.

More examples:

17 % 5 evaluates to 2

13 % 7 evaluates to 6

Instructions
Use console.log and modulo three times to print the remainder of the following equations:

a. 14 / 3
b. 99 / 8
c. 11 / 3

// Below is an example of printing the remainder of 18/4 using modulo:
// console.log(18 % 4);

console.log(14 % 3);
console.log(99 % 8);
console.log(11 % 3);

2
3
2



Modulo and if / else
So why learn modulo? For one thing, its good at testing divisibility. Consider 30 % 10. What does it return? There is nothing left over, so 0.

How about 9 % 3? Also 0.

We can use modulos in comparisons, like this:

10 % 2 === 0 evaluates to true
7 % 3 === 0 evaluates to false because there is 1 left over.
Instructions
Lets get the if/else" statement to display The first number is even"

Edit line 5 by adding a comparison that evaluates to true.
In the comparison, use a modulo and an even number, like we did in the example above.

//An example of an if/else statement with modulo in the condition



if( 10 % 2 === 0 ) {
    console.log("The first number is even");
} else {
    console.log("The first number is odd");
}

The first number is even




Substrings
Weve learned a few ways to manipulate numbers. What about manipulating strings?

Sometimes you dont want to display the entire string, just a part of it. For example, in your Gmail inbox, you can set it to display the first 50 or so characters of each message so you can preview them. This preview is a substring of the original string (the entire message).

Code:

"some word".substring(x, y) where x is where you start chopping and y is where you finish chopping the original string.

The number part is a little strange. To select for the "he" in "hello", you would write this:

"hello". substring(0, 2);
Each character in a string is numbered starting from 0, like this:

0 1 2 3 4
 | | | | |
 h e l l o
The letter h is in position 0, the letter e is in position 1, and so on.

Therefore if you start at position 0, and slice right up till position 2, you are left with just he

More examples:

First 3 letters of "Batman" "Batman".substring(0,3);
From 4th to 6th letter of "laptop" "laptop".substring(3,6);

// Be careful with the substring's letter positions!

"wonderful day".substring(3, 7);

"derf"

// Use console.log( ) to print out the substrings.
// Here is an example of the 1st to 4th letter of "JavaScript":
// console.log("JavaScript".substring(0,4));

console.log("January".substring(0,3));
console.log("Melbourne is great".substring(0,12));
console.log("Hamburgers".substring(3,10));

Jan
Melbourne is
burgers

Variables
We have learned how to do a few things now: make strings, find the length of strings, find what character is in the nth position, do basic math. Not bad for a days work!

To do more complex coding, we need a way to save the values from our coding. We do this by defining a variable with a specific, case-sensitive name. Once you create (or declare) a variable as having a particular name, you can then call up that value by typing the variable name.

Code:

var varName = data;

Example:

a. var myName = "Leng";
b. var myAge = 30;
c. var isOdd = true;

Instructions
Create a variable called myAge and type in your age.

// To create a variable, we use only one equals sign
// But to check if two values are equal, we use 3 equal signs.

// declare your variable here:

var myAge = 42
console.log(myAge);

More Variable Practice
We have seen how to create a variable. But how do we use it? It is useful to think that any time you type the variables name, you are asking the computer to swap out the variable name and swap in the value of the variable.

For example:

var myName = "Steve Jobs";

myName.substring(0,5)

Look at the second line above. You have asked the computer to swap out myName and swap in Steve Jobs, so

myName.substring(0,5)

becomes

"Steve Jobs".substring(0,5)

which evaluates to Steve.

Another example

var myAge = 120;

What is

myAge % 12 ? See the hint to check your answer.

So the variable stores the value of the variable, whether that is a number or a string. As you will see soon, this makes writing long programs much easier!

Instructions
Follow the instructions in the comments in the code to continue.

// Declare a variable on line 3 called
// myCountry and give it a string value.
var myCountry = "tis of thee"

// Use console.log to print out the length of the variable myCountry.
console.log(myCountry.length);

// Use console.log to print out the first three letters of myCountry.
console.log( myCountry.substring(0,4));

11
tis





Change variable values

So far, weve seen
a. how to create a variable
b. how to use a variable

Let's now see how to change a variable's value. A variables value is easily changed. Just pretend you are creating a new variable while using the same name of the existing variable!

Example:

var myAge = "Thirty";
Say I had a birthday and I want to change my age.
myAge = "Thirty-one";

Now the value of myAge is "Thirty-one"!

Instructions
Follow the instructions on line 1, line 3, line 5 and line 8. Were using this method to show you the order in which you tell the computer what to do is very important.

// On line 2, declare a variable myName and give it your name.
var myName = "Sandra"
// On line 4, use console.log to print out the myName variable.
console.log(myName)
// On line 7, change the value of myName to be just the first 2
// letters of your name.
myName = "Sa"
// On line 9, use console.log to print out the myName variable.
console.log(myName)




Conclusion: Part 1
Lets do a quick review!

Data types

strings (e.g. "dogs go woof!")
numbers (e.g. 4, 10)
booleans (e.g. false, 5 > 4)
Variables
We store data values in variables. We can bring back the values of these variables by typing the variable name.

Manipulating numbers & strings

comparisons (e.g. >, <=)
modulo (e.g. %)
string length (e.g. "Emily".length;)
substrings (e.g. "hi".substring(0, 1);)
console.log( )
Prints into the console whatever we put in the parentheses.

Instructions
On line 1, create a variable myColor and give it a string value.
On line 2, print the length of myColor to the console.

myColor = "Red"
console.log(myColor.length)



Conclusion: Part 2
Congratulations on making it this far. You have learned a lot! Just one more exercise before a big pat on the back!

The last tricky thing we learned was about if / else statements.

If / else statements are conditional statements. Under different conditions, the computer will output different things.

Instructions
Write your own if / else statement.
The only instruction is that the result of evaluating the statement is a log to the console of "I finished my first course!".
