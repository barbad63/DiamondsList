var db = require("../models");

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
                password: req.body.password
            }
        }).then(function(dbUser) {
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
        console.log(req);
        db.User.create(req.body, { 
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

};