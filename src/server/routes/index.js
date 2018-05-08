const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');

const categories = require('../controllers/categories');
const users = require('../controllers/users');

function loggedIn(session) {
  if (session.userId && (session.auth == session.id)) return true;
  return false;
}

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

router.post('/users/login', function(req, res, next) {
  users.login(req, res);
});

router.post('/users/logout', function(req, res, next) {
  users.logout(req, res);
});

router.get('/users/verify', function(req, res, next) {
  users.getUserSession(req, res);
});


// TESTING AND DEBUGGING
router.get('/testing/session/destroy', function(req, res, next) {
  req.session.destroy(function(err) {
    // cannot access session here
    res.send('done');
  })
});

router.get('/testing/session/get', function(req, res, next) {
  if(loggedIn(req.session)) {
    res.send(req.session.userId.toString());
  } else {
    res.send('not logged in');
  }
});

router.get('/testing/session/create', function(req, res, next) {
  req.session.success = 'true';
  res.send(req.session.id);
});

module.exports = router;
