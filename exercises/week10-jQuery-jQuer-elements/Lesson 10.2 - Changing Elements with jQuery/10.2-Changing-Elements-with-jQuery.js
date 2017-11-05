Lesson 10.2 - Changing Elements with jQuery

Item
Lecture 10.2.1 - Intro to Manipulating with jQuery
This Lesson:
Looking at how to create HTML elements as jQuery objects
Difference between jQuery objects and DOM objects
How to read and change attributes with jQuery
Manipulating element content with jQuery: overwriting, prepending, appending, wrapping
Manipulating CSS properties

Item
Lesson 10.2.2 - Creating, getting and setting content
Go to jQuery Essential Training on lynda.com:

https://www.lynda.com/jQuery-tutorials/jQuery-Essential-Training-REVISION-Q3-2016/494389-2.html

Complete the "3. Manipulating Page Content" lessons, starting with "Creating Content" and ending with "Embedding Custom Data".

Exercise 10.2
Go on to the discussion board titled “Week 10 - Exercise 10.2” and create a new Thread. Make sure your title includes the phrase “Exercise 10.2”. You must post to the discussion board to receive full participation credit for the week.

Using the exercise files posted in Lesson 10.1.2, complete the challenge located here. Post a link to your code to the new thread.



-----------------------------------------------------------------
Lesson 10.2.2 - Creating, getting and setting content
Go to jQuery Essential Training on lynda.com:

https://www.lynda.com/jQuery-tutorials/jQuery-Essential-Training-REVISION-Q3-2016/494389-2.html



-----------------------------------------------------------------
Creating Content

jQuery makes the creation and manipulation of document content very easy. Rather than having to directly use the verbose DOM methods, you can roll several operations into just a few function calls.

html(str): can be used to retrieve or set the HTML content of an element
text(str): used to retrieve or set the text content of an element




<!DOCTYPE html>
<html>

<head>
    <title>Creating New Content</title>
    <link rel="stylesheet" type="text/css" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">
        $("document").ready(function () {
            document.getElementById("create").addEventListener("click", function (evt) {
                createContent();
            });
            document.getElementById("change").addEventListener("click", function (evt) {
                changeContent();
            });
            document.getElementById("changeAll").addEventListener("click", function (evt) {
                changeAllTheContent();
            });
        });

        function createContent() {
          //Pass a string of properly formatted html directly to the HTML function. This will replace the content of the match set of elements from this selector with the new content. So in this case I'm getting reference to the div that has the ID of example. When I call html, its going to replace the existing content wich is all those paragraphs with whatever I pass in right here. In this case several paragraphs were replaced with just this one.
          $("example").html("<p>Hi There</p>")
        }

        function changeContent() {
          // Calling jQuery directly with a string of html. This will create a new html element as a jQuery object. So I store that aside in a new variable called newItem. Then pass that new object directly to the html function, with I'm calling on the results of this selector. Which is paragraph, para1.
          var newItem = $("<p>This is a new paragraph</p>");
          $("#para1").html(newItem;)
        }

        function changeAllTheContent() {
          // In this case ALL the paragraphs get changed to this text because we selected $("#example p") wich is ALL the paragraphs in #example. FYI the text function only replaces text, it does not create HTML content!
          $("#example p").text("I've changed all the paragraphs!");
        }
    </script>
</head>

<body>
    <h1>Creating new document content</h1>
    <div id="content">

        <p>jQuery makes the creation and manipulation of document content very easy. Rather than having to directly use the verbose DOM methods, you can roll several operations into just a few function calls.</p>
        <ul id="list1">
            <li><code>html(<i>str</i>)</code>: can be used to retrieve or set the HTML content of an element</li>
            <li><code>text(<i>str</i>)</code>: used to retrieve or set the text content of an element</li>
        </ul>
        <div id="example">
            <p class="a">This is paragraph 1</p>
            <p id="para1">This is paragraph 2</p>
            <p class="b">This is paragraph 3</p>
            <p id="para4" lang="en-us">This is paragraph 4</p>
            <p id="para5" lang="en-gb">This is paragraph 5</p>
        </div>
        <div>
            <button id="create">Create Content</button>
            <button id="change">Change Content</button>
            <button id="changeAll">Change All</button>
        </div>
    </div>
</body>

</html>




-----------------------------------------------------------------
Inserting Document Content

Content can be inserted at various points in the document, relative to existing content, using a variety of jQuery methods built for each purpose.

