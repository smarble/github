Notes: Contents of this page:

Iteration: Writing Loops

http://www.lynda.com/Developer-Programming-Foundations-tutorials/Introduction-iteration/83603/90458-4.html?org=mcad.edu

For loops: Sequential

http://www.lynda.com/JavaScript-tutorials/loops-Sequential/123563/133798-4.html?org=mcad.edu

For Loops: Enumerative

http://www.lynda.com/JavaScript-tutorials/loops-Enumerative/123563/133799-4.html?org=mcad.edu

------------------------------------------------------------------------------

Iteration: Writing Loops

http://www.lynda.com/Developer-Programming-Foundations-tutorials/Introduction-iteration/83603/90458-4.html?org=mcad.edu

Take an if statement and replace the if with while.
var a = 1
while (a<10) {
  alert(a);
}

The above is an infinite loop as it is written. As long as a=1, what is in the body (alert) will repeat indefinitely.
Lets add something to stop that. We added alert++, wich means add 'a's value to the value of a (now it is 2).
When the value of a gets to be above 10, the loop will stop because of our 'while' condition.

var a = 1
while (a<10) {
  alert(a);
  alert++;
}

------------------------------------------------------------------------------

For loops: Sequential

http://www.lynda.com/JavaScript-tutorials/loops-Sequential/123563/133798-4.html?org=mcad.edu

Telling the machine to do something over and over, as many times as you specifically tell it.
We want the loop below to run 10 times. We are starting at 0 by setting the var i to zero.
Typically "for loops" use i as their variable, it is called i for index.

Three things are in the parentheses: initialization, ending condition (which will make the
loop stop), for each loop we are adding one to the value of i. For each loop we are going
to "incrament the variable", we will incrament i by one, by using i+=1. So for each loop i will
increase in value by 1.

consile.log (i); means that each time we loop, we are writing the value of i to the console.

for (var i = 0; i < 10; i+= 1){
  console.log (i);
}


Template example:
for (var i = x; x; x){
   What do you want to happen every time this for loop runs?
}





Very common use case: looping over an array. Here we have an array of page names.
We want to write code that will look through the array of page names we made, to tell us the page we are on.

The three conditions in the parenthesis of for: start at 0 (because the first item in an array is 0), end once we have gone
through the length of pageNames (each page name in the array), incramenting by one each time.

We need to access the "document" variable, part of the DOM (document object model), and use the
property called "title" which is the contents of the title tag of the page.

Then we have the condition (if): we check if the document.title (the title of the page tab we are on)
 === the current pageName (pageNames [i]).In this line we are using i as a key.

 On the previous line, i was set to 0. On the second loop it will be 1,
on the next loop 2. So for the first loop, pageNames [i] will check the 0 item in the array,
for the second loop pageNames [i] will check the 1 item in the array, and so on.

If the document.title matches pageNames [i], console.log will show "We ARE here" plus the page name.


var pageNames = ['Home', 'About Us', 'Contact Us', 'JavaScript Playground', 'News', 'Blog'];

for (i = 0; i <pageNames.length; i += 1) {
  if (document.title === pageNames [i]){
    console.log('We ARE here: ' + pageNames [i]);
  }
  else {
    console.log('We are not here: ' + pageNames [i]);
  }
  }

When we run this for loop, and we are on the "JavaScript Playground" page, we get this:

We are not here: Home
We are not here: About Us
We are not here: Contact Us
We ARE here: JavaScript Playground
We are not here: News
We are not here: Blog
undefined

The loop runs for each loop, checking each item of the array until the entire
pageNames.length has been checked.

One more layer: lets add a variable, for just in this loop, lets use "currentPageTitle", instead of
writing pageNames [i] over and over. It looks like this:

var pageNames = ['Home', 'About Us', 'Contact Us', 'JavaScript Playground', 'News', 'Blog'];

for (i = 0; i <pageNames.length; i += 1) {

  var currentPageTitle = pageNames [i];

  if (document.title === currentPageTitle){
    console.log('We ARE here: ' + currentPageTitle);
  }
  else {
    console.log('We are not here: ' + currentPageTitle);
  }
}

So every time this loops, pageNames [i] gets assigned to currentPageTitle.
------------------------------------------------------------------------------


For Loops: Enumerative

http://www.lynda.com/JavaScript-tutorials/loops-Enumerative/123563/133799-4.html?org=mcad.edu

You can use enumerative loops on arrays or objects.
