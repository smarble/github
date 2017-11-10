Lesson 11.1 - The Main (jQuery) Event

Item
Intro to Events in jQuery
jQuery event handling is great because it allows us to utilize JavaScript methods that have great cross-browser compatibility. If we were to use plainJavaScript for all of our event handling we may have to include extra code to handle specific browser instances. This is just one of the reasons why jQuery is used to frequently to handle our JavaScript needs.

In this lesson:

jQuery event handling features
Binding and unbinding events
Event helper methods
Using the jQuery event object

Item
Lesson 11.1 - Understanding the jQuery event handling features
Go to jQuery Essential Training on lynda.com:

https://www.lynda.com/jQuery-tutorials/jQuery-Essential-Training-REVISION-Q3-2016/494389-2.html

Complete the "4. jQuery Events" lessons, starting with "jQuery event handling features" and ending with "Using the jQuery event object".

-----------------------------------------------------
Binding and Unbinding Events Example

jQuery makes it simple to start and stop listening to events using the on() and off() functions. You just need to supply the name of the event you want to listen to and a function to handle it

on()
off()

There are several ways to use on: https://api.jquery.com/on/



<!DOCTYPE html>
<html>

<head>
    <title>Binding and Unbinding Events with jQuery</title>
    <link rel="stylesheet" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">
        // Short hand function of declaring document ready by passing the handler function directly to the jquery object.
        $(function() {
            // using "on" to attach event listeners to #evtTarget. we'll use the mouseover and mouseleave events to change the color of the div using the "highlight" function defined below.
            $("#evtTarget").on("mouseover mouseleave", highlight);
            // using "on" on #evtTarget, to attach an event handler. on Click, do this anonymous function with an event handler:
            $("#evtTarget").on("click", function(evt) {
                // Remove (off) the event handlers listed from #evtTarget
                $("#evtTarget").off("mouseover mouseleave", highlight);
                // #evtTarget, replace the html, add this paragraph
                $("#evtTarget").html("<p>You shut off the hover effect!</p>");
                // #evtTarget, remove the class "highlighted" just in case it is all ready there when the user clicks.
                $("#evtTarget").removeClass("highlighted");
            });
            // using "on" to attach an event listener to #evtTarget with a function.
            $("#textEntry").on("keypress", function(evt) {
                // referencing the #keyPress span, we are adding this text:  (String.fromCharCode(evt.charCode). I do not understand what this in the parentheses means. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode.
                $("#keyPress").text(String.fromCharCode(evt.charCode));
            });
        });

        function highlight(evt) {
            // toggles the class "highlighted" on and off.
            $("#evtTarget").toggleClass("highlighted");
        }
        });

    </script>
    <style type='text/css'>
        .highlighted {
            background-color: Red;
        }
    </style>
</head>

<body>
    <h1>Binding and Unbinding Events Example</h1>
    <div id="content">

        <p>jQuery makes it simple to start and stop listening to events using the <code>on()</code> and <code>off()</code> functions.
            You just need to supply the name of the event you want to listen to and a function to handle it</p>
        <div id="evtTarget" class="box">Mouse over this div to see the effect. Click on it to unbind the mouseover.</div>
        <p>Type in this text field</p>
        <input id="textEntry" type="text" />
        <p>Last character typed: <span id="keyPress"></span></p>
    </div>
</body>

</html>



-----------------------------------------------------------
Event Helpers
https://www.lynda.com/jQuery-tutorials/Event-helper-features/494389/539724-4.html

Some types of events are fairly common, and jQuery provides shorthand helper functions to make your code a little easier to write and read. Some examples:

hover(): use this instead of mouseover and mouseleave events
click(): listens for click events
dblclick(): listens for double-click events
resize(): fired on the window object when the browser window resizes






<!DOCTYPE html>
<html>

<head>
    <title>Using jQuery Event Helper Functions</title>
    <link rel="stylesheet" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">
        $(function() {
            // Get #evtTarget, add the jquery command "hover". This is the same end result as the previous exercise's "on" exept with less code needed. In this case the highlight function (defined below) is called twice. Once for hovering on an item, once for when the hover is removed.
            $("#evtTarget").hover(highlight, highlight);
            // Get #evtTarget, listen for the click event. When clicked, execute "fnClick1" function
            $("#evtTarget").click(fnClick1);
            // Get #evtTarget, listen for the dblclick event. When dblclicked, execute "fnClick2" function
            $("#evtTarget").dblclick(fnClick2);
            // Get window, listen for the resize event. When window is resized, execute "fnResize" function
            $(window).resize(fnResize);

            // get #evtTarget. attach a handler that will only be executed one time for a given event type. passing the arguments of the click function and an anonymous function.
            $("#evtTarget").one("click", function() {
                // "This" is set to the element that the event happened on. Set the css to the following:
                $(this).css({ borderWidth: "4px",
                    cursor: "pointer"
                });
            });
        });

        function highlight(evt) {
            // Toggles the class of #evtTarget to "highlighted"
            $("#evtTarget").toggleClass("highlighted");
        }
        function fnClick1() {
            // Get #evtTarget. change html to the string "Click"
            $("#evtTarget").html("Click");
        }
        function fnClick2() {
            // Get #evtTarget. change html to the string "Double Click"
            $("#evtTarget").html("Double Click");
        }
        function fnResize() {
            // Get #evtTarget. change html to the string "Browser window resized"
            $("#evtTarget").html("Browser window resized");
        }
    </script>
    <style type='text/css'>
        .highlighted {
            background-color: Red;
        }
    </style>
