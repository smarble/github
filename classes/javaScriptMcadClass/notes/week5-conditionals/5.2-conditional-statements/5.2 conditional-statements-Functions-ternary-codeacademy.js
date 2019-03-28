//
// Use Codeacademy.com JavaScript: Conditionals in JavaScript (Sections 8 - 29)
https://www.codecademy.com/courses/conditionals-in-javascript/1/1

ANSWERS: https://www.codecademy.com/forums/conditionals-in-javascript/5/exercises/4


More on the "if" statement
Weve been using the if statement a lot in the past few weeks. They are so important that we want to take a step back and explain in more depth how and why if statements work.

If statements are used to check conditions. If such conditions hold, then the subsequent code will be executed.

Instructions
To get warmed up:

A variable yourName has been created on line 1. It is an empty string. Empty strings are defined in the hint.

On line 2, declare a variable called answer. It should also be an empty string.

In the parentheses, create an if condition such that the yourName variable has zero characters.

Run the code. What happens? Because yourName has zero characters, the subsequent code is executed. It assigns the string "What is your name?" to the answer variable.

?
Hint
Get live, fast support from Codecademy Advisors when you get stuck.
Learn more.
Remember that to check the length of a string add .length after to the variable. For example yourName.length. For more on this, click here.

An empty string just means the variable is of string type (ie. words) but currently has nothing in it.



answer

var yourName = "";
var answer = "";
if (yourName.length ===0) {
  answer = "What is your name?"
};

console reads

"What is your name?"



------------------------------------------------------
9

Matching a condition or doing something else
But just having an if statement by itself is not very helpful. We often have two scenarios that we want to consider. In this case, we need to use both an if statement and an else statement.

How does it work? First, we check for a condition (follows the word if). If that condition is not met, we then provide a default response after the else statement. All scenarios that do not satisfy the if condition will be given the default response.

Instructions
In this exercise, we want to create two possible values for result, depending on the length of yourName.

(1) On line 2, declare a variable result and make it an empty string.

(2) Fill in the if condition. If the length of yourName is greater than 0, we want result to say "Hi" to you.

(3) Otherwise (ie. yourName has a length NOT greater than 0), the result variable should be assigned the string "What is your name?".

If yourName is an empty string, what do you think will show up? What if yourName is "Nick"?

?
Hint
Get live, fast support from Codecademy Advisors when you get stuck.
Learn more.
You can check that a number is greater than another number by using the > symbol.

Many online forms use if / else statements. Eg. If you answer yes to question 1, skip to question 5. Else, go to question 2.


answer


var yourName = "Nick";
var result = "";
// use the > symbol to check the length of yourName
if (yourName.length >0) {
   result = "Hi "+ yourName;
} else {
    result = "What is your name?";

};



console reads:


"Hi Nick"


-----------------------------------------------------
10

Testing one or more conditions
Nice job!

Now we want to revise the else if statement. This was used in FizzBuzz and we want to solidify your understanding of it! Else if lets us check for more than two conditions.

In this example, were changing result based on the gender variable. There are three possible values for gender: "male", "female", and everything else. By everything else, we mean any string that is NOT "male" or "female". If you assigned "blue" for gender, that would come under everything else.

Instructions
Assign string values to yourName and gender.

Write if (line 5) and else if (line 7) conditions using the gender variable. Look at the code on line 6 and line 8 to help you figure out what the conditions should be!

Try assigning different values to yourName and gender and see what happens.

?
Hint
Get live, fast support from Codecademy Advisors when you get stuck.
Learn more.
Look at the result variable to see what gender you should be checking for in the if / else statements. Line 6 says the result is "His name is..." so that helps us know what the if condition should be!

We have three distinct categories of gender: "male", "female" and everything else. We use one condition to check for male, one to check for female, and everything else is the default case.

Dont forget to put " " around strings!



answer


var yourName = "Sandra";
var gender = "female";
var result;

if (gender==='male') {
  result = "His name is "+yourName;
} else if (gender==='female') {
  result = "Her name is "+yourName;
} else {
  result = "Hi "+yourName;
}



console reads:



"Her name is Sandra"



----------------------------------------------------------------------
11

Checking a condition for at least one result
Sometimes youll need to check if one or another condition matches. For this we can use the or operator. This is written by using || between two (or more) conditions.

For example:
variable1 === 1 || variable1 === 2

This says: variable1 equals 1 OR variable1 equals 2.

Instructions
Assign strings to yourName and gender.

Create an if condition that checks whether the value of the gender variable is either "male" or "female".

Try assigning different values to gender and see what happens.

