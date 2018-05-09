const db = require('../sql/mysql.js');

function abort(connection, done, error) {
  connection.release();
  done(error);
}

exports.get = function(prodId, done) {
  if(!prodId) return abort(connection, done, 'Missing parameter: productId');

  db.get(db.READ, function(err, connection) {
    if (err) return abort(connection, done, err);

    connection.query("SELECT * FROM products WHERE id = '" + prodId + "'", function (err, rows) {
      if (err) return abort(connection, done, err);
      if (!rows.length) return abort(connection, done, 'No product found');

      done(null, rows[0]);
    });
  });
}

exports.getAll = function(done) {
  db.get(db.READ, function(err, connection) {
    if (err) return abort(connection, done, err);

    connection.query("SELECT * FROM products", function (err, rows) {
      if (err) return abort(connection, done, err);
      if (!rows.length) return abort(connection, done, 'No products found');

      done(null, rows);
    });
  });
}

exports.categoryGet = function(catId, done) {
  if(!catId) return abort(connection, done, 'Missing parameter: category');
  db.get(db.READ, function(err, connection) {
    if (err) return abort(connection, done, err);

    connection.query("SELECT * FROM products WHERE category = '" + catId + "'", function (err, rows) {
      if (err) return abort(connection, done, err);
      if (!rows.length) return abort(connection, done, 'No products found');

      done(null, rows);
    });
  });
}
