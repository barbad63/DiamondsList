var db = require("../models");
require("dotenv").config();
var mailgun = require("mailgun-js");
const keys = require('../keys.js');
var gkeys = keys.email;
var api_key = gkeys.email_priv_key;
var DOMAIN = gkeys.domain
console.log(api_key, DOMAIN);

var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

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
        }).then(function(dbService) {
            res.json(dbService);
        });
    });

    app.post("/api/services/mail", function(req, res) {

    mailgun.messages().send(req.body, function (error, body) {
      if(error){
        console.log(error);
      }else{
        console.log(body);
        res.sendStatus(200);
      }

    });
       // require('../mailgun.js')(req.body),function(err, data){
       //      if (err) throw err
       //      // res.sendStatus(200);
       //      res.json(data);
       // };
       // console.log(res.headersSent);

    });

    app.get("/api/services/:id", function(req, res) {

        db.Post.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(function(dbService) {
            res.json(dbService);
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