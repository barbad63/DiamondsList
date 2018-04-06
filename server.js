// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

var logger = require('morgan');
var cookieParser = require('cookie-parser');

// For login using passport
var flash = require('connect-flash');
var crypto = require('crypto');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// var connection        = require('./lib/dbconn');
var sess = require('express-session');
var Store = require('express-session').Store;
var BetterMemoryStore = require(__dirname + '/memory');

var store = new BetterMemoryStore({ expires: 60 * 60 * 1000, debug: true })

var db = require("./models");


// Create an instance of the express app.
var app = express();
// Set the port of our application
// process.env.PORT lets the port be set by Heroku

// Creating a session store
app.use(sess({
    name: 'JSESSION',
    secret: 'MYSECRETISVERYSECRET',
    store: store,
    resave: true,
    saveUninitialized: true
}));

app.use(logger('dev'));
app.use(cookieParser());

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

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Error handling middleware
app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});


// passport Strategy -- the express session middleware before calling passport.session()
passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true //passback entire req to call back
}, function(req, username, password, done) {
    console.log(username + ' = ' + password);
    if (!username || !password) { return done(null, false, req.flash('message', 'All fields are required.')); }
    var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';
    // connection.query("select * from tbl_users where username = ?", [username],
    db.Creds.findAll({ where: { "username": username } }).then(
        function(rows, err) {
            console.log("Error Occured while retrieving user creds = " + JSON.stringify(err));
            console.log("Returned rows = " + rows);

            if (err) return done(req.flash('message', err));

            if (!rows.length) { return done(null, false, req.flash('message', 'Invalid username or password.')); }
            salt = salt + '' + password;
            var encPassword = crypto.createHash('sha1').update(salt).digest('hex');
            var dbPassword = rows[0].password;

            if (!(dbPassword == encPassword)) {
                return done(null, false, req.flash('message', 'Invalid username or password.'));
            }
            req.session.user = rows[0];
            return done(null, rows[0]);
        });
}));

passport.serializeUser(function(user, done) {
    console.log("Inside serializeUser");
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    // connection.query("select * from tbl_users where id = " + id, 
    db.Creds.findAll({ where: { id: id } }).then(
        function(rows, err) {
            console.log("Inside deserializeUser");
            console.log("rows = " + rows);
            done(err, rows[0]);
        });
});


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


require("./routes/service-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/creds-api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});