There are two sets of insertion functions: one set for inserting content inside of other content, and one for inserting outside of other content (relative to the outside of other elements).

append(): Appends content to the inside of the matched elements
prepend(): Prepends content to the inside of the matched elements
appendTo(): Appends the specified content to the inside of the matched elements
prependTo(): Prepends the specified content to the inside of the matched elements
after(): Appends content to the outside of the matched elements
before(): Prepends content to the outside of the matched elements
insertAfter(): Takes the specified content and appends it outside of the specified elements
insertBefore(): Takes the specified content and prepends it outside of the specified elements



To insert content to the inside end:

<p>This is a paragraph.</p>

// Selects all paragraphs and appends the content to the end of the inside of the paragraphs.
Using append: $("p").append("New content.");
// Another way to do this is to create the content first, using the jQuery function, and then calling the appendTo function, which takes a jQuery selector expression.
Using appendTo: $("New Content.").appendTo("p");

Result of both:
// The end result of each of these calls would be the content inserted at the inside end of the paragraph.
<p>This is a paragraph. New Content.</p>

To insert content at the beginning of the paragraph, you would use prepend or prependTo.

Using prepend: $("p").prepend("New content.");
Using prependTo: $("New Content.").prependTo("p");

Result:
<p>New Content.This is a paragraph.</p>




To insert content adjacent to other elements, either before or after, as opposed to inside:

<p>This is a paragraph.</p>

// Will insert content before the outside of the matched elements
Using before: $("p").before("<p>New content.</p>");
// Same thing, but specifies the new content first, and the selector second
Using insertBefore: $("<p>New content.</p>").insertBefore("p");

Result:
<p>New content.</p><p>This is a paragraph</p>



There are after and insert after functions which do the same thing, except they insert the content on the outside end of the matched elements.

// Will insert content after the outside of the matched elements
Using after: $("p").after("<p>New content.</p>");
// Same thing, but specifies the new content first, and the selector second
Using insertAfter: $("<p>New content.</p>").insertAfter("p");

Result:
<p>This is a paragraph</p><p>New content.</p>



<!DOCTYPE html>
<html>

<head>
    <title>Inserting Document Content</title>
    <link rel="stylesheet" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">

        $("document").ready(function() {
          // Inside insertion functions below
          // selects all paragraphs inside #example. appends (adds to the inside end)
          $("#example p").append("with some content appended")
          // selects all paragraphs inside #example. appends (adds to the inside, before)
          $("#example p").prepend("Hello!")
          // selects the last paragraph inside #example. Then appends the first paragraph in #example(adds to the inside end)
          $("#example p:last").appendTo("#example p:first")
          //now we will prepend the last paragraph to the first paragraph
          $("#example p:last").prependTo("#example p:first")


          // Outside insertion functions below
          // selects all paragraphs inside #example. Insert outside after, the string
          $("#example p").after("--");
          //selects all paragraphs inside #example. Insert outside after, the string
          $("#example p").before("**");
          // creates a paragraph with jQuery, inserts it outside after the first paragraph of #example
          $("<p>New Para after</p>").insertafter("#example p:first");
          //creates a paragraph with jQuery, inserts it outside before the last paragraph of #example
          $("<p>New Para before</p>").insertbefore("#example p:last");

        });

    </script>
</head>

<body>
    <h1>Inserting Document Content</h1>
    <div id="content">

        <p>Content can be inserted at various points in the document, relative to existing content, using a variety of jQuery
            methods built for each purpose.</p>
        <p>There are two sets of insertion functions: one set for inserting content inside of other content, and one for inserting
            outside of other content.</p>
        <ul id="list1">
            <li class="a"><code>append()</code>: Appends content to the inside of the matched elements</li>
            <li class="a"><code>prepend()</code>: Prepends content to the inside of the matched elements</li>
            <li class="a"><code>appendTo()</code>: Appends the specified content to the inside of the matched elements</li>
            <li class="a"><code>prependTo()</code>: Prepends the specified content to the inside of the matched elements</li>
        </ul>
        <ul>
            <li class="a"><code>after()</code>: Appends content to the outside of the matched elements</li>
            <li class="a"><code>before()</code>: Prepends content to the outside of the matched elements</li>
            <li class="a"><code>insertAfter()</code>: Takes the specified content and appends it outside of the specified elements</li>
            <li class="a"><code>insertBefore()</code>: Takes the specified content and prepends it outside of the specified elements</li>
        </ul>
        <div id="example">
            <p class="a">This is paragraph 1</p>
            <p id="para1">This is paragraph 2</p>
            <p class="b">This is paragraph 3</p>
            <p id="para4" lang="en-us">This is paragraph 4</p>
            <p id="para5" lang="en-gb">This is paragraph 5</p>
        </div>
    </div>
