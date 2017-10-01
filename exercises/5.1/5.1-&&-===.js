
// //From in class videos 5.2: Comparator Operators

// Simple Comparisons, Arithmetic Operators, Logical Operators,

// Simple Comparisons. Equality

//Strict equality ===
1 === 1; //reads true
1==='1'; //reads false

//equality ==
1==1; //reads true
//and
1=='1'; //1 and '1' are roughly equal but not exactly, reads true

//strict inequality
1!===2;

//inequality
1!=2;

1>2; //false
1<=2; //true.   is  1 less than OR equal to 2


//Arithmatic Operators

2 + 5; //7

5 - 9; //-4

3*5; //15

36/5; //7.2

//Mudulus (%) operador can be used to tell you weather a variable
// is even or odd


20 % 2; //0  The Mudulus operator divides the first number by the second,
//but only tells you the remainder.

19 % 2; //1

//incrimenting and decrimenting operators

var counter = 0;
undefined
counter = counter +  1;
1
counter
1
counter += 1; //this is the same as writing counter = counter +  1;
2
counter ++; //this is the same BUT ONLY adds one each time, can't do more than
//one at a time
2
counter += 5;//counter is counter plus 5
8
counter += -4;//counter is counter plus -4
4

//decrimenting operators

counter -= 1;
3

counter--; //this operator is decrimenting by one just the same as the previous
//, BUT doesn't show it directly in the results, until you ask again
3
counter; //asked again, it is revealed that our decrimenting operator did work
2



//Cancatonators. they work like arithmatic operators,  you can use the plus sign
//pay attention to the spaces in your quotes

"cat" + "dog";
"catdog"

" cat " + " dog ";
" cat  dog "

"cat" + "and" + "dog";
"catanddog"

"cat " + " and " + " dog";
"cat  and  dog"


//LOGICAL OPERATORS &&(and) ||(or)

var animal1 = 'monkey';
undefined
var animal2 = 'bear';
undefined
var animal3 = 'tiger';
undefined

animal1 === 'monkey' && animal2 === 'bear'//when using &&, ALL conditions must be met
true

animal1 ==='ape' && animal2 === 'bear'
false

animal1 === 'monkey' || animal2 === 'giraffe';//when using ||(0r) not ALL conditions must be met.
true

//REGARDING OPERATOR PRECEDENCE
animal1 === 'ape' || animal2 === 'bear' && animal3 === 'tiger'; //Javascript evaluates the && before the ||, so this statement is true because FIRSTLY animal2 is a bear AND animal3 is a tiger. Then, OR is animal1 a ape .
true

//If you want something to be evaluated first, put parentheses around it
(animal1 === 'Juzo' || animal2 === 'BB') && animal3 === 'tiger';
false


Use the logical knot to inverse things

animal1 === 'monkey' && animal2 === 'bear';
true

!(animal1 === 'monkey' && animal2 === 'bear')//by putting an exclamation point and parenthesese around this equation, this is asking: "is this NOT true?" This is asking the same thing as the above line, but inversely
false
