//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var userName = 
  window.prompt ("What's your name?");

//Get the userName
if (typeof userName === "string" && userName.length > 0) {
  console.log("Hi " + userName + "!");
} else {
  console.log("OK, I'll just call you User.");
};

//Speeches
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.

//User's Favorite Author
  var favoriteAuthor =
    window.prompt ("Which author is your favorite: Churchill, Ghandi or Demosthenes?");

    switch (favoriteAuthor) {

      case "Churchill" :

        console.log (
          speechesArray[0].author +
          " was " +
          speechesArray[0].authorAge +
          " in " +
          speechesArray[0].year +
          ".");
          break;

      case "Ghandi" :

        console.log (
          speechesArray[1].author +
          " was " +
          speechesArray[1].authorAge +
          " in " +
          speechesArray[1].year +
          ".");
          break;

      case "Demosthenes" :

        console.log (
          speechesArray[2].author +
          " was " +
          speechesArray[2].authorAge +
          " in " +
          speechesArray[2].year +
          ".");
          break;

      default:
        console.log ("Hmm, I didn't quite catch that.  Please try again.");
        break;
    }
});



document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.

//Author + Year
  console.log (
    'This speech was written by ' + 
    speechesArray[0].author +
    " in " +
    speechesArray[0].year +
    ".");

//Before or After Common Era
  if (speechesArray[0].yearIsBCE === true) {
    console.log ("This speech took place before the common era.");
  } else {
    console.log ("This speech took place during the common era.");
  }

//Most Recent or Oldest Speech
  if (speechesArray[0].year < speechesArray[1].year 
    && speechesArray[0].year < speechesArray[2].year) {
      console.log ("This is the oldest speech on the page.");
  } else if (speechesArray[0].year > speechesArray[1].year 
    && speechesArray[0].year > speechesArray[2].year) {
      console.log ("This speech is the most recent on the page.");
  } else {
      console.log ("This is the 2nd most recent speech on the page.");
  }
});



document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.

//Author + Year
  console.log (
    'This speech was written by ' + 
    speechesArray[1].author + 
    " in " +
    speechesArray[1].year +
    ".");

//Before or After Common Era
  if (speechesArray[1].yearIsBCE === true) {
    console.log ("This speech took place before the common era.");

  } else { 
    console.log ("This speech took place during the common era.");
  }

//Most Recent or Oldest Speech
  if (speechesArray[1].year < speechesArray[0].year 
    && speechesArray[1].year < speechesArray[2].year) {
      console.log ("This is the oldest speech on the page.");
  } else if (speechesArray[1].year > speechesArray[0].year 
    && speechesArray[1].year > speechesArray[2].year) {
      console.log ("This speech is the most recent on the page.");
  } else {
      console.log ("This is the 2nd most recent speech on the page.");
  }
});



document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.

//Author + Year
  console.log (
    'This speech was written by ' + 
    speechesArray[2].author +
    " in " +
    speechesArray[2].year +
    ".");

//Before or After Common Era
  if (speechesArray[2].yearIsBCE === true) {
    console.log ("This speech took place before the common era.");

  } else { 
    console.log ("This speech took place during the common era.");
  }

//Most Recent or Oldest Speech
  if (speechesArray[2].year < speechesArray[0].year 
    && speechesArray[2].year < speechesArray[1].year) {
      console.log ("This is the oldest speech on the page.");
  } else if (speechesArray[2].year > speechesArray[0].year 
    && speechesArray[2].year > speechesArray[1].year) {
      console.log ("This speech is the most recent on the page.");
  } else {
      console.log ("This is the 2nd most recent speech on the page.");
  }
});