</body>

</html>




-----------------------------------------------------------------
Altering Document Content

In addition to creating and inserting content, the ability to alter the current content of a page is a key scenario in Web development. jQuery has functions tailored to specific situations where content needs to be altered:

wrap(): wrap the matched elements with the specified content
wrapAll(): wrap content around the matched elements as a group
unWrap(): remove the parents from the matched elements
empty(): remove all the child elements from the matched elements
remove(): removes elements from the page, including any embedded data and event handlers
detach(): removes elements from the page, but maintains embedded data and event handlers
replaceAll(): replaces the matched elements with the specified content
replaceWith(): replaces matched elements with content or the results of a callback function




<!DOCTYPE html>
<html>

<head>
    <title>Altering Document Content</title>
    <link rel="stylesheet" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">

    $("document").ready(function() {
      // The argument that you give to the wrap function is the content that you want to wrap around the result of your jQuery expression ($("#example p")). This line of code is going to select each paragraph and then wrap each paragraph inside a div whose style attribute is set to the color red.
      $("#example p").wrap("<div style = 'color:red'/>");
      // The result of our jQuery expression is now going to be wrapped entirely by this div.
      $("#example p").wrapAll("<div style = 'color:red'/>");
      // empty function clears a container of all it's content. This will clear all the content from #example.
      $("#example").empty();
      // We have two selectors here, separated by a comma. One gets the paragraphs in #example with the "a" class, the second selector gets the "b" class. Removes these elements from the page, including any imbedded data or event handlers. If we put these elements back, their imbedded data would be GONE.
      $("#example p.a, #example p.b").remove();
      // does the same thing as remove, BUT all the imbedded data (event handlers, imbedded data) is still there.
      $("#example p.a, #example p.b").detach();

      // Now lets replace some content
      // We have created some content in the jQuery function. The selector is after replaceAll. We will replace all paragraphs in #example that have id attributes.
      $("<div>replaced</div>").replaceAll("#example p[id]");
      // In this case the selector expression is first. The only difference is the order. In this one we are saying give me $("#example p[id]") and replace with ("<div>replaced</div>")
      $("#example p[id]").replaceWith("<div>replaced</div>");

      // With the replaceWith function, is that you can specify a call back function so you don't have to pass in static content. You can calculate new content on the fly, that you want to replace the content in the document with.
      // Selects all of the paragraphs in #example. replaceWith a callback function. The function is written below.
      $("#example p").replaceWith(replacementFn);
    });

    // This function is going to be called for each element inside this set, in this case, paragraphs.
    function replacementFn() {
      // In this case, "this" is the current DOM element we are operating on. "This" refers to whatever object is currently in the loop at this set (#example p). We are wrapping "this" in jquery function so we will have a jQuery object so we can call jQuery functions on it. If its not equal to one, that means it was found: 8:23.
      if ($(this).text().indexOf("1") != -1){
        return "<p>This is paragraph uno</p>";
      }
      // else we dont want the content of the paragraph changed
      else{
        // return the HTML as it currently is so that nothing changes
        return this.outerHTML;
      }
    }



    </script>
</head>

<body>
    <h1>Altering Document Content</h1>
    <div id="content">

        <p>In addition to creating and inserting content, the ability to alter the current content of a page is a key scenario
            in Web development. jQuery has functions tailored to specific situations where content needs to be altered:</p>
        <ul id="list1">
            <li><code>wrap()</code>: wrap the matched elements with the specified content</li>
            <li><code>wrapAll()</code>: wrap content around the matched elements as a group</li>
            <li><code>unWrap()</code>: remove the parents from the matched elements</li>
            <li><code>empty()</code>: remove all the child elements from the matched elements</li>
            <li><code>remove()</code>: removes elements from the page, including any embedded data and event handlers</li>
            <li><code>detach()</code>: removes elements from the page, but maintains embedded data and event handlers</li>
            <li><code>replaceAll()</code>: replaces the matched elements with the specified content</li>
            <li><code>replaceWith()</code>: replaces matched elements with content or the results of a callback function</li>
        </ul>
        <div id="example">
            <p class="a">This is paragraph 1</p>
            <p id="para1">This is paragraph 2</p>
            <p class="b">This is paragraph 3</p>
            <p id="para4" lang="en-us">This is paragraph 4</p>
            <p id="para5" lang="en-gb">This is paragraph 5</p>
        </div>
    </div>
