const orders = require('../models/orders');

exports.new = function(req, res) {
  orders.new(req, function(err, data) {
    if (err) {
      res.status(400).send({error: err});
    } else {
      res.status(201).send(data);
    }
  })
}

exports.get = function(req, res) {
  if (!req.session.userId) return res.status(401).send({error: 'User not logged in'});

  orders.get(req.session.userId, req.params.ordId, function(err, data) {
    if (err) {
      res.status(400).send({error: err});
    } else {
      res.status(200).send(data);
    }
  })
}

exports.getAll = function(req, res) {
  if (!req.session.userId) return res.status(401).send({error: 'User not logged in'});

  orders.getAll(req.session.userId, function(err, data) {
    if (err) {
      res.status(400).send({error: err});
    } else {
      res.status(200).send({orders: data});
    }
  })
}

exports.getOrderProducts = function(req, res) {
  if (!req.session.userId) return res.status(401).send({error: 'User not logged in'});

  orders.getOrderProducts(req.session.userId, req.params.ordId, function(err, data) {
    if (err) {
      res.status(400).send({error: err});
    } else {
      res.status(200).send({products: data});
    }
  })
}
