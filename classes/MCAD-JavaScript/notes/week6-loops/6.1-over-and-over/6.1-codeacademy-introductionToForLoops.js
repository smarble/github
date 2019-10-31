Notes: Contents of this page:

Exercise 6.1 - Introduction to For Loops in JS
https://www.codecademy.com/courses/javascript-beginner-en-NhsaT/0/1?curriculum_id=506324b3a7dffd00020bf661

Codeacademy

COURSE OUTLINE

Section: For loops: The Basics

1.1: Why use for loops?
1.2: First for loop
1.3: Starting the for loop
1.4: Ending the for loop
1.5: Controlling the for loop
Section: Practicing loops!

2.1: How does it work?
2.2: Practice counting down
2.3: Last practice for loop
Section: Arrays and Loops

3.1: Meet arrays
3.2: Array positions
3.3: Loops and arrays I
3.4: Loops and arrays II
3.5: Conclusion



------------------------------------------------------------------------------
Pg 1
1.1: Why use for loops?


We are learning how to program because we dont want to do boring, repetitive work! The computer should do that.

This first exercise is a good example of exactly why you want to learn for loops.

Instructions
Use five console.log statements to print out the numbers 1 to 5.
Try not getting angry at me for this annoying exercise.
Head over to the next exercise to see how we can use for loops to do this task more efficiently.
?
Hint
Be sure to use a separate console.log statement for each number from 1 to 5!

Remember, console.log() works like this:

console.log(/* thing to print out */);

Answer:
// Write five console.log statements.

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)


------------------------------------------------------------------------------
Pg 2
1.2: First for loop


Instead of manually typing in console.log five times, we can use a for loop to do this. The aim of this exercise is just to show you how a for loop looks, and demonstrate how useful it is. Subsequent exercises will

a. walk you through the syntax bit by bit
b. explain how the computer thinks as it executes a for loop.

We initially focus on using for loops just to count numbers to keep things simple. But by section 3, we will show you how to do more fancy things!

Instructions
The for loop in the code will print out 1 to 5 and use far less code than you used in the previous exercise.
Change the 6 to 11 and press Save & Submit Code. This will see the computer print out 1 to 10!
?
Hint
We want to print out 1 to 10. Why then is 11 in the code? Well, this is because we want the loop to continue to run where counter is less than 11. But once counter is equal to 11, we want it to stop. More on this part of the for loop syntax coming up!

ANSWER

// Example of a for loop:

for (var counter = 1; counter <11; counter++) {
	console.log(counter);
}


CONSOLE READS
1
2
3
4
5
6
7
8
9
10



------------------------------------------------------------------------------
Pg 3
1.3: Starting the for loop

Congratulations! You've just run your first for loop. But what you're probably really keen to do is write your own for loop. Below is the general syntax of the for loop. We want to focus on the first line in the next few exercises.

Syntax

for (var i = 1; i < 11; i = i + 1) {
    /* your code here */;
}
Every for loop makes use of a counting variable. Here, our variable is called i (but it can have any name). The variable has many roles. The first part of the for loop tells the computer to start with a value of 1 for i. It does this by declaring the variable called i and giving it a value of 1.

When the for loop executes the code in the code block—the bit between { }—it does so by starting off where i = 1.

Instructions
This for loop starts off at 1 and will end at 10.
Change the for loop such that it will start off at 5!
?
Hint
Youll want to adjust the var i = 1; on line 3.

ANSWER

// Change where the for loop starts.

for (var i = 5; i < 11; i = i + 1){
	console.log(i);
}

CONSOLE READS

5
6
7
8
9
10





------------------------------------------------------------------------------
PG 4
1.4: Ending the for loop

We know how to control where the for loop starts. How do we control where it ends? Well, the second part of the for loop determines that.

Syntax

    for (var i = 1; i < 11; i = i + 1) {
        code code code;
    }
Here, this for loop will keep running until i = 10 ( i.e. while i < 11). So when i = 2, or i = 9, the for loop will run. But once i is no longer less than 11, the loop will stop.

Instructions
We know this for loop counts from 1 to 10.
Change this for loop such that it starts at 4.
Change this for loop such that it counts up to and including 23. ( i.e. we do NOT want 24 to be printed out!)
Run your for loop and see it count from 4 to 23!
?
Hint
Changing where the for loop starts means replacing the 1 in var i = 1; with the number you want the for loop to start at.

Changing where the for loop ends is slightly more tricky. If you want the for loop to stop printing at 23, then the condition should be i < 24.

ANSWER

// Edit this for loop

for (var i = 4; i < 24; i = i + 1) {
	console.log(i);
}


CONSOLE READS

4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23

