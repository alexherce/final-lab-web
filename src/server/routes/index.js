var express = require('express');
var router = express.Router();

var categories = require('../controllers/categories');

// CATEGORIES
router.get('/categories', function(req, res, next) {
  categories.get(req, res);
  // res.send({name: 'alex'});
});

router.get('/categories/:catId', function(req, res, next) {
  categories.get(req, res);
  // res.send({name: 'alex'});
});

module.exports = router;
