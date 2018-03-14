
//
// var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
// console.log (languages[2]);
// console.log(languages.length);
//
// you get back:
// JavaScript
// 5
// --------------
// console.log(myName)
// // console.log(myArray.length);
// //
// // Use console.log to print out the first three letters of myArray.
// // console.log( myArray.substring(0,4));
// -----------------------

//
// document.getElementById('BtnDonate').addEventListener('click', function(){
//   //Code in here executes when the user clicks the "Donate" button.
// });
//
// document.getElementById('BtnChurchill').addEventListener('click', function(){
//   //Code in here executes when the user clicks the "Churchill" button.
// });
//
// document.getElementById('BtnGhandi').addEventListener('click', function(){
//   //Code in here executes when the user clicks the "Ghandi" button.
// });
//
// document.getElementById('BtnDemosthenes').addEventListener('click', function(){
//   //Code in here executes when the user clicks the "Demosthenes" button.
// });

var churchillSpeech = {
  author: 'Winston Churchill',
  year: 1940,
  BCE: false
};

var ghandiSpeech = {
  author: 'Ghandi',
  year: 1942,
  BCE: false
};

var demosthenesSpeech = {
  author: 'Demosthenes',
  year: 342,
  BCE: true
};

var allSpeeches = [
  churchillSpeech,
  ghandiSpeech,
  demosthenesSpeech
];

var difference = ghandiSpeech.year - churchillSpeech.year;

// For reference, see "codeacademy-java-demos-pt2.js line 174"

console.log("Ghandi's and Churchill's speech are " + difference + " years apart.");


document.getElementById('BtnDonate').addEventListener('click', function(){
  console.log("There are " + allSpeeches.length + " speeches on this page.");
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  console.log("This speech was written by "
              + allSpeeches[0].author + " in " + allSpeeches[0].year + ". It is " + allSpeeches[0].BCE + " that this year is B.C.E.");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  console.log("This speech was written by " + allSpeeches[1].author + " in " + allSpeeches[1].year + ". It is " + allSpeeches[1].BCE + " that this year is B.C.E.");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  console.log("This speech was written by " + allSpeeches[2].author + " in " + allSpeeches[2].year + ". It is " + allSpeeches[2].BCE + " that this year is B.C.E.");
});
