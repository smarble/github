//REUSING SOME OF THE SAME CODE FROM MY FIRST TRY//                                                 
                                                   
function changeClass(elementID, newClass){
    var element = document.getElementById(elementID); 
        element. setAttribute("class", newClass);
}

document.getElementById("sad")
    .onmouseover = function(){changeClass("sad","dancepumpkin");
    document.getElementById("sadtext").innerHTML = "See you have many talents!";
}

document.getElementById("dance") 
    .addEventListener("mouseover",function(){changeClass("dance", "dohpumpkin");
    document.getElementById("happytext").innerHTML = "Oh-Well maybe you need more practice!";
});


