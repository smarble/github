

$(function() {
    "use strict";
    var $flowers= $('#flower-items');

    // here we are grouping the images to be displayed as a group. so you dont have to close one image to go back and click on another to see the next image.
    $flowers
    // find all the a tags in '#flower-items'
    .find('a')
    // call colorbox on the found a tags
    .colorbox({
      // use "rel" to group items. here we are adding the "rel" parameter to group the a tags in the element with the #flower-items id so that they will all appear in the lightbox as a group, not one by one.
      rel: 'galleryOrAnything'
    });

    // here we want the second element in the group to show an html text snippet instead of the image when clicked.
    $flowers
    // find the second child of li
    .find('li:nth-child(2)')
    // call colorbox
    .colorbox({
      // the option we are using is html, as described on the colorbox website. we are putting it in quotes so it is not confused with a javaScript reserved word.
      'html':'<h1>Colorbox</h1><p>Congradulations on opening Colorbox</p>'
    });

    // here we want the third element in the group to show a video instead of the image when clicked.
    $flowers
    // find the third child of li
    .find('li:nth-child(3)')
    // call colorbox
    .colorbox({
      // the option we are using href (called directly without assignment as an element), as described on the colorbox website. we are putting it in quotes so it is not confused with a javaScript reserved word. we are setting additional options (iframe, width, height) as noted in the FAQ of the colorbox page in the "why won't my video play" question/answer.
      'href':'https://www.youtube.com/imbed/Bn7vZJ0AIbE',
      'iframe': true,
      'width': 640,
      'height': 400,
    });
});