?
Hint
Press shift + \ to get the symbol for |. We need two ||.

When we use ||, it reads as or. So if the first condition is true, OR if the second condition is true, the code will be executed. Note, if both the first and second conditions are true, the code will also executed.




answer


var yourName = "Sandra" ;
var gender = "female";

// don't forget to use the || operator
if (gender = "male" || "female") {
  result = true;
} else {
  result = false;
}



console reads:



You did it! One or more conditions matched
true



------------------------------------------------------------
12


Checking for two conditions
We've just learned about the || (or) operator. Now let's learn about another really important operator.

The && operator means and. This operator checks if one condition AND another condition meet requirements.

For example: var1 === 1 && var2 === 2 reads as: var1 equals 1 AND var2 equals 2.

We want to check whether the yourName variable has a length greater than 0 AND whether the gender variable has a length greater than 0.

Instructions
Assign values to yourName and gender.

Use the && operator to make an if statement checking that the length of yourName and gender are both greater than 0.

?
Hint
Remember to use .length and the > operator to check the number of characters.

The && must go between the two conditions you are checking for. The two conditions are:

(a) length of yourName is greater than 0

(b) length of gender is greater than 0

Note: Our if statement is only checking that you have assigned some string to yourName and gender. It does not check what you have typed. If you assign "blue" to gender, result will still return "Thanks".

It is always good to test your code for various scenarios. See what happens if you enter empty strings for yourName or gender.



answer



var yourName = "Sandra";
var gender = "female" ;
var result;

if (yourName.length > 0 && gender.length > 0) {
  result = "Thanks";
} else {
  result = "Please make sure both yourName and gender are filled in.";
}



console reads:



"Thanks"



---------------------------------------------------------
13.


Nesting conditional statements
Great job! Youre now able to check for two conditions at the same time using &&. What if, after we have confirmed that both gender AND yourName are not zero length, we want to check for another condition?

We do this by nesting an if else statement. See the comment on line 5 to see where the nested conditional fits into the code.

See the hint for further explanation on how nested if else statements allow us to check for various scenarios.

Instructions
In line 10, check whether the length of yourName and gender are both greater than 0.

If this is true, then we will use the nested if statement. Here, we want to check if gender equals "male" OR "female".

Assign any value to yourName and gender.

?
Hint
In this example, we have 3 different scenarios. Each scenario leads to a different result value.

(a) If the length of yourName and gender are both greater than 0, and if gender equals "male" OR "female", result equals "Thanks".

(b) If the length of yourName and gender are both greater than 0, but gender equals neither "male" or "female", result equals "please enter male or female for gender".

(c) If the length of yourName and gender are not both greater than 0, result is "Please tell us your name and gender." This is the default case.

This code is powerful because you can test many combinations of yourName and gender and it will give you an appropriate result.



answer



var yourName = "Sandra";
var gender = "female";
var result;

//Line 10 starts an if statement
//Nested in this if statement is an if else statement on lines 11 - 15
//This nested if else statement allows us to check another condition
//We close the first if statement at the start of line 16

if (yourName.length > 0 && gender.length > 0) {
  if (gender === "male" || "female") {
	result = "Thanks";
  } else {
	result = "Please enter male or female for gender.";
  }
} else {
  result = "Please tell us both your name and gender.";
}



console result:

"Thanks"


----------------------------------------------------------




Function
Great job! Functions in JavaScript are defined using the function keyword, followed by:

A pair of parentheses ( ). Lesson 2.5 will teach us what goes inside.
A pair of curly braces with the function code inside { }.
A semicolon ; at the end of each line of code inside the function. And another semicolon after we close the curly bracket.
The above are strict rules for defining a function. Also, the computer doesn't tolerate any typos. It is very strict!

Alice tried to define a function named hi to print to the console hi at any time. But something went wrong.

Instructions
Help Alice figure out what is wrong with her function. Does it have all three requirements of a function? Are there any typos? Fix the code and then run it!

?
Hint
Try writing out what the function should look like, and then compare what you have with Alice's code.




answer:



var hi = function () {
  console.log("hi");
};

hi();



console reads:



hi



----------------------------------------------------

How to call a function


functionname ();





---------------------------------------------------------

14

Using if else statements in functions
You learned about using functions in Functions in JavaScript. A common use of functions is to check if certain conditions in your code are true or false.

Were now going to see how we can combine functions with nested if else statements! The only new code here is line 1!

(1) Line 1 defines the function. It has two parameters, yourName and gender.

(2) Line 4 creates the first condition. It checks that the length of the two parameters are both greater than 0.

(3) Lines 5 to 9 are the nested if else statement, checking gender.

