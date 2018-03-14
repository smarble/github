// Headfirst Javascript
// Chapter 1 pg 18: How The While Loop Works

var scoops = 5;

while (scoops > 0) {
console.log(scoops);                                   document.write("Anotherscoop! <br>");                                     scoops = scoops -1;
}
document.write("Life without ice cream isn't the same!");


// Chapter 1: And, when you need to make lots of decisions
// You can make as many else if statements as you like, and finish with an else catch all if you like.


if (scoops >=5) {
  alert ("Eat faster, the ice cream is going to melt!");
}else if (scoops <3){
  alert ("Ice cream is running low!");
} else {
  alert("Still lots of ice cream left, come and get it!");
}


// Chapter 1: And, when you need to make lots of decisions. The code below repeats one line twice (using a while loop), then two more different lines after the loop.

var i = 0;
var name = "Joe";
while (i<2) {
  document.write ("Happy Birthday to you.<br>");
  i = i + 1;
}
 document.write("Happy Birthday dear " + name + ",<br>");
 document.write ("Happy Birthday to you.<br>");

 result:
Happy Birthday to you.
Happy Birthday to you.
Happy Birthday dear Joe,
Happy Birthday to you.


// Chapter 1: Coding a serious javascript application: 99 bottles of beer on the wall.

var word = "bottles";
var count = 99;
while (count>0) {
  console.log(count + " " + word + " of beer on the wall");
  console.log(count + " " + word + " of beer");
  console.log("Take one down, pass it around");
  count = count -1;

  if (count >0){
    console.log(count + " " + word + " of beer on the wall");
  } else {
    console.log("No more " + word + " of beer on the wall");
  }
}
