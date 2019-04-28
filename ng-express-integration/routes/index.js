var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send("We are at the index page for customers");
});

module.exports = router;
