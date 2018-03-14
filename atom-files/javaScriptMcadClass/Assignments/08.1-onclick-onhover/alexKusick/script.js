                                                  
function changeClass(elementID, newClass){
  var element = document.getElementById(elementID);
      element. setAttribute("class", newClass);
}

document.getElementById("sad")
    .onmouseover = function(){changeClass("sad","dancepumpkin");
}

document.getElementById("dance") 
    .addEventListener("mouseover",function(){changeClass("dance", "dohpumpkin");
});