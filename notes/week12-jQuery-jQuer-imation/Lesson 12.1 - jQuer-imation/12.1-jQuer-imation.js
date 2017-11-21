Lesson 12.1 - jQuer-imation

Item
Intro to Animating with jQuery
jQuery Animation

Really fun and easy to use.
Great way to improve user experience.
Good substitute for CSS3 transitions which aren’t IE9 compatible.
Show, hide, fade and move element animations will be shown in this lesson.
For complex animation function, we will be going over the jQuery animate function. Useful for animating more than one property.
When thinking about animating, we are changing a value over a period of time. Animations can be applied to any numeric value.
Item
Lesson 12.1 - Hiding and showing elements
Go to jQuery Essential Training on lynda.com:

https://www.lynda.com/jQuery-tutorials/jQuery-Essential-Training-REVISION-Q3-2016/494389-2.html

Complete the "5. Animations and Effects" lessons, starting with "Introduction to jQuery animations" and ending with "Custom animations".

Optional:

Complete the "6. AJAX Operations" lessons, starting with "jQuery and AJAX" and ending with "Using global AJAX handlers".

Item
Exercise 12.1
OPTIONAL FOR EXTRA CREDIT:

Go on to the discussion board titled “Week 12 - Exercise 12.1” and create a new Thread. Make sure your title includes the phrase “Exercise 12.1”. You must post to the discussion board to receive full participation credit for the week.

Ccomplete the challenge located here, using the previously reviewed exercise tutorials in lynda.com, the exercise files, and the challenge solution video (if necessary). Post a link to your code to the new thread.

===========================================================================

Lesson 12.1 - Hiding and showing elements
Go to jQuery Essential Training on lynda.com:

https://www.lynda.com/jQuery-tutorials/jQuery-Essential-Training-REVISION-Q3-2016/494389-2.html

Using the show and hide effects
The show() and hide() functions are the simplest way to reveal and hide elements. This can be done with an optional animation.

show(): Reveals the matched elements using an optional animation
hide(): Hides the matched elements using an optional animation
toggle(): Toggles the visible state of the matched elements using an optional animation



<!DOCTYPE html>
<html>

<head>
    <title>Showing and Hiding Elements</title>
    <link rel="stylesheet" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">
        $(function() {
            $("#show").click(function() {
                $("#theDiv").show("normal");
            });
            $("#hide").click(function() {
                // 1000miliseconds as a perameter in the hide function. There are two eases built into jQuery: swing and linear.
                $("#theDiv").hide(1000, "swing");
            });
            $("#toggle").click(function() {
              // passing a completion function as a parameter in the toggle function. You could also pass an anonymous function, but we are naming it "completion". When the toggle function completes, this function will be called. completion is defined below.
                $("#theDiv").toggle("slow", completion);
            });
        });

        function completion() {
            // the value of this is set to the DOM element being affected
            $(this).text("Animation complete");
        }
    </script>
    <style type="text/css">
        p,
        span {
            font-size: 16pt;
        }

        button {
            margin: 5pt 5pt 0 0;
        }
    </style>
</head>

<body>
    <h1>Using the show and hide effects</h1>
    <div id="content">

        <p>The show() and hide() functions are the simplest way to reveal and hide elements. This can be done with an optional
            animation.</p>
        <ul>
            <li><code>show()</code>: Reveals the matched elements using an optional animation</li>
            <li><code>hide()</code>: Hides the matched elements using an optional animation</li>
            <li><code>toggle()</code>: Toggles the visible state of the matched elements using an optional animation</li>
        </ul>
        <div id="theDiv" class="box">
        </div>
        <button id="show">Show</button>
        <button id="hide">Hide</button>
        <button id="toggle">Toggle</button>
    </div>
</body>

</html>





===============================================================
Fading Elements


https://www.lynda.com/jQuery-tutorials/Fading-elements/494389/539731-4.html

Element Fading Routines
Page elements can be faded in or out using a set of dedicated jQuery functions.

fadeIn() fades the element in from being invisible
fadeOut() fades the element out and removes it from layout
fadeTo() fades the element to a specified opacity: 0% - 100%


Fade In  Fade Out  Fade To 30%  Fade To 100%  Pulsate


<!DOCTYPE html>
<html>

