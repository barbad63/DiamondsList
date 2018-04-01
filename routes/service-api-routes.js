// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/services", function(req, res) {
    var query = {};
    if (req.query.userid) {
      query.UserId = req.query.userid;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Service.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbPost) {
      res.json(dbService);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/services/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbService) {
      res.json(dbService);
    });
  });

  // POST route for saving a new post
  app.post("/api/services", function(req, res) {
    db.Service.create(req.body).then(function(dbService) {
      res.json(dbService);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbService) {
      res.json(dbService);
    });
  });

  // PUT route for updating posts
  app.put("/api/services", function(req, res) {
    db.Service.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbService) {
      res.json(dbService);
    });
  });
};
