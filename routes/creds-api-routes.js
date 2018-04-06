var db = require("../models");

module.exports = function(app) {
    app.get("/api/creds", function(req, res) {
        db.Creds.findOne({
            include: [db.Service]
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.get("/api/creds/:id", function(req, res) {
        db.Creds.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Service]
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.post('/api/creds', function(req, res) {
        db.Creds.create(req.body)
            .then(function(data) {
                console.log('Created a new row in creds');
                res.json(data);
            });
    });

};