// Exercise 7.1

// make the 2 new elements with variable names
var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

// Create child nodes manually:
var h1Text = document.createTextNode("This is how we do it!");
var paraText = document.createTextNode("It's so easy!");

// add them as child nodes to the new elements:
newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);

// Now attach them to the document:
document.getElementById("divId").appendChild(newHeading);
document.getElementById("divId").appendChild(newParagraph);


// center the paragraph text
newParagraph.setAttribute("align","center");
