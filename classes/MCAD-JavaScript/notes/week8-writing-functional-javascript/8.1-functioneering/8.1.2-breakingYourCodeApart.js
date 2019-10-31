Lecture 8.1.2 - Breaking Your Code Apart
Breaking Your Code Apart
http://www.lynda.com/Developer-Programming-Foundations-tutorials/Breaking-your-code-apart/83603/90452-4.html?org=mcad.edu


Lecture 8.1.3 - Creating and Calling Functions
Creating and Calling Functions
http://www.lynda.com/Developer-Programming-Foundations-tutorials/Creating-calling-functions/83603/90453-4.html?org=mcad.edu



Lecture 8.1.4 - Setting Parameters and Arguments
Setting Parameters and Arguments
http://www.lynda.com/Developer-Programming-Foundations-tutorials/Setting-parameters-arguments/83603/90454-4.html?org=mcad.edu


Lecture 8.1.5 - Understanding Variable Scope
Understanding Variable Scope (Video Link)
http://www.lynda.com/Developer-Programming-Foundations-tutorials/Understanding-variable-scope/83603/90455-4.html?org=mcad.edu



Lecture 8.1.6 - Splitting code into Different Files
Splitting code into Different Files
http://www.lynda.com/Developer-Programming-Foundations-tutorials/Splitting-code-different-files/83603/90456-4.html?org=mcad.edu


-----------------------------------------------------------------------------

Lecture 8.1.2 - Breaking Your Code Apart
Breaking Your Code Apart
http://www.lynda.com/Developer-Programming-Foundations-tutorials/Breaking-your-code-apart/83603/90452-4.html?org=mcad.edu

 Have your functions use a verb+noun pattern:

calculateArea
createMessage
animateImage

This is a function template

function myFunction (){
  alert("this code is inside the function");
  // loops, if sttements, anything!
  // etc...
}

A function will not run unless you call it.
How to call this function:

myFunction();

You can call a function multiple times:

myFunction();
myFunction();
myFunction();

It is best practice to define your functions before you call them.


-----------------------------------------------------------------------------
Lecture 8.1.3 - Creating and Calling Functions
Creating and Calling Functions
http://www.lynda.com/Developer-Programming-Foundations-tutorials/Creating-calling-functions/83603/90453-4.html?org=mcad.edu


A function will not run unless you call it.

You can even have a function call itself. This is called recursion.




-----------------------------------------------------------------------------
Lecture 8.1.4 - Setting Parameters and Arguments
Setting Parameters and Arguments
http://www.lynda.com/Developer-Programming-Foundations-tutorials/Setting-parameters-arguments/83603/90454-4.html?org=mcad.edu


function addTwoNumbers (){
    var a = 5;
    var b = 10;
    var result = a + b;
    alert(result)
}

addTwoNumbers();


Lets talk about the parenthesis after the function name. This is how you pass
data through the function.


This is the same result as the function above. a and b are being called in the function
parenthesis, and later defined in the call parenthesis.

function addTwoNumbers (a,b){
    var result = a + b;
    alert(result)
}

addTwoNumbers(5,10);

5 will be passed as value a, and 10 will be passed as value b

we can call the same function over and over, but using different numbers:

myFunction(5,10);
myFunction(500,1000);
myFunction(7,3);
myFunction(8,-8);
myFunction(-5,10);

if we run this we get 5 alert boxes with 5 different results

a and b are PARAMETERS when we define them in the first line of our function.
a and b are ARGUMENTS when we call them later.


We can also pass data OUT of a function via the parenthesis:
in this case we will use return result:

function addTwoNumbers (a,b){
    var result = a + b;
    return result;
}

addTwoNumbers(5,10);



Return result should be the last thing in your function because it will jump
you OUT of the function.

So in this example, we have added return result, but will see no difference yet.
We need to still do something with the result:

function addTwoNumbers (a,b){
    var result = a + b;
    return result;
    // will jump you out of the function
}

var x = addTwoNumbers(5,10);

Now we have created a variable "x" with the results.

alert(x);

Now we have an alert box that displays our result.



-----------------------------------------------------------------------------
Lecture 8.1.5 - Understanding Variable Scope
Understanding Variable Scope (Video Link)
http://www.lynda.com/Developer-Programming-Foundations-tutorials/Understanding-variable-scope/83603/90455-4.html?org=mcad.edu


variable scope: if you create a var inside a function, it is only available
within that function.

variables declared within the function are LOCAL FUNCTIONS.

If you want a variable to exist outside of a function, you could return a value
usin the "RETURN" keyword (see last video).

OR you can declare the variable outside/before the function. This is called a
GLOBAL VARIABLE.

Example:

var x;
function simpleFunction(){
  x = 500;
  alert(x);
}

simpleFunction();
alert(x);


Now var x is declared as a global variable, and later (inside the function) given
a value.

We only worry about scope when it comes to FUNCTIONS, not loops, or/if statements, etc...





-----------------------------------------------------------------------------
Lecture 8.1.6 - Splitting code into Different Files
Splitting code into Different Files
http://www.lynda.com/Developer-Programming-Foundations-tutorials/Splitting-code-different-files/83603/90456-4.html?org=mcad.edu

You can add multiple js files to your html. In this case just list them one
after the other. BUT THE ORDER MATTERS!!! Be careful about dependencies.
run your functions before your script so that information is loaded first, so that
it is on hand later.


<script src ="morefunctions.js"></script>
<script src ="functions.js"></script>
<script src ="morefunctions.js"></script>
<script src ="script.js"></script>