<head>
    <title>Element Fading</title>
    <link rel="stylesheet" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">
        $(function() {
            $("#fadein").click(function() {
                // you can pass in a milisecond duration for fadeIn or a keyword like slow, normal or fast
                $("#theDiv").fadeIn("normal");
            });
            $("#fadeout").click(function() {
                // you can pass in a milisecond duration for fadeIn or a keyword like slow, normal or fast
                $("#theDiv").fadeOut("normal");
            });
            $("#fadeto3").click(function() {
                // parameters set on the fadeTo function: slow, fade to 30% (fade to 30% opacity out of 100%)
                $("#theDiv").fadeTo("slow", 0.3);
            });
            $("#fadeup").click(function() {
                // parameters set on the fadeTo function: slow, fade to 100% opacity (no fade)
                // we passed a function as a parameter of fadeTo, onComplete, that is defined below
                $("#theDiv").fadeTo("slow", 1.0, onComplete);
            });
            // Here we are using the fateTo function to create a pulse effect
            $("#pulse").click(function() {
                // these four animations will take place one after the other because of the statement chaining.
                $("#theDiv").fadeTo("fast", 0.3)
                            .fadeTo("fast", 1.0)
                            .fadeTo("fast", 0.3)
                            .fadeTo("fast", 1.0);
            });
        });

        function onComplete() {
            $(this).text("Fading effect complete");
        }
    </script>
    <style type="text/css">
        p,
        span {
            font-size: 16pt;
        }

        button {
            margin: 5pt 5pt 0 0;
        }
    </style>
</head>

<body>
    <h1>Element Fading Routines</h1>
    <div id="content">

        <p>Page elements can be faded in or out using a set of dedicated jQuery functions.</p>
        <ul>
            <li><code>fadeIn()</code> fades the element in from being invisible</li>
            <li><code>fadeOut()</code> fades the element out and removes it from layout</li>
            <li><code>fadeTo()</code> fades the element to a specified opacity</li>
        </ul>
        <div id="theDiv" class="box">
        </div>
        <button id="fadein">Fade In</button>
        <button id="fadeout">Fade Out</button>
        <button id="fadeto3">Fade To 30%</button>
        <button id="fadeup">Fade To 100%</button>
        <button id="pulse">Pulsate</button>
    </div>
</body>

</html>

===============================================================
Sliding

Using the slide functions
Elements can also be shown and revealed via the slide functions. A common use case for this feature is when, for example, you have a message to display to the user that can be dismissed once read.

slideUp(): animates the height of the matched elements to 0 (or whatever CSS min-height is set to). When the animation finishes, the display CSS property of the element is set to 'none' to remove the element from the page layout
slideDown(): animates the height of the matched elements to reveal them
slideToggle(): toggles the state of the matched elements, either sliding them up or down depending on their current state


Slide Up  Slide Down  Toggle Slide



<!DOCTYPE html>
<html>

<head>
    <title>Using slide to show and reveal elements</title>
    <link rel="stylesheet" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">
        $(function() {
            $("#slideup").click(function() {
                // As a parameter, we can use miliseconds or key words like slow, normal, or fast. We can also add easing functions, but did not in this case.
                $("#theDiv").slideUp(1000);
            });
            $("#slidedown").click(function() {
                // As a parameter, we can use miliseconds or key words like slow, normal, or fast. We can also add easing functions, but did not in this case.
                $("#theDiv").slideDown(200);
            });
            $("#toggle").click(function() {
                $("#theDiv").slideToggle("slow");
            });
        });
    </script>
    <style type="text/css">
        div#theDiv {
            width: 250px;
            height: 180px;
            margin: 10px;
            padding: 20px;
            background: #b3c8d0;
            border: 1px solid gray;
            cursor: pointer;
        }

        p,
        span {
            font-size: 16pt;
        }

        button {
            margin: 5pt 5pt 0 0;
        }
    </style>
</head>

<body>
    <h1>Using the slide functions</h1>
    <div id="content">

        <p>Elements can also be shown and revealed via the slide functions. A common use case for this feature is when, for
            example, you have a message to display to the user that can be dismissed once read.</p>
        <ul>
            <li><code>slideUp()</code>: animates the height of the matched elements to 0 (or whatever CSS min-height is set to).
                When the animation finishes, the <code>display</code> CSS property of the element is set to 'none' to remove
                the element from the page layout</li>
            <li><code>slideDown()</code>: animates the height of the matched elements to reveal them</li>
            <li><code>slideToggle()</code>: toggles the state of the matched elements, either sliding them up or down depending
                on their current state</li>
        </ul>
        <div id="theDiv">
        </div>
        <button id="slideup">Slide Up</button>
        <button id="slidedown">Slide Down</button>
        <button id="toggle">Toggle Slide</button>
    </div>
</body>

</html>





===============================================================
Custom animations
Anamating an elements properties
https://www.lynda.com/jQuery-tutorials/Custom-animations/494389/539733-4.html




Animating an Elements Properties
The animate() function provides a way to create smooth animations on the properties of an object.
Generally, CSS properties that use numeric values can be animated. For example: width, height, or border thickness.

There are two ways to call the animate function.
1. with an object that specifies the properties to be animated along with a set of parameters that control the animation process.

animate(properties, duration, easing, complete)

