//********** ON CONSOLE ITEMS **************//

console.log('Welcome to my final Javascript and Jquery site. To date this class has been the most challenging, but im not discouraged. I hope to continue my skills as the next semesters come along. Can we reach out to you for additional help on these topics?')


function myFunction() {
  alert(" All 4 Eastside units are available! June 2018");
}  

// ALERT BOX// I think this could have been a much more condesed version in order to handle this? I think I didnt install it correctly? I am not sure, here is the site http://alertifyjs.com/factory.html.//

// if(!alertify.myAlert){

////define a new dialog////
//alertify.dialog('myAlert',function factory(){
//return{
//main:function(message){
//this.message = message;
// },
// setup:function(){
// return { 
// buttons:[{text: "cool!", key:27/*Esc*/}],
// focus: { element:0 }
// };
// },
// prepare:function(){
// this.setContent(this.message);
// }
// }});
// }

////launch it.////
// alertify.myAlert("Browser dialogs made easy!");



//NAVIGATION CONTROL//

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



//********** jQUERY ITEMS **************//



// ALWAYS WRAP JQUERY IN THIS DOC READY FUNCTION //   
$(document).ready(function() {
    
//ICON PLACEMENT//
$("#soon h3").prepend("<img src='img/home.png' alt='icon'>");
    

//COLOR BOX PLUGIN - GROUP IMAGES//    
$(".group3").colorbox({rel:'group3', transition:"slow", width:"80%", height:"80%"});
    
    
//HEADER COLOR CHANGE//
$('#available h2').click(function (){
$("#available").css("background","aquamarine",);
});

    
    
// TRIED TO FIGURE OUT THE FUNCTION BELOW BUT COULDNT GET THIS TO WORK 
// THIS IS A TOGGLE ON AND OFF

// var flip = 0;
// $( "h2 .title #" ).click(function() {
// $( ".entry p" ).toggle( flip++ % 2 === 0 );
// });    

    
//EAST SIDE - TOGGLE INFO//
$("h5.title1").click(function() {
$(".entry1" ).toggle("slow");
});                            

    
//BAYVIEW - TOGGLE INFO// 
$("h5.title2").click(function() {
$(".entry2" ).toggle("slow");
});                            

    
//CUDAHY - TOGGLE INFO//
$("h5.title3").click(function() {
$(".entry3" ).toggle("slow");
});

    
}); //THIS IS THE END OF THE CURLY BRACKET FOR ONREADY FUNCTION CODE   
    
    
//**********NOTES **************//

    
 

