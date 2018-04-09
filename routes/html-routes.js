// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
var distance = require('google-distance-matrix');
 
var origins = [];
var destinations = [];

distance.key('AIzaSyB7IbCi0i2EWogF8E-vef7-7BSDgl0ieGA');
distance.units('imperial');

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
    app.get("/terms", function(req, res) {
        res.render("terms");
    });
    app.get("/category", function(req, res) {
        res.render("category");
    });
    app.get("/services/:category", function(req, res) {
        db.Service.findAll({
            where: {
            category: req.params.category
        },
        include: [db.User]
        }).then(function(dbPost){ 
            // console.log (dbPost);
            // var UsrAddr = sessionStorage.getItem('address') + ", ";
            // UsrAddr += sessionStorage.getItem('city') + ", ";
            // UsrAddr += sessionStorage.getItem('state') + ", ";
            // UsrAddr += sessionStorage.getItem('zipcode');
            // console.log("\n\nUsrAddr: " + UsrAddr + "\n\n");

            return dbPost.map(function(dbGet) { 
                console.log(dbGet.getValues());

                var elem = dbGet.getValues();
                elem.distance = "17 miles";
            console.log (elem.User.address + ", " + elem.User.city + ", " + elem.User.state + ", " + elem.User.zipcode);
                return elem;
                // var handlebars = {services: dbGet};
                // res.render("category", handlebars );
 
            }); 
        }).then(function(dbPost) {
            console.log("DJB\n\n")
            console.log (dbPost);
            // console.log ("DJB ", dbPost[0]);
            var handlebars = {services: dbPost};
            res.render("category", handlebars );

        });

        // res.render("services");
    });
};