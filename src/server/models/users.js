const db = require('../sql/mysql.js');

function abort(connection, done, error) {
  connection.release();
  done(error);
}

exports.signup = function(body, done) {
  if (!body.email) return done('Missing required field: email');
  if (!body.name) return done('Missing required field: name');
  if (!body.last_name) return done('Missing required field: last_name');
  if (!body.password) return done('Missing required field: password');

  db.get(db.WRITE, function(err, connection) {
    if (err) return abort(connection, done, err);

    connection.query("SELECT id FROM users WHERE email = '" + body.email + "'", function (err, rows) {
      if (err) return abort(connection, done, err);
      if (rows.length) return abort(connection, done, 'Email already registered');

      connection.query("INSERT INTO users (name, last_name, email, password) VALUES ('" + body.name + "', '" + body.last_name + "', '" + body.email + "', '" + body.password + "')", function (err, result) {
        connection.release();
        if (err) return done(err);
        if (!result) return done('Signup Failed');
        done(null, {userId: result.insertId});
      });
    });
  });
}

exports.login = function(body, sessionId, done) {
  if (!body.email) return done('Missing required field: email');
  if (!body.password) return done('Missing required field: password');
  if (!sessionId) return done('Missing required field: sessionId');

  db.get(db.WRITE, function(err, connection) {
    if (err) return abort(connection, done, err);

    connection.query("SELECT id, name, last_name FROM users WHERE email = '" + body.email + "' AND password = '" + body.password + "'", function (err, rows) {
      if (err) return abort(connection, done, err);
      if (!rows.length) return abort(connection, done, 'Incorrect login credentials');

      connection.query("UPDATE users SET session = '" + sessionId + "' WHERE id = '" + rows[0].id + "'", function (err, result) {
        connection.release();
        if (err) return done(err);
        if (!result) return done('Login Session Failed');
        done(null, {
          success: true,
          id: rows[0].id,
          name: rows[0].name,
          last_name: rows[0].last_name
        });
      });
    });
  });
}

exports.getUserSession = function(sessionId, done) {
  if (!sessionId) return done('Missing required field: sessionId');

  db.get(db.READ, function(err, connection) {
    if (err) return abort(connection, done, err);

    connection.query("SELECT id, name, last_name, email FROM users WHERE session = '" + sessionId + "'", function (err, rows) {
      if (err) return abort(connection, done, err);
      if (!rows.length) return abort(connection, done, 'User not found');

      done(null, {
        success: true,
        id: rows[0].id,
        email: rows[0].email,
        name: rows[0].name,
        last_name: rows[0].last_name
      });
    });
  });
}
