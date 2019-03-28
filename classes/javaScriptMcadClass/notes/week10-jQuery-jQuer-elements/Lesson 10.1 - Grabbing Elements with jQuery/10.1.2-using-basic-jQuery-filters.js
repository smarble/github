
Item
Lesson 10.1.2 - Using basic jQuery filters
Check out jQuery Essential Training on lynda.com once more.

https://www.lynda.com/jQuery-tutorials/jQuery-Essential-Training-REVISION-Q3-2016/494389-2.html

Complete the lessons under "2. Working with Page Content" starting with lesson "Overview of selectors and filters" and ending with "jQuery Statement Chaining."

Item
Exercise 10.1
Go on to the discussion board titled “Week 10 - Exercise 10.1” and create a new Thread. Make sure your title includes the phrase Exercise 10.1. You must post to the discussion board to receive full participation credit for the week.

Using the exercise files posted in Lesson 10.1.2, complete the programming challenge located here. Post a link to your code to the new thread.
-----------------------------------------------------------------------
Item
Lesson 10.1.2 - Using basic jQuery filters
Check out jQuery Essential Training on lynda.com once more.

https://www.lynda.com/jQuery-tutorials/jQuery-Essential-Training-REVISION-Q3-2016/494389-2.html

Complete the lessons under 2. Working with Page Content" starting with lesson "Overview of selectors and filters" and ending with "jQuery Statement Chaining.



//retrieve all the image tags
var images = $("img");

//now do some processing on the images
images.each(function(){

});

Basic Selectors
$("tagName") //All tagName elements
$("#identifier") //the element with the id attribute of identifier
$(".className") //All elements that have class className
$("tag.className") //Tag elements that have class className
$("tag#id.className") //Tag element with an id and class className
$("*") //All elements in the page



Exercise code:

<!DOCTYPE html>
<html>

<head>
    <title>Using Basic jQuery Selectors</title>
    <link rel="stylesheet" type="text/css" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">
        $("document").ready(function() {
          //This code is getting all the paragraphs and giving them a red border of 3px
          $("p").css("border","3px solid red");
          //This code is getting all the elements with the class name a and giving them a red border of 3px
          $(".a").css("border","3px solid red");
          //This code is getting all the elements with the id example and giving them a red border of 3px
          $("#example").css("border","3px solid red");
          //This code is getting all paragraphs with a class of b and giving them a red border of 3px
          $("p.b").css("border","3px solid red");
        });

    </script>
</head>

<body>
    <h1>Using Basic jQuery Selectors</h1>
    <div id="content">

        <p>Selectors are used to do exactly what their name implies: select content within a Web page.</p>
        <p>They use a very CSS-like syntax in order to do this. To take a few examples:</p>
        <ul id="list1">
            <li class="a"><code>$("<i>tag</i>")</code>: Select all of the &lt;tag&gt; elements</li>
            <li class="a"><code>$("<i>.className</i>")</code>: Select all elements that have the <i>className</i> class applied</li>
            <li class="b"><code>$("#identifier")</code>: Select the element with the id of <i>identifier</i></li>
            <li class="b"><code>$("<i>tag.className</i>")</code>: Select all &lt;tag&gt; elements that have the <i>className</i> class
                applied</li>
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





------------------------------------------
Basic filters
jQuery filters are used in conjuction with selectors in order to further refine a result set that comes back from a selector expression.

$("p:first"): of the returned <p> tags, select the first one
$("p:even"): select the even-number <p> tags
$("a:gt(1)"): of the <a> tags, select all those after the 0th and 1st
$("p:not(p:eq(2))"): select all the <p> tags except the one at index 2


:first, :last    //First or last of the given selector type
:even, :odd      //Only even or odd items in the matched set
:gt(), :lt(), :eq(),   //items greater than, less than, or equal to an index. example: I only want paragraphs with indexes less than (lt) 5.
:animated     //Only want to filter out items that are in the process of being animated
:focus     //The element that currently has the focus
:not(expr)      //Elements that don't match the given expression (NOT)



Example code:
<!DOCTYPE html>
<html>

