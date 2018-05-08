const users = require('../models/users');

exports.signup = function(req, res) {
  users.signup(req.body, function(err, data) {
    if (err) {
      res.status(400).send({error: err});
    } else {
      res.status(201).send(data);
    }
  })
}