(4) Lines 10 - 13 define the default case. If the first condition is NOT true, we will revert to the default case.

Instructions
Call the function, passing in whatever arguments you want (as long as they are "strings").

?
Hint
Get live, fast support from Codecademy Advisors when you get stuck.
Learn more.
The function is very handy because it allows us to check whether many values of yourName and gender meet our conditions.

We can see that this function deals with three cases:

(a) If the length of gender and yourName are both greater than 0, AND gender is either male or female, true is returned.

(b) If the length of gender and yourName are both greater than 0, BUT gender is neither male or female, false is returned.

(c) If the length of gender and yourName are NOT both greater than 0, false is returned.



answer




var checkNameGender = function (yourName,gender) {
//All the code below was used in exercise 1.6

    if (gender.length > 0 && yourName.length > 0) {
      if (gender === 'male' || gender === 'female') {
            return true;
      } else {
            return 'strange answer';
      }
    }


    else {
      return false;
    }
};

checkNameGender("Jim", "nongender");



console reads:

"strange answer"



-------------------------------------------------------------

15.

Using if else statements within functions
We've just seen how if else statements can work in functions. It's your turn to do some coding!

Instructions
Define a function called canIDrive. It has one parameter myAge.

If the myAge parameter is greater than or equal to legalDrivingAge, return true. Else return false. This also goes in the function body.
Don't forget to close the function's curly brackets!

Call the function passing your age as the argument. It should return true if you are old enough to drive!

?
Hint
Remember greater than or equal to is written like this >=

Is it ok to use functions when assigning a variable's value? Yes! Here, we call the function and pass through an argument. That means the variable will be assigned the function, which in turn returns a value.

Why did we bother defining a variable for legalDrivingAge? It wasn't efficient to use it here, but we wanted to show you that you can use variables in the if conditions too. So instead of having if(myAge >= 18), it is also ok to have if(myAge >= legalDrivingAge).



Answer:

var legalDrivingAge = 18;
var canIDrive = function (){
  // write if else statement here. Return true or false
    if (myAge>= legalDrivingAge){
    return true
    }
    else {
        return false;
    }
};

var myAge = 42;
canIDrive ();





console reads:
false






------------------------------------------------------------


16.
Functions in if else statements
We have previously used if else statements in functions. Now we want to see how we can use functions in if else statements.

The key is that the function can have two return values - true and false. So in the if else statement using the function, if the function is true, the code will execute. If false, the default will result.

Instructions
Create a function called canIDrive with two parameters, myAge and legalDrivingAge. In the body of the function, write an if else statement that returns true if myAge is greater than or equal to legalDrivingAge. Return false otherwise.

Declare a variable called legalDrivingAge under the myAge variable declaration. Assign it a value of 18.

Write an if else statement. The condition within the parentheses will just be the function with its parameters (not any specific arguments). The code to execute for both the if and else cases are given to you!

?
Hint
When using the function and parameters into the if condition, don't forget you'll need an extra closing parentheses at the end!



ANSWER



// Define the function under this line
var canIDrive = function (myAge, legalDrivingAge){
    if(myAge >= legalDrivingAge){
    return true;
    }
    else {
        return false;
    }
};


// Declare legalDrivingAge under myAge
 var myAge= prompt("How old are you?");
var legalDrivingAge = 18;

//Create an if else statement using the function as a condition
if (canIDrive(myAge,legalDrivingAge)===true) {
  console.log("You can legally drive!");
}
else {
  console.log("You'll have to wait a few more years!");
}

canIDrive(myAge,legalDrivingAge);





console reads:
You can legally drive!
true



-----------------------------------------------------------------

17.



ANSWER
var jacketColor = "red";
var result;

switch (jacketColor) {

  case "black":
    result = "Pay $300";
    break;

  case "brown":
    result = "Pay $200";
    break;

  case "green":
    result = "Pay $5";
    break;

  default:
    result = "This color does not match my eyes!";
}

console reads:

"This color does not match my eyes!"


-----------------------------------------------------------------

PG 18.
4.1 Background to switch statements


ANSWER

var myCar = "Toyota";
var result;

switch (myCar) {

  case "Ford":
    result = "American brand";
  break;

   case "Toyota":
    result = "Japanese brand";
  break;

  default:
    result = "I'm not sure what country that car is from";
  break;
}

CONSOLE READS

"Japanese brand"




-----------------------------------------------------------------

PG 19.
4.3 Write your own switch statement



ANSWER

var born = prompt("What country were you born in?")
var result;

switch (born) {

    case "USA":
        result = "Born in the USA"
    break;

    default:
        result = "Born outside the USA"
    break;
}