</body>

</html>




-----------------------------------------------------------------
Manipulating Attributes


To read or change element attributes, use the attr() function. removeAttr() can be used to remove attributes

attr(): get the value of an attribute. read the value of an attribute. If the attribute is not present on an element, then the result is undefined.
attr(name, val): set the name attribute to val
attr({ name: val ... }): set multiple attributes in one call
removeAttr(name): remove the attribute from the element




<!DOCTYPE html>
<html>

<head>
    <title>Manipulating Element Attributes</title>
    <link rel="stylesheet" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">

        $("document").ready(function() {
          // Goal: Read the alt attributes from all images. Create a new paragraph after the images that contains all of the alt labels from the images.
          // Create a new paragraph after #example with the id of "alts"
          $("#example").after("<p id='alts'>");
          // Loop over each image element, get the alt attribute value and insert it into the paragraph I just created. Select all images, call the each function on this set. Each takes a callback, so that's why we use the callback function.
          $("img").each(function() {
              // Append the following to the #alts paragraph i just made. "This" (in this case means the $("img") from above. Wrap each "this" inside the jQuery object so i can call the attr function on it. Call the attr function for the image Im currently looking at (this). Read the content of the alt attribute, add a space, and then append it all into the #alts paragraph.
              $("#alts").append($(this).attr("alt") + " ");
          });

          //  Add a title attribute to all of the linked tags around each image. We call the attribute function with two argument: the title (it's attribute name), along with a string to set a definite value.
          $("a").attr("title", "Photo by some photographer");

          //  Make each image open in a new window, using the attribute function
          $("a").attr("target", "_blank");

          //  Remove the href from the <a> tags, making images unclickable
          $("a").removeAttr("href");

          //  Modify multiple attributes at once. In previous examples, we used strings to identify the attribute that we wanted changed. Now we are using a javaScript object that contains multiple attribute names. Here we are grabbing all the images, and changing each ones source to be "images/Spring.jpg" and each ones title to be "Spring...".
          $("img").attr({ src: "images/Spring.jpg", title: "Spring all the things!" });
        });

    </script>

    <style type="text/css">
        img {
            margin: 20px;
            width: 400px;
            height: 400px;
        }
    </style>
</head>

<body>
    <h1>Manipulating Attributes</h1>
    <div id="content">

        <p>To read or change element attributes, use the <code>attr()</code> function. <code>removeAttr()</code> can be used
            to remove attributes</p>
        <ul>
            <li><code>attr()</code>: get the value of an attribute</li>
            <li><code>attr(<i>name</i>, <i>val</i>)</code>: set the <i>name</i> attribute to <i>val</i></li>
            <li><code>attr(<i>{ name: val ... }</i>)</code>: set multiple attributes in one call</li>
            <li><code>removeAttr(<i>name</i>)</code>: remove the attribute from the element</li>
        </ul>
        <div id="example">
            <a href="images/Grass.jpg"><img src="images/Grass.jpg" alt="Grass" /></a>
            <a href="images/Leaf.jpg"><img src="images/Leaf.jpg" alt="Leaf" /></a>
            <a href="images/Spring.jpg"><img src="images/Spring.jpg" alt="Spring" /></a>
            <a href="images/Water.jpg"><img src="images/Water.jpg" alt="Water" /></a>
        </div>
    </div>
</body>

</html>



-----------------------------------------------------------------
CSS Properties and Class Manipulation


Getting and setting CSS information is accomplished via a set of dedicated jQuery functions.

In addition to setting and retrieving individual CSS properties, there are methods for easily changing the CSS classes assigned to page elements that work in a cross-browser manner.

css(): get or set CSS properties on the matched elements in a variety of ways
hasClass(className): determine whether a page element has a certain class
addClass(className | function): add the given CSS class to the elements in the matched set
removeClass(className | function): remove the given CSS class from the elements in the matched set
toggeClass(className | function): add or remove the given CSS class to the elements in the matched set depending on whether it is already there


css():
a cross-browser way of consistently working with css content. Up until now we have been using the CSS function to set CSS properties, to make the results of things like selector and filter examples visible in the page. This CSS function works across browsers and it has a couple of different ways that you can call it, depending on whether you want to retrieve CSS values or set properties.

css(propName):
Get the value for the propName property on an element. To retrieve a CSS value, ou simply give the CSS function a property name, which will return the value for that property on a given element.

