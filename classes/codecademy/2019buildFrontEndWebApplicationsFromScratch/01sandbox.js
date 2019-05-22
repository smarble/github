<!-- This is a static file -->
<!-- served from your routes in server.js -->

<!-- You might want to try something fancier: -->
<!-- html/nunjucks docs: https://mozilla.github.io/nunjucks/ -->
    <!-- pug: https://pugjs.org/ -->
    <!-- haml: http://haml.info/ -->
    <!-- hbs(handlebars): http://handlebarsjs.com/ -->

    <!DOCTYPE html>
<html>
<head>
<title>Thinkful Workshop: Build a Virtual Pet</title>
<meta name="description" content="A cool thing made with Glitch">
    <link id="favicon" rel="icon" href="https://glitch.com/edit/favicon-app.ico" type="image/x-icon">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/style.css">
    </head>
    <body>
    <header>
    <h1>
    Build a Virtual Pet with Thinkful
</h1>
</header>

<main>
<section class="pet-image-container">
    <img class="pet-image" src="http://clipart-library.com/data_images/10825.gif">
    </section>
    <section class="dashboard">
    <div>Name: <strong><span class="name"></span></strong></div>
<div>Weight: <strong><span class="weight"></span> pounds</strong></div>
<div>Happiness: <strong><span class="happiness"></span> tail wags (per min)</strong></div>
<div class="button-container">
    <button class="treat-button">
    Treat
    </button>
    <button class="play-button">
    Play
    </button>
    <button class="exercise-button">
    Exercise
    </button>
    </div>
    </section>
    </main>

    <footer>
    <a href="https://www.thinkful.com">
    About Thinkful
</a>
<a href="https://www.thinkful.com">
    Web bootcamp
</a>
<a href="https://www.thinkful.com">
    Job-placement report
</a>
<a href="https://www.thinkful.com">
    Two-week trial
</a>
</footer>

<!-- Your web-app is https, so your scripts need to be too -->
<script src="https://code.jquery.com/jquery-2.2.1.min.js"
integrity="sha256-gvQgAFzTH6trSrAWoH1iPo9Xc96QxSZ3feW6kem+O00="
crossorigin="anonymous"></script>
    <script src="/client.js"></script>

    </body>
    </html>
