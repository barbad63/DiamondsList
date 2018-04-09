// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // Routes
    app.get("/", function(req, res) {
        res.render("home");
    });
    app.get("/signIn", function(req, res) {
        res.render("signIn", { 'message': req.flash('message') });
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
    app.get("/category", function(req, res) {
        res.render("category");
    });
    app.get("/services/:category", function(req, res) {
        db.Service.findAll({
            where: {
                category: req.params.category
            },
        }).then(function(dbPost) {
            console.log(dbPost);
            var handlebars = { services: dbPost };
            res.render("category", handlebars);


        });
    });
};