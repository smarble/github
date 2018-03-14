

$(document).ready(function(){

    //ASSIGNMENT INSTRUCTIONS PART 1:
    //Add the attached icon image before the text in each LI element in the main navigation
    $('#menu li a').prepend("<img src='img/icon.png' alt='Icon'>");
    $('#menu li img').css('margin-right', '5px');




    //ASSIGNMENT INSTRUCTIONS PART 2:
    //Clicking on the H1 element in the header changes the background color of the header DIV
    $('#header h1').on('click', bkgColorChange);

    function bkgColorChange(evt){
      $('#header').css('background', 'Goldenrod');
      $('#menu').css('background', 'DarkGoldenrod');
    };



    //ASSIGNMENT INSTRUCTIONS PART 3:
    //Change the text color of the first LI element in one of the sub-lists in the sidebar
    $('#sidebar_content_1 ul li:first-child a').css('color', 'Goldenrod');




    //ASSIGNMENT INSTRUCTIONS PART 4:
    //Move the position of the even “numbered” LI elements in one of the sub-lists in the sidebar to the right by 5 pixels
    $('#sidebar_content_1 ul li:nth-child(2n)').css('padding-left', '5px');




    //ASSIGNMENT INSTRUCTIONS PART 5:
    //Clicking on one of the post titles in the main content area replaces the content of the content DIV (with the ID of “content”) with content you specify
    $('h2.title').on('click', newContent);

    function newContent(evt){
      $('#content').replaceWith("<div id=content><h2>What was that you said about complex string manipulation, again?</h2><img src='img/img.jpg' alt='Tilki'></div>");

      var styles = {
        width: '60%', padding: '30px'
      };
      $('#content').css(styles);
    };



    //ASSIGNMENT INSTRUCTIONS PART 6:
    //Clicking on one of the H2 elements in the sidebar toggles visibility of the list below it
    $('#sidebar_content_1 h2, #sidebar_content_2 h2').wrapInner(function(){
      return "<a class='"  +  this.nodeValue  +  "'></a>";
    });

    $('#sidebar_content_1 h2 a').on('click', toggleList1);
    function toggleList1(evt) {
      $('#sidebar_content_1 ul li').addClass('list1Item').toggle();
    };

    $('#sidebar_content_2 h2 a').on('click', toggleList2);
    function toggleList2(evt) {
      $('#sidebar_content_2 ul li').addClass('list2Item').toggle();
    };

});//End of Assignment.




//Making not here of how E.Wing solved part 6 (SUPER AWESOME!):

//$("#sidebar h2").click(function () {
    //$(this).next().toggle("slow");
//});
