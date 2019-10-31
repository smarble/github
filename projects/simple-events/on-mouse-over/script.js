console.log("JavaScript Ready")

function mouseOver() {
    document.getElementById("demo").style.color = "red";
  }
  
  function mouseOut(e) {
    document.getElementById("demo").style.color = "black";
  }


// FOR SECOND EXAMPLE EXCERSISE DEMO-2

document.getElementById("demo-two").onmouseover = function() {mouseOver2()};
document.getElementById("demo-two").onmouseout = function() {mouseOut2()};

function mouseOver2() {
  document.getElementById("demo-two").style.color = "blue";
}

function mouseOut2() {
  document.getElementById("demo-two").style.color = "black";
}

// FOR THIRD EXAMPLE EXCERSISE DEMO-THREE

document.getElementById("demo-three").addEventListener("mouseover", mouseOver3);
document.getElementById("demo-three").addEventListener("mouseout", mouseOut3);

function mouseOver3() {
  document.getElementById("demo-three").style.color = "pink";
}

function mouseOut3() {
  document.getElementById("demo-three").style.color = "black";
}