<head>
    <title>Basic jQuery Filters</title>
    <link rel="stylesheet" type="text/css" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>

    <script type="text/javascript">
        $("document").ready(function() {
          //These two lines are first asking for all of the paragraph tags that are contained within the element with the "example" id, then they are further filtering, asking for only the first and last paragraph.
          $("#example p:first").css("border", "3px solid red");
          $("#example p:last").css("border", "3px solid red");
          //This line will select all paragraph tags that are contained within the element with the "example" id, then it is further filtering, asking that they are at even number indexes.
          $("#example p:first").css("border", "3px solid red");
          //First asks for elements with an id "example" and class of "a", then filters down to the first element only
          $("#example .a:first").css("border", "3px solid red");
          //First asks for elements with an id "example" with class of "b", then filters down to even number indexes
          $("#example .b:even").css("border", "3px solid red");
          //First asks for paragraphs with an id "example" , then filters down to paragraphs that are not equal to index 2
          $("#example p:not(p:eq(2))").css("border", "3px solid red");


        });


    </script>
</head>

<body>
    <h1>Using Basic jQuery Filters</h1>
    <div id="content">

        <p>jQuery filters are used to refine the results that are returned from selectors.</p>
        <p>A few examples:</p>
        <ul id="list1">
            <li class="a"><code>$("p:first")</code>: of the returned &lt;p&gt; tags, select the first one</li>
            <li class="a"><code>$("p:even")</code>: select the even-number &lt;p&gt; tags</li>
            <li class="b"><code>$("a:gt(1)")</code>: of the &lt;a&gt; tags, select all those after the 0th and 1st</li>
            <li class="b"><code>$("p:not(p:eq(2))")</code>: select all the &lt;p&gt; tags except the one at index 2</li>
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


-----------------------------------------------------
Advanced Selectors

To select elements based on their position in the document tree, use the Hierarchy Selectors.

The Hierarchy Selectors work by examining the position of target elements relative to other elements:

$("parent > child"): selects "child" elements that are immediate descendants of the "parent"
$("ancestor descendant"): selects "descendant" elements as long as they have an "ancestor" element somewhere above them
$("prev + next"): selects the "next" element if it is immediately preceded by a "prev" element
$("prev ~ siblings"): selects all "siblings" elements that come after a "prev" element


<!DOCTYPE html>
<html>

<head>
    <title>Document</title>
    <link rel="stylesheet" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">

        $("document").ready(function() {
              //$("div > p") means select only paragraphs that are an IMMEDIATE child of the div element. > means immediate child.
              $("div > p").css("border", "3px solid red");
              //$("div p"), with only a space betweeen div and p. This means select ALL the paragraphs that are inside a div element.
              $("div p").css("border", "3px solid red");
              //$("div p.a"), with only a space betweeen div and p. This means select ALL the paragraphs with the class ".a" that are inside a div element.
              $("div p.a").css("border", "3px solid red");
              //The Next Adjacent selector. $("ul + div") this says select div elements only if they are adjacent to a ul element.
              $("ul + div").css("border", "3px solid red");
              //The Next Sibling  selector. $("#para1 ~ p") this says select all paragraph elements that follow AFTER an element with the id "para1". Another way of saying it: select each paragraph as long as it has an element with the id "para1" as its previous sibling.
              $("#para1 ~ p").css("border", "3px solid red");

        });

    </script>
</head>

<body>
    <h1>jQuery Hierarchy Selectors</h1>
    <div id="content">

        <p>To select elements based on their position in the document tree, use the Hierarchy Selectors.</p>
        <p>The Hierarchy Selectors work by examining the position of target elements relative to other elements:</p>
        <ul id="list1">
            <li><code>$("parent > child")</code>: selects "child" elements that are immediate descendants of the "parent"</li>
            <li><code>$("ancestor descendant")</code>: selects "descendant" elements as long as they have an "ancestor" element
                somewhere above them</li>
            <li><code>$("prev + next")</code>: selects the "next" element if it is immediately preceded by a "prev" element</li>
            <li><code>$("prev ~ siblings")</code>: selects all "siblings" elements that come after a "prev" element</li>
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


-----------------------------------------------------
Attribute filters []


[] Tests to see if attributes are present, and if they contain certain values.
[attr]: element has an attribute named attr
[attr=val]: element has an attribute whose value is "val"
[attr^=val]: element has an attribute whose value starts with "val"


<!DOCTYPE html>
<html>

