// console.log("javascript loaded successfully");
//
// var firstName = "Sandra";
// var howManyCatsIHave = 1;
// var isHappy = true;
//
//
// console.log(firstName);
// console.log(howManyCatsIHave);
// console.log(isHappy);
//
// ============================================slide 50
//
// var x = 1;
// var y = 2;
// var i = 3;
// var z = (x + y) * i;
// i++;
// var w = i;
//
// console.log(z);
//
// console.log(i);
//
//
// ============================================slide 53
//
// var firstName = "Amy";
// var lastName = "Gebhardt";
//
// var fullName = firstName + " " + lastName;
//
// console.log(fullName); // logs "Amy Gebhardt"
//
// ============================================slide 55
//
// var first = "Sandra";
// var middle = "Marie";
// var last = "Marble";
//
// console.log(first); // logs "Sandra"
//
// first += " ";
// first += middle;
//
// console.log(first); // logs "Sandra Marie"
//
// first += " ";
// first += last;
//
// console.log(first); // logs "Sandra Marie Marble"
//
// ============================================slide 58
//
// Declare the function
// function logName() {
//     console.log("Amy Gebhardt");
// }
//
// // call the function
// logName();
//
// // call the function again
// logName();
//
// // call the function one last time
// logName();
//
// "Amy Gebhardt" will be logged 3 times in the console.
//
// ============================================slide
//
// Functions can accept ARGUMENTS.
// These PARAMETERS are part
// of the function's SIGNATURE.
// // Declare the logName function
// // It accepts 2 parameters: firstName and lastName
// function logName(firstName, lastName) {
//     console.log(firstName + " " + lastName);
// }
//
// // Call logName with "Amy" and "Gebhardt" as arguments
// logName("Amy", "Gebhardt");
//
// ===================================================slide 61
//
// function getBirthday(month,day,year) {
//
// console.log(month+day+year);
// }
// getBirthday("05","29","1975")
// getBirthday("09","29","2000")
//
//
// ==================================================slide 62
//
// function averageThree(x, y, z) {
//     console.log("x: ", x);
//     console.log("y: ", y);
//     console.log("z: ", z);
//
//     return (x + y + z) / 3;
// }
//
// var scoreOne = 10;
// var scoreTwo = 8.5;
// var scoreThree = 6.1;
//
// var average = averageThree(scoreOne, scoreTwo, scoreThree);
//
// console.log(average); // logs 12.3
//
// =========================================slide 63
//
//
// function getBirthday(month,day,year) {
//     return month + " " + day + " " + year ;
// }
//
// var myBirthday = getBirthday("May", 29, 1975)
// console.log(myBirthday)
//
//
// ======================================slide 64 Scope
// var awesomeGroup = "Girl Develop It";
//
// function whatIsAwesome() {
//     var chapter = "Minneapolis";
//     return awesomeGroup + " " + chapter;
// }
//
// function whatIsAnAwesomeClass() {
//     className = "Into to JavaScript";
//     return awesomeGroup + " " + className;
// }
//
// console.log(chapter);
// ======================================slide 73
//
// console.log("6"==6) will return true
// console.log("6"===6) will return false
//
// ======================================slide 88
//
// var age = 10.3;
//
// if (age < 1) {
//     console.log("infant");
// }
// else if (age < 3) {
//     console.log("toddler");
// }
// else if (age < 11) {
//     console.log("child");
// }
// else if (age < 12) {
//     console.log("pre-teen");
// }
// else if (age < 18) {
//     console.log("teenager");
// }
// else {
//     console.log("adult");
// }
//
//  ======================================slide 94 99 bottles of beer on the wall. While loops
//
//  var bottleCount = 99;
//
//  while (bottleCount >= 1) {
//
//      var message = "Take one down, and pass it around. " + bottleCount + " bottle";
//
//      if (bottleCount != 1) {
//          message += "s"
//      }
//
//      message += " of beer on the wall!";
//      console.log(message);
//
//      bottleCount--;
//  }
//
//  ======================================slide 97
//
//
//  A FOR LOOP will repeat the same block of code over and over until the counter condition is met.
// The syntax looks like this:
// for (statementOne; statementTwo; statementThree) {
// // code block to be executed
// }
//
// // statementOne: is executed before the loop
// // statementTwo: defines the condition to execute the code block
// // statementThree: executed after the loop
//
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
//
//
//
//
//
//
//
//
// "RETURN RETURN RETURN RETURN RETURN RETURN RETURN"
//  SAME THING AS DAY ONE SLIDE 62 ABOUT "RETURN"-----
// you need to use return in a function Only!
//
//  function av3(a,b,c) {
//    var result = (a+b+c)/3.0;
//    return result;
//  }
//
//  var average = av3 (15,9,27);
//  console.log(average)
//
//  or you can just:
//  console.log (av3(15,9,27))
//
//
//
//
//
//
//
//
//
//   ======================================slide 100
//
//
//  statementOne: is executed before the loop
//  statementTwo: defines the condition to execute the code block
//  statementThree: executed after the loop
//
//
//  console.log("multiples of nine");
//  for (let i = 1; i <= 12; i++) {
//      console.log("9 x "+i+" "+"="+" "+(i*9));
//  }
//
// console.log("              ");
// console.log("multiplication tables up to 12");
//  for (let firstNumber = 1; firstNumber <= 12; firstNumber++) {
//      console.log("firstNumber = "+firstNumber)
//      for (let j = 1; j <= 12; j++){
//          console.log(firstNumber+" x "+j+" "+"="+" "+(firstNumber*j));
//      }
//
//  }
//
//
//
//
//
//
//
// DAY 2 DAY 2 DAY 2 DAY 2 DAY 2 DAY2 DAY 2 DAY 2 DAY 2 DAY 2 DAY 2 DAY2
// =========================================SLIDE 19 ARRAYS
//
// var gdiMplsCourses = [
//     "Intro to HTML and CSS",
//     "Intermediate HTML and CSS",
//     "Intro to JavaScript",
//     "Fall in Love with Git"
// ];
//
// for (let i = 0; i < gdiMplsCourses.length; i++) {
//     console.log(i,gdiMplsCourses[i] + " is a great class.");
// }
//
// =========================================SLIDE 20
//
// var fruits = ["Pinneapple","Mango", "Bananna"
// ];
//
// console.log(fruits[1]);
//
// // add a fruit to the array
// fruits [3] = "Strawberry";
//
// // add fruit to the array using push
// fruits.push("Lychee");
//
// for (let i = 0; i < fruits.length; i++) {
//     console.log(i,fruits[i] + " is delish!");
//
//
//
//     =========================================SLIDE 25
//     OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS
//
// var person = {
// firstName: "Sandra",
// lastName: "Marble",
//  eyeColor: "Brown",
//  profession: "Painter"
// }
//
// console.log(person["profession"]);
// IS THE SAME THING AS ABOVE
// console.log(person.profession);
//
// function getFullName() {
//     return person["firstName"] + " " + person.lastName;
// }
//
// console.log(getFullName());
//
//
//   =========================================SLIDE 28
//
//
// THIS IS AN OBJECT IN AN ARRAY
//   var people = [
//       {
//           "firstName": "Amy",
//           "lastName": "Hammond"
//       },
//       {
//           "firstName": "Rick",
//           "lastName": "Gebhardt"
//       }
//   ];
//
//   function getFullName(person){
//       return person["firstName"] + " " + person["lastName"];
//   }
//
//   console.log(getFullName(people[0])); // logs "Amy Hammond"
//
//   people[0]["lastName"] = "Gebhardt";
//
//   console.log(getFullName(people[0])); // logs "Amy Gebhardt"
//
//
//
//   =========================================SLIDE 29
//
//
//     Key/Value pairs in objects can be added.
//     Objects can also hold functions.
//
//
//
//     var person = {
//         "firstName": "Amy",
//         "lastName": "Gebhardt"
//     };
//
//     console.log(person.maidenName); // logs "undefined"
//
//     person.maidenName = "Hammond";
//
//     console.log(person.maidenName); // logs "Hammond"
//
//
//
//
//   Objects can also hold functions.
// var stitchTheCat = {
//     "age": 11,
//     "furColor": "gray",
//     "meow": function(){
//         console.log("meowwww");
//     },
//     "eat": function(food){
//         console.log("Yummm, I sure love " + food);
//     }
// };
//
// stitchTheCat.meow();
// stitchTheCat.eat("chocolate protein shake");
//
//   =========================================SLIDE 30
//
//   Heres a more complex example:
//   var course = {
//       "name": "Intro to JavaScript",
//       "teacher": "Amy Gebhardt",
//       "location": "PowerObjects",
//       "tas": [
//           {"firstName": "Michelle", "lastName": "Schulp"},
//           {"firstName": "Clare", "lastName": "Oneil"},
//           {"firstName": "Tamara", "lastName": "Temple"},
//           {"firstName": "Susan", "lastName": "Metoxen"}
//       ],
//       "listTAs": function(fullName) {
//           var output = "";
//           for (var i = 0; i < this.tas.length; i++){
//               var ta = this.tas[i];
//               output += ta.firstName;
//               if(fullName){
//                   output += " " + ta.lastName;
//               }
//               output += " | ";
//           }
//           console.log(output);
//       }
//   };
//
//   // list the TAs (with their full name) for the Into to JS course
//   course.listTAs(true);
//
//
// =========================================SLIDE 34
//
// Lets try it!
// Return to your scripts.js.
// Create a "recipe" object. Track name, prepTime, and an array of ingredients.
// Create a method that lists all of the ingredients.
// Dont forget to display your results somewhere!
//
//
// var recipe = {
//   name: "Tamara's CHili",
//   prepTime: "1 hour",
//   ingredients: [
//     'can of beans',
//     'can of corn',
//     'can of tomatoes',
//     'chili powder',
//     'cumin',
//     'salt',
//     'pepper'
//   ],
//   listIngredients: function () {
//     let output = ''
//     for (let i = 0; i < this.ingredients.length - 1; i++) {
//       output += this.ingredients[i] + ', '
//     }
//     output += 'and ' +
//       this.ingredients[this.ingredients.length - 1]
//     return output
//   }
// }
//
// console.log(recipe.listIngredients());
//
//
// =========================================SLIDE
// GET ELEMENT BY ID AND DISPLAY the INNERHTMLS IN CONSOLE
//
// var contentElement = document.getElementById("girlDevelopIt");
//
// console.log(contentElement.innerHTML);