css(propName, value):
Set the value for the CSS property propName. To set a property value, you call the function with a property name and value. That will set the value for that property name on the element or the matched set of elements.


css(propName, fn):
Set the value for the propoerty to the result of fn. A third way to call it is with a callback function. When you call it with a callback function, youll set the value for the property on the matched set of elements to whatever the result of the callback is. This is useful, because you can calculate CSS property values on the fly, as you are setting them.


css(propertiesObject):
Set multiple property values at once. And finally,  you can give this css function a javaScript object that contains a bunch of name value pairs that indicate the properties and values to set them to.


More helpful CSS functions:

hasClass(className): Determine whether the element has className applied

addClass(className): Add the CSS class(es) to the matched elements

removeClass(className): Remove the CSS class(es) from the matched elements

toggleClass(className): Toggle the presence of the CSS class(es)




CSS Properties and Class Manipulation
Getting and setting CSS information is accomplished via a set of dedicated jQuery functions.

In addition to setting and retrieving individual CSS properties, there are methods for easily changing the CSS classes assigned to page elements that work in a cross-browser manner.

css(): get or set CSS properties on the matched elements in a variety of ways
hasClass(className): determine whether a page element has a certain class
addClass(className | function): add the given CSS class to the elements in the matched set
removeClass(className | function): remove the given CSS class from the elements in the matched set
toggeClass(className | function): add or remove the given CSS class to the elements in the matched set depending on whether it is already there


<!DOCTYPE html>
<html>

<head>
    <title>CSS Properties and Class Manipulation</title>
    <link rel="stylesheet" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">
        $("document").ready(function() {
            $("#setProp").click(function(evt) {
                $("#example p").css("text-decoration", "overline")
                                .css("font-size", "+=1pt");
            });

            $("#setProps").click(function(evt) {
                $("#example p").css({
                    "font-weight" : "bold",
                    "color" : "red",
                    "text-decoration" : "underline"
                });
            });

            $("#addCl").click(function(evt) {
                $("#example p").addClass("pClass");
            });

            $("#rmCl").click(function(evt) {
                $("#example p").removeClass("pClass");
            });

            $("#toggleCl").click(function(evt) {
                $("#example p").toggleClass("pClass");
            });
        });
    </script>
    <style>
        .pClass {
            color: green;
            text-transform: uppercase
        }

        button {
            margin: 5pt 5pt 0 0;
        }
    </style>
</head>

<body>
    <h1>CSS Properties and Class Manipulation</h1>
    <div id="content">

        <p>Getting and setting CSS information is accomplished via a set of dedicated jQuery functions.</p>
        <p>In addition to setting and retrieving individual CSS properties, there are methods for easily changing the CSS classes
            assigned to page elements that work in a cross-browser manner.</p>
        <ul>
            <li><code>css()</code>: get or set CSS properties on the matched elements in a variety of ways</li>
            <li><code>hasClass(className)</code>: determine whether a page element has a certain class</li>
            <li><code>addClass(className | function)</code>: add the given CSS class to the elements in the matched set</li>
            <li><code>removeClass(className | function)</code>: remove the given CSS class from the elements in the matched set</li>
            <li><code>toggeClass(className | function)</code>: add or remove the given CSS class to the elements in the matched set depending on whether it is already there</li>
        </ul>
        <div id="example">
            <p class="a">This is paragraph 1</p>
            <p id="para1">This is paragraph 2</p>
            <p class="b">This is paragraph 3</p>
            <p id="para4" lang="en-us">This is paragraph 4</p>
            <p id="para5" lang="en-gb">This is paragraph 5</p>
        </div>
        <button id="setProp">Set Property</button>
        <button id="setProps">Set Properties</button>
        <button id="addCl">Add Class</button>
        <button id="rmCl">Remove Class</button>
        <button id="toggleCl">Toggle Class</button>
    </div>
</body>

</html>





showValues:



This second set of finished code is from css_finished.com exercise files. For some reason, there was no video lesson corresponding to these files. There is information about modifying css in this file so I've attached it to the "working with css" lesson notes. I think the point of this lesson is actually the showValues function. Showing the value for the named css property, in the specified place. Here tis:


Using jQuery CSS Functions
CSS has historically been one of the areas of big differences between browsers. jQuery provides a set of cross-browser functions for working with CSS values that commonly appear in development situations.

width() and height(): get or set the width/height of an element
innerWidth() and innerHeight(): get or set the inner width/height of an element
outerWidth() and outerHeight(): get the outer width/height of an element
offset(): get coordinates of element relative to the document
position(): get coordinates of element relative to the offset parent



