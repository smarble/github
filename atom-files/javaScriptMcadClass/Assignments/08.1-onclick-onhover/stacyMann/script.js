


// EXERCISE 8.1 -- RESUABLE FUNCITON
// Leveraged from lecture 8.2.5 and put to use by me...


//"changeClass()"
//-Accepts ID of HTML element
//-Accepts CSS class name to apply to HTML element
//-Gets reference to HTML element */

function changeClass(elementID, newClass){
    document.getElementById(elementID).setAttribute("class", newClass)
}


//HERE'S HOW I'VE PUT THIS CODE TO USE...

document.getElementById("lamp").onclick = function (){
    changeClass("lamp", "lamp-on");
}

document.getElementById("box").onclick = function (){
    changeClass("box", "box-open");
}
