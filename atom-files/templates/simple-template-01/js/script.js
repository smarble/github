// simplest web page template 01 js
// Chapter 1: Coding a serious javascript application: 99 bottles of beer on the wall.

// Shows in the console if this javascript source is loaded/connected
console.log("javascript loaded successfully")

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