<head>
    <title>Using Attribute Filters</title>
    <link rel="stylesheet" type="text/css" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">

        $("document").ready(function() {
          //$("p[class]") this is searching for paragraphs with a class attribute, any class. We are not looking for a value, just looking to see that the attribute is there.
          $("p[class]").css("border", "3px solid red")
          //looking for paragraph tags with the id attribute of "para1"
          $("p[id=para1]").css("border", "3px solid red")
          //looking for paragraph tags with the id attribute that STARTS WITH (^=) "para"
          $("p[id^=para]").css("border", "3px solid red")
          //looking for paragraph tags with the id attribute that STARTS WITH (^=) "para" AND have a language attribute that contains the text (*=) "en-".
          $("p[id^=para][lang*=en-]").css("border", "3px solid red")

        });

    </script>
</head>

<body>
    <h1>Using Attribute Filters</h1>
    <div id="content">

        <p>Attribute filters are used to select elements in the Web page that have attribute values matching a given set of
            criteria.</p>
        <p>Some examples include:</p>
        <ul id="list1">
            <li class="a">[<i>attr</i>]: element has an attribute named <i>attr</i></li>
            <li class="a">[<i>attr</i>=val]: element has an attribute whose value is "val"</li>
            <li class="b">[<i>attr</i>^=val]: element has an attribute whose value starts with "val"</li>
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







-----------------------------------------------------
Advanced filters:

Child and content filters.
Using Child, Visibility, and Content Filters
These selectors are used to retrieve content that matches certain conditions, such as whether they contain certain content, whether they are visible/hidden, or whether they are in a certain position within their parent.

:contains('text'): select elements that contain specific text
:parent: select elements have at least one child node (element or text)
:has(selector): select elements that contain at least one element that matches the selector
:first-child: select elements that are the first child of their parents
:last-of-type: select elements that are the last of their type among siblings
:nth-child(): select elements that are the nth child of their parent




<!DOCTYPE html>
<html>

<head>
    <title>Using Child, Visibility, and Content Filters</title>
    <link rel="stylesheet" type="text/css" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">

        $("document").ready(function() {
          //Uses the contains filter to select paragraph tags that contain this text string "3"
          $("p:contains('3')").css("border","3px solid red");
          //Selects paragraph tags IF they are PARENTS.
          $("p:parent").css("border","3px solid red");
          //Selects paragraph tags IF they are PARENTS. Parents either have more tags inside them OR a text node.
          $("p:parent").css("border","3px solid red");
          //The Has Filter. Look for divs that have paragraphs in them with a class of "a"
          $("div:has(p[class=a])").css("border","3px solid red");
          //SElects paragraphs that are descendants of divs that are a First Child.
          $("div p:first-child").css("border","3px solid red");
          //Selects paragraphs that are descendants of divs that are the last of their type.
          $("div p:last-of-type").css("border","3px solid red");
          //Selects paragraps inside of a div that are the third child
          $("div p:nth-child(3)").css("border","3px solid red");
          //Selects paragraps inside of a div that are even numbered. "2n" loops through the index and selects each 2nd item
          $("div p:nth-child(2n)").css("border","3px solid red");
          //Selects paragraps inside of a div that are even numbered. "2n" loops through the index and selects each 2nd item
          $("div p:nth-child(2n)").css("border","3px solid red");

        });

    </script>
</head>

<body>
    <h1>Using Child, Visibility, and Content Filters</h1>
    <div id="content">
        <p>These selectors are used to retrieve content that matches certain conditions, such as whether they contain certain
            content, whether they are visible/hidden, or whether they are in a certain position within their parent.</p>
        <ul id="list1">
            <li class="a"><code>:contains('<i>text</i>')</code>: select elements that contain specific text</li>
            <li class="a"><code>:parent</code>: select elements have at least one child node (element or text)</li>
            <li class="a"><code>:has(<i>selector</i>)</code>: select elements that contain at least one element that matches the selector</li>
            <li class="a"><code>:first-child</code>: select elements that are the first child of their parents</li>
            <li class="a"><code>:last-of-type</code>: select elements that are the last of their type among siblings</li>
            <li class="a"><code>:nth-child()</code>: select elements that are the nth child of their parent</li>
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


