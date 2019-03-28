//// NEW WAY OF CREATING CONTENT USING JQUERY? ////
//// spent many hours trying to figure out why the new text is not showing up in the designated area. Please let me know if im close and just missing a syntax or something... I will try to continue working on this. OK nevermind I figured it out haha... I had the wrong path to my jQUERY file uff!!///

$("document").ready(function () {
    var newP = $("<p>");
    newP.append("How do you do?"); 
    $("#newText").html(newP);
});           


/////OLD CODE I HAD PLACED HERE FROM ASSIGNMENT 7_1 ////
//// OLD WAY OF CREATING CONTENT USING THE DOM ////

//var newHeading = document.createElement("h1");
///var newParagraph = document.createElement("p");

//var h1Text = document.createTextNode("Welcome to week 7 its //not DOS");
//var paraText = document.createTextNode("Learning what //Document Object Model is.");

//newHeading.appendChild(h1Text);
//newParagraph.appendChild(paraText);

//document.getElementById("textbody").appendChild(newHeading);
//document.getElementById("textbody").appendChild(newParagraph);

//document.getElementById("textbody").style.textAlign = //"center";


