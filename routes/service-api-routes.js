var db = require("../models");


module.exports = function(app) {

    // GET route for getting all of the posts
    app.get("/api/services", function(req, res) {
        var query = {};
        if (req.query.userid) {
            query.UserId = req.query.userid;
        }

        db.Service.findAll({
            where: query,
            include: [db.User]
        }).then(function(dbPost) {
            res.json(dbService);
        });
    });

    app.get("/api/services/:category", function(req, res) {
        

        db.Service.findAll({
            where: {
                category: req.params.category
            },
            // include: [db.User]
        }).then(function(dbPost) {

            // var handlebars = {services: dbPost};
            // res.render("category", handlebars );
            res.json(dbPost);


        });
    });



    app.post("/api/services", function(req, res) {
        db.Service.create(req.body).then(function(dbService) {
            res.json(dbService);
        });
    });


    app.delete("/api/services/:id", function(req, res) {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbService) {
            res.json(dbService);
        });
    });


    app.put("/api/services", function(req, res) {
        db.Service.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(dbService) {
            res.json(dbService);
        });
    });
};