<!DOCTYPE html>
<html>

<head>
    <title>jQuery CSS Sizing and Positioning</title>
    <link rel="stylesheet" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">
        $(function() {
            showValues();

            $("#example").click(changeValues);
        });

        function changeValues() {
            $("#example").height(100);
            $("#example").width(200);

            showValues();
        }

        function showValues() {
            $("#height").html($("#example").height());
            $("#width").html($("#example").width());
            $("#innerH").html($("#example").innerHeight());
            $("#innerW").html($("#example").innerWidth());
            $("#outerH").html($("#example").outerHeight());
            $("#outerW").html($("#example").outerWidth());
            $("#offset").html($("#example").offset().top + ", " + $("#example").offset().left);
            $("#position").html($("#example").position().top + ", " + $("#example").position().left);
        }
    </script>
</head>

<body>
    <h1>Using jQuery CSS Functions</h1>
    <div id="content">

        <p>CSS has historically been one of the areas of big differences between browsers. jQuery provides a set of cross-browser
            functions for working with CSS values that commonly appear in development situations.</p>
        <ul>
            <li><code>width()</code> and <code>height()</code>: get or set the width/height of an element</li>
            <li><code>innerWidth()</code> and <code>innerHeight()</code>: get or set the inner width/height of an element</li>
            <li><code>outerWidth()</code> and <code>outerHeight()</code>: get the outer width/height of an element</li>
            <li><code>offset()</code>: get coordinates of element relative to the document</li>
            <li><code>position()</code>: get coordinates of element relative to the offset parent</li>
        </ul>
        <div id="example">
            Example DIV Element
        </div>
        <div><span>Height: </span><span id="height"></span></div>
        <div><span>Width: </span><span id="width"></span></div>
        <div><span>innerHeight: </span><span id="innerH"></span></div>
        <div><span>innerWidth: </span><span id="innerW"></span></div>
        <div><span>outerHeight: </span><span id="outerH"></span></div>
        <div><span>outerWidth: </span><span id="outerW"></span></div>
        <div><span>offset: </span><span id="offset"></span></div>
        <div><span>position: </span><span id="position"></span></div>
    </div>
</body>

</html>



-----------------------------------------------------------------
Using the Data Methods
jQuery can associate arbitrary data with page elements. Use the controls below to exercise the data() and removeData() functions on the example DIV element

This is paragraph 1

This is paragraph 2

This is paragraph 3

This is paragraph 4

This is paragraph 5

Store data   Remove data   Show data



There are two different ways we can call the function:

Calling the data function:
    // In this case Key is the name of the attribute that will hold the data, Value is the data itself
    data( key, value )
    // Or you can pass in a javaScript object, which contains multiple keys and multiple values to store all at once.
    data( obj )

To retrieve the data:
    // Call the data function with the name of the key
    data( key )
    // or call with no parameters at all. In that case it will return a javaScript object containing all of the data that's currently on the element.
    data()







<!DOCTYPE html>
<html>

<head>
    <title>Using the Data Methods</title>
    <link rel="stylesheet" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script>
        $("document").ready(function() {
            document.getElementById("show").addEventListener("click", function (evt) {
                // if there is any data, display it
                alert(JSON.stringify($("#example").data(), null, "  "));
            });
            document.getElementById("store").addEventListener("click", function (evt) {
                // store some arbitrary data on the DIV object
                $("#example").data("key1", 1234);
                $("#example").data("key2", "Joe Marini");
            });
            document.getElementById("remove").addEventListener("click", function (evt) {
                // clear the data from the DIV
                $("#example").removeData("key2");
            });
        });
    </script>
</head>

<body>
    <h1>Using the Data Methods</h1>
    <div id="content">

        <p>jQuery can associate arbitrary data with page elements. Use the controls below to exercise the data() and removeData()
            functions on the example DIV element</p>
        <div id="example" data-key3="data attribute">
            <p class="a">This is paragraph 1</p>
            <p id="para1">This is paragraph 2</p>
            <p class="b">This is paragraph 3</p>
            <p id="para4" lang="en-us">This is paragraph 4</p>
            <p id="para5" lang="en-gb">This is paragraph 5</p>
        </div>
        <p>
            <button id="store">Store data</button>&nbsp;
            <button id="remove">Remove data</button>&nbsp;
            <button id="show">Show data</button></p>
    </div>
</body>

</html>
