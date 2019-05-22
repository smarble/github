/* styles */
/* called by your view template */

/* You might want to try something fancier: */
/* less: http://lesscss.org/ */

* {
    box-sizing: border-box;
}

body {
    font-family: helvetica, arial, sans-serif;
    margin: 25px;
}

main {
    display:block;
    height:175px;
}

header {
    border-bottom: 1px solid black;
}

h1 {
    font-weight: bold;
    color: #000;
}

.bold {
    font-weight: bold;
}

p {
    max-width: 600px;
}


li {
    margin-bottom: 5px;
}

footer {
    padding-top: 25px;
    border-top: 1px solid black;
}

footer a {
    float:left;
    margin:5px;
}

.pet-image {
    height:150px;
}

.dashboard div {
    display:block;
}

.pet-image-container {
    float:left;
    padding:10px;
}

.dashboard {
    float:left;
    padding:20px;
}

.button-container {
    margin-top:20px;
}

.button-container button {
    width: 100px;
    margin-right: 10px;
    text-align: center;
    display: inline-block;
    float: left;
    font-size:15px;
    background-color: #1e2835;
    border-color: #404853;
    cursor:pointer;
    background-image: linear-gradient(to bottom,rgba(246,246,246,.1)0%,rgba(30,40,53,0)66%);
    color: #fafafa;
}