CONSOLE READS

"Born in the USA"



-----------------------------------------------------------------

PG 20.
4.4 Switch it up


ANSWER

var born = prompt("What country were you born in?");
var result;

// write the whole switch statement
switch (born) {

    case "USA":
        result = 1
    break;

    case "England":
        result = 2
    break;


    default:
        result = 3
    break;
}

CONSOLE READS

3


-----------------------------------------------------------------

PG 21.
5.1 Introducing the shortcut:
about: Ternary Operators


ANSWER

var x = 56
var y = 1

if (x > y) {
  result = "good job";
}
else {
  result = 20;
}

//Below is the above code written using the ternary operator
result = x > y ? "good job" : 20;

CONSOLE READS
"good job"

-----------------------------------------------------------------

PG 22.
5.2 Practice
about: Ternary Operators

ANSWER

var myAge = prompt ("What is your age?")

// a simple if else statement
// if (myAge >= 18) {
//  answer = "adult";
// }
// else {
//  answer = "non-adult" ;
// }

// rewrite the code above using a ternary operator
answer = myAge >= 18 ? "adult" : "non-adult";


CONSOLE READS

"adult"


-----------------------------------------------------------------

PG 23.
5.3 More practice!
about: Ternary Operators


ANSWER

var name = prompt ("What is your name?");
//Original if else statement
if (name === "Nick") {
  truth = true;
} else {
  truth = false;
}
//Rewrite the above code using the ternary operator
answer = name === "Nick"? true : false;



CONSOLE READS

false

-----------------------------------------------------------------

PG 24.
5.4 Setting values using a ternary operator
about: Ternary Operators

ANSWER

food = prompt ("What do you want to eat?")


// if (food === "taco") {
//   foodType = "Mexican";
// } else {
//   foodType = "other";
// }

//Re-write the above code using a ternary operator
answer = food === "taco"? Mexican : "other";

CONSOLE READS

"other"


-----------------------------------------------------------------

PG 25.
6.1 Conditionals
about: Ternary Operators


ANSWER

var gender = " ";

if (gender === "crab") {
  result = true;
}
else {
  result = false;
}

CONSOLE READS

false


-----------------------------------------------------------------

PG 26.
6.2 Nested Conditionals Part 1
about: Ternary Operators


ANSWER

CONSOLE READS


-----------------------------------------------------------------

PG 26.
6.2 Nested Conditionals Part 1
about: Ternary Operators


ANSWER

var cost = 10;
var employed = "NOPE";
var result;

if (cost > 100) {
  if (employed === "yes") {
  result = "buy";
  } else {
  result = "can't afford";
  }
}
else {
  result = "reject cheap product";
}

CONSOLE READS

"reject cheap product"

-----------------------------------------------------------------

PG 27.
6.3 Nested Conditionals: Part 2
about: Ternary Operators


ANSWER

var topThree = false;
var winner = "Me";
var result;

if (topThree === false) {
  result = "Sorry, empty handed";
}
else {
  if (winner === true) {
    result = "Gold!!!";
  } else {
    result = "Not bad! Got a medal!";
  }
}

CONSOLE READS

"sorry, empty handed"


-----------------------------------------------------------------

PG 28.
6.4 Switch Statements
about: Ternary Operators


ANSWER

var jacketColor = "";
var result;

switch (jacketColor) {

  case "black":
    result = "Pay $300";
    break;

  case "brown":
    result = "Pay $200";
    break;

  case "green":
    result = "Pay $5";
    break;

  default:
    result = "This color does not match my eyes!";
}

CONSOLE READS

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

NOTES about using var  before result

You are correct that the code works either way. In fact, in Javascript you don't need to declare a variable using 'var' in all cases. As long as you are not writing a function then it will work fine. Your computer will automatically create your variable and give it the value you put in your code.

But if you are writing a function things will be different. Remember back in the "Functions in Javascript" lesson we learnt that variables could be 'local' and only used in the function itself or 'global' and used anywhere? If you use 'var' in a function, the variable will be 'local' and only available in the function. If you don't the variable will be automatically created 'global' and available outside the function.

So if you wrote a function and typed 'var result = 20' then the variable 'result' wouldn't be available outside the function. If you typed 'result = 20' then the variable 'result' would be available outside the function. That could make a big difference to your program.

It can get pretty confusing, so it is best to always use var. But just make sure you declare the variable in the correct place: inside the function if you want to only use it there, or outside a function if you want it available anywhere in your program. This will minimise the chances of you making a mistake and wasting a lot of time trying to work out what you did wrong!
