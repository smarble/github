    
// ALWAYS WRAP JQUERY IN THIS DOC READY FUNCTION //   

$(document).ready(function(e){
      
				$('#stategallery').find('a').colorbox({rel:'group3', transition:"fade", width:"75%", height:"75%"});
				$(".callbacks").colorbox({
					onOpen:function(){ alert('onOpen: colorbox is about to open'); },
					onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
					onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
					onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
					onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
				});
				
				//Example of preserving a JavaScript event for inline calls.
				$("#click").click(function(){ 
					$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
					return false;
				});   
    
    
    
});  
    

//THIS IS THE END OF THE CURLY BRACKET FOR ONREADY FUNCTION CODE
                             

//6. TOGGLE h2 ELEMENT IN SIDEBAR  - MADE THIS ONLY WORK FOR ONE OF THE TWO PARAGRAPHS WHOOP!                            
//$( "h2.title" ).click(function() {
//   $( ".entry" ).toggle( "slow" );
//});                            
    

