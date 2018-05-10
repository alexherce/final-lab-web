const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');

const categories = require('../controllers/categories');
const users = require('../controllers/users');
const products = require('../controllers/products');
const orders = require('../controllers/orders');

function loggedIn(session) {
  if (session.userId && (session.auth == session.id)) return true;
  return false;
}

// ----- CATEGORIES -----
router.get('/categories', function(req, res, next) {
  categories.get(req, res);
});

router.get('/categories/:catId', function(req, res, next) {
  categories.get(req, res);
});

// ----- USERS -----
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

// ----- PRODUCTS -----
router.get('/products', function(req, res, next) {
  products.getAll(req, res);
});

router.get('/products/category/:catId', function(req, res, next) {
  products.filterCategory(req, res);
});

router.get('/products/:prodId', function(req, res, next) {
  products.get(req, res);
});

// ----- ORDERS -----
router.post('/orders/new', function(req, res, next) {
  orders.new(req, res);
});

router.get('/orders', function(req, res, next) {
  orders.getAll(req, res);
});

router.get('/orders/:ordId', function(req, res, next) {
  orders.get(req, res);
});

router.get('/orders/:ordId/products', function(req, res, next) {
  orders.getOrderProducts(req, res);
});

router.get('/session/get', function(req, res, next) {
  if(loggedIn(req.session)) {
    res.status(200).send({
      userId: req.session.userId,
      userInfo: req.session.userInfo,
      cartItems: req.session.cart.length
    });
  } else {
    res.status(401).send({error: 'User not logged in'});
  }
});

router.post('/session/cart/add', function(req, res, next) {
  if(loggedIn(req.session)) {
      let cartId = req.session.cart.findIndex(x => x.id === req.body.id);
      if (cartId >= 0) {
        req.session.cart[cartId].quantity += req.body.quantity;
      } else {
        req.session.cart.push({
          id: req.body.id,
          quantity: req.body.quantity,
          name: req.body.name,
          price: req.body.price,
          image: req.body.image
        });
      }
    res.status(200).send({ success: true });
  } else {
    res.status(401).send({error: 'User not logged in'});
  }
});

router.post('/session/cart/update', function(req, res, next) {
  if(loggedIn(req.session)) {
      let cartId = req.session.cart.findIndex(x => x.id === req.body.id);
      if (cartId >= 0) {
        req.session.cart[cartId].quantity = req.body.quantity;
        if (req.body.quantity <= 0) req.session.cart.splice(cartId, 1);
      } else {
        if(req.body.quantity > 0) {
          req.session.cart.push({
            id: req.body.id,
            quantity: req.body.quantity,
            name: req.body.name,
            price: req.body.price,
            image: req.body.image
          });
        }
      }
    res.status(200).send({ success: true, cart: req.session.cart });
  } else {
    res.status(401).send({error: 'User not logged in'});
  }
});

router.get('/session/cart/get', function(req, res, next) {
  if(loggedIn(req.session)) {
    res.status(200).send({ cart: req.session.cart });
  } else {
    res.status(401).send({error: 'User not logged in'});
  }
});

// ----- TESTING AND DEBUGGING -----
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
    res.send({error: 'not logged in'});
  }
});

module.exports = router;