-----------------------------------------------------
Traversing Documents with jQuery:

Using jQuery Document Traversal Features
The DOM of a Web page is organized as a tree structure. The elements in the page have family-like names to refer to their positions relative to other elements.

For example, the HEAD and BODY tags are "children" of the HTML tag, and are "siblings" of each other. They have the HTML tag as their "parent". jQuery provides functions for navigating the document tree and processing sets of elements, such as:

children(): Retrieves all the child elements of the matched elements, except text nodes
prev(), next(), parent(): used to traverse the family relationships of an element
find(): search within a given element to find elements that match a selector expression
each(): loops over a set of matched elements and calls a function for each one
parentsUntil($("HTML")) Get the parents of an element, but only until a particular tag is reached. In this case we stop at the HTML tag (without including the HTML tag!).


<!DOCTYPE html>
<html>

<head>
    <title>Using jQuery Document Traversal</title>
    <link rel="stylesheet" type="text/css" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">

        $("document").ready(function() {
          //Select the children (as a set) of the tag with the id "example", apply the css styling to ALL of them
          $("#example").children().css("border","3px solid red");

          //Making a var to get a reference to a specific paragraph tag "para1". Then using that var "elem" with additional selectors to add css styling.
          var elem = $("para1");
          // selecting elems previous neighbor
          elem.prev().css("border","3px solid red");
          // selecting elems next neighbor
          elem.next().css("border","3px solid green");
          // selecting elems parents until the body tag is reached (the body tag is not included)
          elem.parentsUntil($(body)).css("border","3px solid blue");

          //Using the function find. Asking it to start at the #examle and find #para4. Then add the css styling described.
          $("#example").find("#para4").css("border","3px solid red");

          // -use the Each Function to iterate over a set of elements and operate on them. This is going to loop over each of these paragraphs and change the css of each one. The border and the left margin are going ot get thicker and larger, respectively, as we go through this.
          // -Each takes a call back function, that will be called for each element of this set.

          //  Define our variables for the loop
           var leftmargin = 0;
           var border = 3;
           // Select all of the paragraphs inside #example. The callback function takes two arguments: (the index of the current element, a reference to the element itself)
           $("#example p").each(function(index, element) {
               //we have to convert the dom "element" from above to a jQuery wrapped element below. We are saying change the border first, then what we want it changed to (border+"px solid red")
               $(element).css("border", border+"px solid red")
              //  Adding another css call: take "margin-left", and change it to the value of the var "leftmargin"
               .css("margin-left", leftmargin);
               //increase border by 2
               border += 2;
               //increase margin by 10
               leftmargin += 10;




        });

    </script>
</head>

<body>
    <h1>Using jQuery Document Traversal Features</h1>
    <div id="content">
        <p>The DOM of a Web page is organized as a tree structure. The elements in the page have family-like names to refer
            to their positions relative to other elements.</p>
        <p>For example, the HEAD and BODY tags are "children" of the HTML tag, and are "siblings" of each other. They have the
            HTML tag as their "parent". jQuery provides functions for navigating the document tree and processing sets of
            elements, such as:</p>
        <ul id="list1">
            <li><code>children()</code>: Retrieves all the child elements of the matched elements, except text nodes</li>
            <li><code>prev(), next(), parent()</code>: used to traverse the family relationships of an element</li>
            <li><code>find()</code>: search within a given element to find elements that match a selector expression</li>
            <li><code>each()</code>: loops over a set of matched elements and calls a function for each one</li>
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




-----------------------------------------------------
jQuery statement chaining:
https://www.lynda.com/jQuery-tutorials/jQuery-statement-chaining/494389/539709-4.html

This is a statement chain of functions. They will be executed in order.

$(selector).fn1().fn2().fn3();


-----------------------------------------------------
programming challange

data-type="proteinbar"

Write code that dynamically changes the background color for each of these product types. For vitamins, use dark green, for  mineral water use blue, for protein bars use dark purple.

Answer (start file now has current answer):

$(function () {
    $("#products h2.product-name[data-type='mineralwater']").css("background-color", "#darkgreen");
    $("#products h2.product-name[data-type='vitamin']").css("background-color", "#blue");
    $("#products h2.product-name[data-type='proteinbar']").css("background-color", "#purple");
})
