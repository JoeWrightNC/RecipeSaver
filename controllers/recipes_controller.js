var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var recipes = require("../models/recipes.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  recipes.selectAll(function(data) {
    var hbsObject = {
      recipes: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/recipes", function(req, res) {
  recipes.insertOne([
    "name", "url"
  ], [
    req.body.name, req.body.url
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/recipes/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  recipes.updateOne({
    url: req.body.url
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/recipes/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  cat.deleteOne(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
