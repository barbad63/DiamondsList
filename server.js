// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

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
var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
// // Routes
// app.get("/home", function(req, res) {
//     res.render("home");
// });
// app.get("/signIn", function(req, res) {
//     res.render("signIn");
// });
// app.get("/signUp", function(req, res) {
//     res.render("signUp");
// });
// app.get("/services", function(req, res) {
//     res.render("services");
// });
// app.get("/serviceForm", function(req, res) {
//     res.render("serviceForm");
// });
require("./routes/service-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});