------------------------------------------------------------------------------
PG 5
1.5: Controlling the for loop

We can now control where the for loop starts and ends. What about controlling what happens in between?

The examples weve looked at have used i = i + 1. This has meant we have incremented (increased) the variable i by 1 each time.

Rules to learn

a. A more efficient way to code to increment up by 1 is to write i++.
b. We decrement down by 1 by writing i--.
c. We can increment up by any value by writing i += x, where x is how much we want to increment up by. e.g., i += 3 counts up by 3s.
d. We can decrement down by any value by writing i -= x. (See the Hint for more.)
e. Be very careful with your syntax—if you write a loop that can't properly end, it's called an infinite loop. It will crash your browser!

Instructions
This code counts every number from 0 to 35.
Make it start counting from 5. Please!
Stop the counting when it prints out 50.
Only count every fifth number. So we want to increment i by 5.
?
Hint
The changes to be made:

a. Replace 0 with the value you want the for loop to start.
b. Replace 36 with where you want the for loop to end.
c. Currently, the for loop increments up by 1. You want it to increment up by 5!

Note: x += y is the same as x = x + y. And x -= y is the same as x = x - y.

ANSWER

// Edit this for loop!

for (var i = 5; i < 51; i+= 5) {
	console.log(i);
}

CONSOLE READS

5
10
15
20
25
30
35
40
45
50


------------------------------------------------------------------------------
PG 6
Section: Practicing loops!
2.1: How does it work?

We've gone through the three bits of syntax for a for loop. But how exactly does it work? Let's imagine the steps the computer takes to run the for loop on the right.

It starts off with i = 2
It then asks: Is i currently less than 13? Because i = 2, this is true and we continue.
We do NOT increment now. Instead, if the condition is met, we run the code block.
Here, the code block prints out the value of i. It is currently 2 so 2 will be printed out.
Once the code block is finished, the for loop then increments / decrements. Here, we add 1.
Now i = 3. We check if it is less than 13. If it is true, we run the code block.
The code block runs, and then we increment.
We repeat these steps until the condition i < 13 is no longer true.
Instructions
Make the computer start counting at 8.
Keep counting while i < 120.
Count up by increments of 12.
Remember, if you accidentally make a loop that never ends, your browser will crash!

?
Hint
Make sure to use i += 12, and not i + 12. The latter will crash your browser, because i will never be updated and the loop will go on forever!


ANSWER

// Example for loop

for (var i = 8 ; i < 120; i+= 12) {
	console.log(i);
}

CONSOLE READS

8
20
32
44
56
68
80
92
104
116


------------------------------------------------------------------------------
PG 7
2.2: Practice counting down

for loops only run when the condition is true.

Do not run the code without changing it!

It is important that there is a way for the for loop to end. If the for loop is always going to be true, then you will be stuck in an infinite loop and your browser will crash! Look at the code. It is bad.



a. It begins at i = 1.
b. It will keep going as long as i >= 1.
c. Because now i = 1, the code will run.

d. We increment i by 1 and now i = 2. This satisfies the condition. We run the code.
e. Increment i by 1 and now i = 3. This satisfies the condition that i >= 1. We run the code.
f. We will keep incrementing the code up by 1. It will always satisfy the condition. The loop NEVER ends. This will crash your computer!



Instructions
Change this code such that it starts counting from 10.
We want it to stop once it gets to 0.
We want it to count down by 1.
In the end, the numbers 10..0 inclusive, should be printed.

?
Hint
The hard part here is the condition. When we were counting up, the condition was always "keep going as long as i < some number."

Here, we want to count down. So we keep counting down as long as i >= some number. Because we decrement down, i will keep getting smaller until it no longer satisfies the condition.



ANSWERS

// Example of infinite loop. THIS WILL CRASH YOUR
// BROWSER. Don't run the code without changing it!

for (var i = 10; i >= 0; i--) {
	console.log(i);
}



CONSOLE

10
9
8
7
6
5
4
3
2
1
0



------------------------------------------------------------------------------
PG 8
2.3: Last practice for loop

You have a great handle on for loops now! This will be the last practice one before we look at cool ways to use them.

The next exercise introduces you to arrays. So instead of just counting numbers up and down, we can make the computer do many more interesting things with loops.

Instructions
Once more, for practice: write a for loop that gets the computer to count down from 100 until 0 by 5. This time, make sure not to print 0.

?
Hint
Break the for loop down into its three main bits.

a. The iterator i begins at 100.
b. We want the condition to let us print when i is greater than 0.
c. We want to count down by 5. You should use i -= 5.

Remember, the syntax looks like this:

