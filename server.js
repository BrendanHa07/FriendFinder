// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the express app
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



// Basic Routes
require('./routing/html-routes.js')(app);
require('./routing/api-routes.js')(app);


// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("Friend Finder APP is listening on PORT " + PORT);
});

