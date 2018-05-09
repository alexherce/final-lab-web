const products = require('../models/products');

exports.get = function(req, res) {
  products.get(req.params.prodId, function(err, data) {
    if (err) {
      res.status(400).send({error: err});
    } else {
      res.status(200).send(data);
    }
  })
}

exports.getAll = function(req, res) {
  products.getAll(function(err, data) {
    if (err) {
      res.status(400).send({error: err});
    } else {
      res.status(200).send({products: data});
    }
  })
}

exports.filterCategory = function(req, res) {
  products.categoryGet(req.params.catId, function(err, data) {
    if (err) {
      res.status(400).send({error: err});
    } else {
      res.status(200).send({products: data});
    }
  })
}