for (start; end; increment) {
    // Do something!
}
Where start is the starting condition (like i = 0), end is the ending condition (like i < 11), and increment is how much i should go up or down by (like i++).


ANSWERS

// Write your very own for loop!

for (var i = 100; i > 0; i-= 5) {
    console.log(i)
}


CONSOLE


100
95
90
85
80
75
70
65
60
55
50
45
40
35
30
25
20
15
10
5


------------------------------------------------------------------------------
PG 9
Section: Arrays and Loops
3.1: Meet arrays

Meet arrays
Variables can store numbers or strings. But so far, weve only been able to store ONE number or ONE string. Good thing we have arrays. Arrays:

a. store lists of data
b. can store different data types at the same time
c. are ordered so the position of each piece of data is fixed

Example:

var names = ["Mao","Gandhi","Mandela"];

var sizes = [4, 6, 3, 2, 1, 9];

var mixed = [34, "candy", "blue", 11];
Syntax:
var arrayName = [data, data, data];

Any time you see data surrounded by [ ], it is an array.

Instructions
Make your own array called junk. Put 4 bits of data in it (first 2 strings, then 2 numbers).

Declare it using var.
Put [ ] around your data.
Separate each bit of data with a comma.
End it with a semi-colon.
Use console.log to print out junk.

ANSWERS

// You are now declaring an array.
// Arrays are an awesome data structure!
var junk = ['string1', 'string2', 1, 2];
console.log(junk)

CONSOLE

[ 'string1', 'string2', 1, 2 ]



------------------------------------------------------------------------------
PG 10
3.2: Array positions

Its nice that we can put a list of data into an array. But now we need to learn how to get access to the data inside the array.

The position of things in arrays is fixed. So we just need to know the array name (here, it is junkData), and the position of the data we want, and were done.

Small complication: the position (or the index) of each bit of data is counted starting from 0, not 1.

First element in the array: junkData[0]
Third element in the array: junkData[2]
Arrays have 0-based indexing, so we start counting the positions from 0.

Instructions
Print out the fourth element of the array.

Start with figuring out how to express what the fourth element in the array is.
Then use console.log() to print things out!
?
Hint
Remember, the syntax is:

arrayName[index]
where index is a number starting at 0.

ANSWER


// Practice array!

var junkData = ["Eddie Murphy", 49, "peanuts", 31];

console.log(junkData[3])


CONSOLE

31





------------------------------------------------------------------------------
PG 11
3.3: Loops and arrays I


Awesome job! Youve now learned about arrays, and how to access one element of the array. But what if there were 100 elements in the array?

For arrays, a useful way to systematically access every element in the array is to use a for loop!

How does it work?

Line 3 declares the array. It has 4 elements.
We then start the for loop on line 5.
We see i starts off at value 0.
The for loop runs as long as i < 4 (because cities.length equals 4.
  The array cities has 4 elements in it; see the Hint for more.)
We will increment i by 1 each time we loop over.
We print out cities[0], which is "Melbourne".
We then start the loop again. Except now i = 1.
It will print out cities[1], which is "Amman".
This continues until i is no longer less than cities.length.


ANSWER


// Let's print out every element of an array using a for loop

var cities = ["Tampa", "Misawa", "Albuquerque", "Grand Rapids"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}


CONSOLE

I would like to visit Tampa
I would like to visit Misawa
I would like to visit Albuquerque
I would like to visit Grand Rapids





------------------------------------------------------------------------------
PG 12
3.4: Loops and arrays II


Its time for you to write your own array and loop over the array. Remember to:

Put commas between each element in the array.
Put semi-colons between each bit of the for loop.
We suggest you use i as the iterator.
Beware of infinite loops!
Enjoy yourself while smashing through this coding!
Instructions
Create an array called names filled with 5 names.
Write a for loop that prints "I know someone called " followed by names[i].
Make sure theres a space between "called" and the name!
Run your code and the five sentences should print out.
Click "Stuck? Get a hint!" for an example of how to write a for loop.

?
Hint
Your code should look something like this:

var names = ["put", "your", "five", "names", "here"];

for (var i = 0; i < someNum; i ++) {
    console.log(something);
}
Where someNum is the length of the names array and something is "I know someone called " + names[i].


ANSWER

// Click on "Stuck? Get a hint!" if you get stuck!

var names = ['Chandra', 'Monique', 'Isabelle', 'Curtis', 'Duane'];

for (var i = 0; i< names.length; i++){
    console.log("I know someone called " + names[i])
}


CONSOLE

I know someone called Chandra
I know someone called Monique
I know someone called Isabelle
I know someone called Curtis
I know someone called Duane


------------------------------------------------------------------------------
PG 13
3.5: Conclusion
