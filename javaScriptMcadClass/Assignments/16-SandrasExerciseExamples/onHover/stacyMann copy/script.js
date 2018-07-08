
// EXERCISE 8.1 -- RESUABLE FUNCITON : "changeClass()"
// Leveraged from lecture 8.2.5 and put to use by me...
// EXERCISE 8.2 -- CHANGE TEXT IN A DIV



//"changeClass()"
//-Accepts ID of HTML element
//-Accepts CSS class name to apply to HTML element
//-Gets reference to HTML element */

function changeClass(elementID, newClass){
    document.getElementById(elementID).setAttribute("class", newClass)
}

//Invoking "changeClass()", passing arguments for <div>#lamp
document.getElementById("lamp").onclick = function (){
    changeClass("lamp", "lamp-on");
    //Changes innerHTML for <p>#lamp-text when <div>#lamp is clicked.
    document.getElementById("lamp-text").innerHTML = "Ah, much better!";
}
//Invoking "changeClass()", passing arguments for <div>#box
document.getElementById("box").onclick = function (){
    changeClass("box", "box-open");
    //Changes innerHTML for <p>#box-text when <div>#lamp is clicked.
    document.getElementById("box-text").innerHTML = "What? It's empty?!";
}