</head>

<body>
    <h1>Using Event Helpers</h1>
    <div id="content">

        <p>Some types of events are fairly common, and jQuery provides shorthand helper functions to make your code a little
            easier to write and read. Some examples:</p>
        <ul>
            <li><code>hover()</code>: use this instead of mouseover and mouseleave events</li>
            <li><code>click()</code>: listens for click events</li>
            <li><code>dblclick()</code>: listens for double-click events</li>
            <li><code>resize()</code>: fired on the window object when the browser window resizes</li>
        </ul>
        <div id="evtTarget" class="box">Mouse over this div to see the hover effect. Try clicking and double-clicking.</div>
    </div>
</body>

</html>


-----------------------------------------

Using the jQuery Event Object

The jQuery Event object contains detailed information about each event that occurs in the page.

Click on each of the DIV elements below to see event-related information for each.

jQuery normalizes the following properties for cross-browser consistency:
https://api.jquery.com/category/events/event-object/

target:  where the event originated from
relatedTarget:   in some cases another element on the page, or the pae itself
pageX:   Where the mouse was when the event occured
pageY
which:   event specific. in the event of a key press, will tell you which key was typed.
metaKey:   on mac it is the "cmd" key, on windows it is the "windows" key. Its a boolean property that you can use to see if that key was held down: it is either true or false.




<!DOCTYPE html>
<html>

<head>
    <title>Using the jQuery Event Object</title>
    <link rel="stylesheet" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">
        $(function() {
            // Assigning event handlers to the 3 divs on the web page. In these next 3 event handler functions, an individual data object is passed as an aragument, wich will be passed to the Event handler. In each of these 3 we are supplying an object that just contains a name property wich represents the name of the Div element.
            $("#Div1").on("click dblclick", { name: "Div 1" }, function(evt) {
                // defined below. Takes values from the Event Object and displays them in the UI.
                updateEventDetails(evt);
                // stopPropagation Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
                evt.stopPropagation();
            });
            $("#Div2").on("click dblclick", { name: "Div 2" }, function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
            $("#Div3").on("click dblclick", { name: "Div 3" }, function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
            $("div.smallbox").on("mouseenter", function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
            $("div.smallbox").on("mouseleave", function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
            $("div.smallbox").on("mousemove", function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });

            $("#input1").keypress(updateEventDetails);
        });

        // This function will take the information from the Event Object and then fill out each one of these individual fields, with are down there in the html.
        function updateEventDetails(evt) {
            // First we need to clear the contents of the text fields each time a new EventDetails are updated, to prevent stale data from being displayed in the fields we don't affect.
            // This line says: get the span elements that have id attributes that are conained within any element with the detailLine class. Add the text string "".
            $(".detailLine span[id]").text("");

            $("#evtType").text(evt.type);
            $("#evtWhich").text(evt.which);
            $("#evtTarget").text(evt.target.id);
            if (evt.relatedTarget)
                $("#evtRelated").text(evt.relatedTarget.tagName+"#"+evt.relatedTarget.id);
            $("#evtPageX").text(evt.pageX);
            $("#evtPageY").text(evt.pageY);
            $("#evtClientX").text(evt.clientX);
            $("#evtClientY").text(evt.clientY);
            $("#evtMetaKey").text(evt.metaKey);
            if (evt.data)
                $("#evtData").text(evt.data.name);
        }
    </script>
</head>

<body>
    <h1>Using the jQuery Event Object</h1>
    <div id="content">

        <p>The jQuery Event object contains detailed information about each event that occurs in the page.</p>
        <p>Click on each of the DIV elements below to see event-related information for each.</p>
        <div id="Div1" class="smallbox inline">Mouse over and click here (Div1)</div>
        <div id="Div2" class="smallbox inline">Mouse over and click here (Div2)</div>
        <div id="Div3" class="smallbox inline">Mouse over and click here (Div3)</div>
        <div>Type some text here: <input type="text" id="input1"></div>
        <div id="eventDetails">
            <h3>Event Details</h3>
            <div class="detailLine">
                <span class="lineitem">Event type: </span><span class="lineitem" id="evtType"></span>
                <span class="lineitem">Key/Button: </span><span class="lineitem" id="evtWhich"></span>
            </div>
            <div class="detailLine">
                <span class="lineitem">Target: </span><span class="lineitem" id="evtTarget"></span>
                <span class="lineitem">Related Target: </span><span class="lineitem" id="evtRelated"></span>
            </div>
            <div class="detailLine">
                <span class="lineitem">pageX: </span><span class="lineitem" id="evtPageX"></span>
                <span class="lineitem">pageY: </span><span class="lineitem" id="evtPageY"></span>
            </div>
            <div class="detailLine">
                <span class="lineitem">clientX: </span><span class="lineitem" id="evtClientX"></span>
                <span class="lineitem">clientY: </span><span class="lineitem" id="evtClientY"></span>
            </div>
            <div class="detailLine">
                <span class="lineitem">Meta Key: </span><span class="lineitem" id="evtMetaKey"></span>
                <span class="lineitem">data: </span><span class="lineitem" id="evtData"></span>
            </div>
        </div>
    </div>
</body>

</html>
