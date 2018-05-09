const db = require('../sql/mysql.js');

function abort(connection, done, error) {
  connection.release();
  done(error);
}

exports.get = function(id, done) {
  db.get(db.READ, function(err, connection) {
    if (err) return abort(connection, done, err);

    let query;

    if (id) {
      query = "SELECT * FROM categories WHERE id = '" + id + "'";
    } else {
      query = "SELECT * FROM categories";
    }

    connection.query(query, function (err, rows) {
      connection.release();
      if (err) return done(err);
      if (!rows.length) return done('Not found');
      if (rows.length > 1) return done(null, rows);
      done(null, rows[0]);
    });
  });
}
