// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");


// Create an instance of the express app.
var app = express();
// Set the port of our application
// process.env.PORT lets the port be set by Heroku

var PORT = process.env.PORT || 8080;
// Set Handlebars as the default templating engine.
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Data

// Routes
app.get("/home", function(req, res) {
    res.render("home");
});
app.get("/signIn", function(req, res) {
    res.render("signIn");
});
app.get("/signUp", function(req, res) {
    res.render("signUp");
});
app.get("/services", function(req, res) {
    res.render("services");
});
app.get("/serviceForm", function(req, res) {
    res.render("serviceForm");
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});