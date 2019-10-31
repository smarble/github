var churchill = {
	author: "Winston Churchill",
	year: 1940,
	bce: false
};

var ghandi = {
	author: "Ghandi",
	year: 1942,
	bce: false
};

var demosthenes = {
	author: "Demosthenes",
	year: 342,
	bce: true
};

var speeches = [
	churchill,
	ghandi,
	Demosthenes
];

var yearsApartCalc = ghandi.year - churchill.year;

console.log("Ghandi's speech and Churchill's speech are " + yearsApartCalc + " years apart.");
document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  console.log("There are " + speeches.length + " speeches on the page.")
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log("This speech was written by " + churchill.author + " in " + churchill.year + ". It is " 
  + churchill.bce + " that this year is B.C.E.")
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log("This speech was written by " + ghandi.author + " in " + ghandi.year + ". It is " 
  + ghandi.bce + " that this year is B.C.E.")
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log("This speech was written by " + demosthenes.author + " in " + demosthenes.year + ". It is " 
  + demosthenes.bce + " that this year is B.C.E.")
});