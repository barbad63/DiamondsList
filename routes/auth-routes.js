// Database
var db = require("../models");

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


// Authentication Routes
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