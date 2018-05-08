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
