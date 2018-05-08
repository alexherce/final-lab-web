var categories = require('../models/categories');

exports.getAll = function(req, res) {
  categories.getAll(function(err, data) {
    if (err) {
      res.send({error: err});
    } else {
      res.send(data);
    }
  })
}

exports.get = function(req, res) {
  categories.get(req.params.catId, function(err, data) {
    if (err) {
      res.send({error: err});
    } else {
      res.send(data);
    }
  })
}
