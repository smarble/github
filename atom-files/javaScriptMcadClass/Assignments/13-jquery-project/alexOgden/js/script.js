//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Gandhi',
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
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;


/* getAuthorAndYearString function:
- accepts speechesArray data 
- returns author and year for each speech in speechesArray */
function getAuthorAndYearString (speechData) {
  return '<p>This speech was written by ' + speechesArray[speechData].author + ' in ' + speechesArray[speechData].year + "." + '</p>';
};

/* displayBCEString function:
- accepts speechesArray data
- if statement determines whether speech was written before or after the common era based on Boolean value from yearIsBCE key
- returns string declaring whether speech took place before or after the common era */
function displayBCEString (speechData) {
  if(speechesArray[speechData].yearIsBCE === true){
    return '<p>This speech took place before the common era.</p>';
  }else{
    return '<p>This speech took place during the common era.</p>';
  }
};

/* getOldestOrYoungestString function:
- accepts speechesArray data
- establishes variables for oldest and newest speeches
- determines oldest and newest variables using a for loop to search through year key values in speechesArray 
- returns string declaring that the selected speech is oldest, most recent, or neither oldest nor most recent speech on the page  */
function getOldestOrYoungestString (speechData) {
  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[speechData].year === oldest){
    return '<p>This is the oldest speech on the page.</p>';
  }
  if(speechesArray[speechData].year === newest){
    return '<p>This is the most recent speech on the page.</p>';
  } else {
    return "<p>This is neither the oldest nor the most recent speech on the page.</p>";
  }
};

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});

/* Previous code from week 8 assignment:
document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(0);
  document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(0);
  document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(0);
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(1);
  document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(1);
  document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(1);
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(2);
  document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(2);
  document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(2);
});*/

// I've added the following code:
$("document").ready(function() { 
  $("#BtnChurchill").click(function(info) {
    $("#churchillFigure").show();
    $("#churchillInfo").animate({left: "300"}, 1000, "swing");
    document.getElementById("churchillInfo").innerHTML = getAuthorAndYearString(0);
    document.getElementById("churchillInfo").innerHTML += displayBCEString(0);
    document.getElementById("churchillInfo").innerHTML += getOldestOrYoungestString(0);
    $("#readChurchill").fadeTo(1000, 0.7).fadeTo(800, 0.3).fadeTo(600, 1.0);
  });

  $("#BtnGhandi").click(function(info) {
    $("#gandhiFigure").show();
    $("#gandhiInfo").animate({left: "300"}, 1000, "swing");
    document.getElementById("gandhiInfo").innerHTML = getAuthorAndYearString(1);
    document.getElementById("gandhiInfo").innerHTML += displayBCEString(1);
    document.getElementById("gandhiInfo").innerHTML += getOldestOrYoungestString(1);
    $("#readGandhi").fadeTo(1000, 0.7).fadeTo(800, 0.3).fadeTo(600, 1.0);
  });  

  $("#BtnDemosthenes").click(function(info) {
    $("#demosthenesFigure").show();
    $("#demosthenesInfo").animate({left: "300"}, 1000, "swing");
    document.getElementById("demosthenesInfo").innerHTML = getAuthorAndYearString(2);
    document.getElementById("demosthenesInfo").innerHTML += displayBCEString(2);
    document.getElementById("demosthenesInfo").innerHTML += getOldestOrYoungestString(2);
    $("#readDemosthenes").fadeTo(1000, 0.7).fadeTo(800, 0.3).fadeTo(600, 1.0);
  });

  $("#readChurchill").click(function() {
    $("#churchillContent").fadeToggle("slow");
  });

  $("#readGandhi").click(function() {
    $("#gandhiContent").fadeToggle("slow");
  });

  $("#readDemosthenes").click(function() {
    $("#demosthenesContent").fadeToggle("slow");
  });  

// using the Magnific Popup jQuery plugin to enlarge images:
  $("#Churchill .image-popup-no-margins").magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $("#Ghandi .image-popup-no-margins").magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300
    }
  });

  $("#Demosthenes .image-popup-no-margins").magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300
    }
  });       
});


