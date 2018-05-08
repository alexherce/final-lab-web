const express = require('express');
const router = express.Router();

const categories = require('../controllers/categories');
const users = require('../controllers/users');

// CATEGORIES
router.get('/categories', function(req, res, next) {
  categories.get(req, res);
});

router.get('/categories/:catId', function(req, res, next) {
  categories.get(req, res);
});

// USERS
router.post('/users/signup', function(req, res, next) {
  users.signup(req, res);
});

module.exports = router;