// GET ELEMENT BY TAG NAME AND DISPLAY the INNERHTMLS IN CONSOLE


// =========================================SLIDE 55


// Lets try it!
// Return to your scripts.js.
// Using JavaScript, change the size and color of the text in your girlDevelopIt div.
// Finish early?
// Add some new text to your girlDevelopIt div.
// Using a document method, display the contents of your girlDevelopIt div before and after you add your new text.

//
// document.getElementById("girlDevelopIt").style.color = "#FFFFFF";
//
// document.getElementById("girlDevelopIt").style.fontSize = "50px";
//
// // the property "background-color" changes to "backgroundColor"
// document.getElementById("girlDevelopIt").style.backgroundColor = "#EF5B6A";
//
//
// var contentElement = document.getElementById("girlDevelopIt");
//
// console.log(contentElement.innerHTML);
//
// document.getElementById("girlDevelopIt").innerHTML = "NEW TEXT!";
//
// console.log(contentElement.innerHTML);
//
//
// =========================================SLIDE 58
// CHANGE A P INTO AN EVENT LISTENER. WHEN YOU CLICK IT, THE TEXT CHANGES
// var paragraph = document.querySelector("p");
//
// paragraph.addEventListener("click", function(){
//     this.innerHTML = "I was clicked!";
// });
//
//
// // =========================================SLIDE 59

var gidDiv = document.getElementById("girlDevelopIt");

gidDiv.addEventListener("click", function(){
    this.style.color = "red";
});


gidDiv.addEventListener("click", function(){
    this.style.fontSize = "50px";
});
