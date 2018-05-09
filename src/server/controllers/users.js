const users = require('../models/users');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pypltestmx@gmail.com',
    pass: 'Ebay2017pypl'
  }
});

var welcomeMailOptions = {
  from: '"marXel 👻" <pypltestmx@gmail.com>',
  subject: 'Welcome to marXel',
}

exports.signup = function(req, res) {
  users.signup(req.body, function(err, data) {
    if (err) {
      res.status(400).send({error: err});
    } else {
      welcomeMailOptions.to = '' + req.body.email;
      welcomeMailOptions.html = '<h1>Welcome to marXel ' + req.body.name + '!</h1><p>Your login information is:</p><p>Email: ' + req.body.email + '</p><p>Password: ' + req.body.password + '</p>';
      transporter.sendMail(welcomeMailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.status(201).send(data);
    }
  })
}

exports.login = function(req, res) {
  req.session.auth = req.session.id;
  users.login(req.body, req.session.id,  function(err, data) {
    if (err) {
      req.session.destroy();
      res.status(401).send({error: err});
    } else {
      req.session.userId = data.id;
      res.status(200).send(data);
    }
  })
}

exports.logout = function(req, res) {
  if(req.session.auth && req.session.userId) {
    req.session.destroy(function(err) {
      if (err) res.status(400).send({error: err});

      res.status(200).send({
        success: true,
        message: 'User logged out'
      });
    });
  } else {
    res.status(401).send({error: 'User not logged in'});
  }
}

exports.getUserSession = function(req, res) {
  users.getUserSession(req.session.id,  function(err, data) {
    if (err) {
      res.status(400).send({error: err});
    } else {
      res.status(200).send(data);
    }
  })
}
