var passport = require('passport');
var express = require('express');
var app = express();

module.exports = function(app) {
    app.post("/signIn", passport.authenticate('local', {
        successRedirect: '/services',
        failureRedirect: '/signIn',
        failureFlash: true
    }), function(req, res, info) {
        res.render('/services', { 'message': req.flash('message') });
    });

    app.get('/logout', function(req, res) {
        req.session.destroy();
        req.logout();
        res.redirect('/signIn');
    });
}