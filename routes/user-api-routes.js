var db = require("../models");
var crypto = require('crypto');

module.exports = function(app) {
    app.get("/api/users", function(req, res) {

        db.User.findAll({
            //         include: [db.Service]
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.post("/api/signin", function(req, res) {

        db.User.findOne({
            where: {
                email: req.body.email,
                password: encryptPassword(req.body.password)
            }
        }).then(function(dbUser) {
            console.log(dbUser);
            res.json(dbUser);
        });
    });


    app.get("/api/users/:id", function(req, res) {

        db.User.findOne({
            where: {
                id: req.params.id
            },
            //          include: [db.Service]
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.post("/api/users", function(req, res) {

        // console.log(req);
        // encrypt password in req.boy

        var incoming = req.body;
        incoming["password"] = encryptPassword(incoming.password);

        db.User.create(incoming, {
            //           include: [db.Service] 
        }).then(function(dbUser) {
            console.log(dbUser);
            res.json(dbUser);
        });
    });

    app.delete("/api/users/:id", function(req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    var encryptPassword = function(passwd) {
        //which is use to encrypt the password
        var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';
        salt = salt + '' + passwd;
        var encPassword = crypto.createHash('sha1').update(salt).digest('hex');

        return encPassword;
    }

};