2. with two objects, the first being the set of properties to animate, and the second specifying the animation parameters. this way provides a few more options than the first.

animate(properties, parameters)

We are just going to cover the first way, #1.

animate(properties, duration, easing, complete)

properties: The property is an OBJECT {} and should contain the name of the property to be animated, and the value that the animation should move forward.

the duration, easing and complete parameters are all optional.

durtion: the duration parameter defaults to 400 milliseconds, but you can specify  a numeric value, or the string slow or fast. this value controls how much time the animation will take.

easing: defaults to swing, but you can use linear

complete: optional callback function that will be called when the animation sequence completes.

You can use pixels, ems, or percentages. If you use none, pixels is the default. You can specify
a "+=" before the value that you are animating to. That means animate from whatever the value currently is, and then add that value to it.


Buttons from our example web site:
Grow Right
Animate Text
Move Element
All Properties


<!DOCTYPE html>
<html>

<head>
    <title>Animating an Element</title>
    <link rel="stylesheet" href="../style.css" />
    <script type="text/javascript" src="../jquery-3.0.0.js"></script>
    <script type="text/javascript">
        $(function() {
            $("#right").click(function() {
                // animates the width of #theDiv. we are passing in an object as the parameter of animate. The object holds the width property saying adjust the width up to 200% of it's original size (you can use px or percentage), at a duration of 1000miliseconds.
                $("#theDiv").animate({ width: "200%" }, 1000);
            });
            $("#text").click(function() {
              // animates the font size. we are passing in an object as the parameter of animate. The object holds the fontSize property saying adjust size up to 24pt, at a duration of 1000miliseconds (one second).
                $("#theDiv").animate({ fontSize: "24pt" }, 1000);
            });
            $("#move").click(function() {
                // animate the left property from whatever it is (currently 0) and add 500, at a duration of 1000(1sec), with a swing of "ease"
                $("#theDiv").animate({ left: "+=500" }, 1000, "swing");
            });
            $("#all").click(function() {
                // If you want all the animations above to happen simultaneously, put them all in one line:
                $("#theDiv").animate({ left: "500", fontSize: "24pt", width: "500px" }, 1000, "swing");
            });
        });
    </script>
    <style type="text/css">
        #theDiv {
            position: relative;
            width: 250px;
            height: 180px;
            margin: 10px;
            padding: 20px;
            background: #b3c8d0;
            border: 1px solid black;
            font-size: 16pt;
            cursor: pointer;
            left: 100px;
        }

        button {
            margin: 5pt 5pt 0 0;
        }
    </style>
</head>

<body>
    <h1>Animating an Elements Properties</h1>
    <div id="content">

        <p>The <code>animate()</code> function provides a way to create smooth animations on the properties of an object.</p>
        <p>Click the buttons below this <code>&lt;div&gt;</code> element to see how various properties can be animated.</p>
        <div id="theDiv">Animate Me</div>
        <button id="right">Grow Right</button>
        <button id="text">Animate Text</button>
        <button id="move">Move Element</button>
        <button id="all">All Properties</button>
    </div>
</body>

</html>








=====================================================================
Optional
Using the basic Ajax function
The $.ajax() function is used to perform basic AJAX requests. It can be customized using a variety of parameters.

Complete the "6. AJAX Operations" lessons, starting with "jQuery and AJAX" and ending with "Using global AJAX handlers".

https://www.lynda.com/jQuery-tutorials/jQuery-AJAX/494389/539735-4.html





<!DOCTYPE html>
<html>

<head>
  <title>Using the Ajax Function</title>
  <style>
    #ajaxContent {
      padding: 5pt;
      border: 2px dashed lightgray;
    }
  </style>
  <link rel="stylesheet" href="../style.css" />
  <script type="text/javascript" src="../jquery-3.0.0.js"></script>
  <script type="text/javascript">
    $("document").ready(function() {
        getData();
      });

      function getData() {
        $.ajax({
          // the URL for the request
          url: "testdata.txt",

          // whether this is a POST or GET request
          type: "GET",

          // the type of data we expect back
          dataType : "text",

          // function to call for success
          success: successFn,

          // function to call on an error
          error: errorFn,

          // code to run regardless of success or failure
          complete: function( xhr, status ) {
            console.log("The request is complete!");
          }
        });
      }

      function successFn(result) {
        console.log("Setting result");
      	$("#ajaxContent").append(result);
      }
      function errorFn(xhr, status, strErr) {
        console.log("There was an error!");
      }
  </script>
</head>

<body>
  <h1>Using the basic Ajax function</h1>
  <div id="content">

    <p>The <code>$.ajax()</code> function is used to perform basic AJAX requests. It can be customized using a variety of parameters.</p>
    <p>If successful, the returned data will appear here:</p>
    <p id="ajaxContent"></p>
  </div>
</body>

</html>
