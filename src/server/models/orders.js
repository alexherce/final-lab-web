const db = require('../sql/mysql.js');

function abort(connection, done, error) {
  connection.release();
  done(error);
}

function abortTransaction(connection, done, error) {
  connection.rollback(function(err) {
    if (err) return done(err);
    connection.release();
    done(error);
  });
}

function loopProducts(i, max, orderId, products, connection, done, req) {
  connection.query("SELECT id, stock, price FROM products WHERE id = '" + products[i].id + "'", function (err, rows) {
    if (err) return abortTransaction(connection, done, err);
    if (!rows.length) return abortTransaction(connection, done, 'No product found');
    if (rows[0].stock <= 0 && rows[0].stock < products[i].quantity) return abortTransaction(connection, done, 'Not enough stock for product id: ' + products[i].id);

    let total = rows[0].price * products[i].quantity;

    connection.query("UPDATE products SET stock = stock - " + products[i].quantity + " WHERE id = '" + products[i].id + "'", function (err, resultUpdateStock) {
      if (err) return abortTransaction(connection, done, err);
      if (!resultUpdateStock.changedRows) return abortTransaction(connection, done, 'Error while removing product from stock');

      connection.query("INSERT INTO orders_products (product_id, order_id, quantity, price) VALUES (" + products[i].id + ", " + orderId + ", " + products[i].quantity + ", " + total + ")", function (err, resultInsertOrderProducts) {
        if (err) return abortTransaction(connection, done, err);
        if (!resultInsertOrderProducts.insertId) return abortTransaction(connection, done, 'Failed adding product to order');

        connection.query("UPDATE orders SET total = total + " + total + " WHERE id = " + orderId + "", function (err, resultUpdateTotal) {
          if (err) return abortTransaction(connection, done, err);
          if (!resultUpdateTotal.changedRows) return abortTransaction(connection, done, 'Error while updating order total');

          if(i == max) {
            connection.commit(function(errs) {
              connection.release();
              if (errs) return done(errs);
              req.session.cart = [];
              done(null, {success: true, cart: req.session.cart, orderId: orderId});
            });
          } else {
            loopProducts(i + 1, max, orderId, products, connection, done, req);
          }
        });
      });
    });
  });
}

exports.new = function(req, done) {
  if (!req.session.userId) return done('User not found');
  if (!req.body.products.length > 0) return done('Missing parameter: products');
  let products = req.body.products;

  db.get(db.WRITE, function(err, connection) {
    if (err) return abort(connection, done, err);

    connection.beginTransaction(function(err) {
      if (err) return abortTransaction(connection, done, err);

      connection.query("INSERT INTO orders (user, address_1, address_2, city, state, country, postal_code) VALUES ('" + req.session.userId + "', '" + req.body.address_1 + "', '" + req.body.address_2 + "', '" + req.body.city + "', '" + req.body.state + "', '" + req.body.country + "', '" + req.body.postal_code + "')", function (err, result) {
        if (err) return abortTransaction(connection, done, err);
        if (!result.insertId) return abortTransaction(connection, done, 'Error while creating order');

        loopProducts(0, products.length - 1, result.insertId, products, connection, done, req);
      });
    });
  });
}

exports.get = function(userId, orderId, done) {
  db.get(db.READ, function(err, connection) {
    if (err) return abort(connection, done, err);

    connection.query("SELECT * FROM orders WHERE user = " + userId + " AND id = " + orderId + "", function (err, orderRows) {
      if (err) return abort(connection, done, err);
      if (!orderRows.length) return abort(connection, done, 'No order found');

      connection.query("SELECT p.name, p.description, p.price AS unit_price, p.currency, p.image, op.quantity, op.price FROM products AS p LEFT OUTER JOIN orders_products AS op ON p.id = op.product_id LEFT OUTER JOIN orders AS o ON op.order_id = o.id WHERE o.user = " + userId + " AND op.order_id = " + orderId + "", function (err, productsRows) {
        if (err) return abort(connection, done, err);
        if (!productsRows.length) return abort(connection, done, 'No orders found');

        done(null, {order: orderRows[0], products: productsRows});
      });
    });
  });
}

exports.getAll = function(userId, done) {
  db.get(db.READ, function(err, connection) {
    if (err) return abort(connection, done, err);

    connection.query("SELECT * FROM orders WHERE user = " + userId + "", function (err, rows) {
      if (err) return abort(connection, done, err);
      if (!rows.length) return abort(connection, done, 'No orders found');

      done(null, rows);
    });
  });
}

exports.getOrderProducts = function(userId, orderId, done) {
  db.get(db.READ, function(err, connection) {
    if (err) return abort(connection, done, err);

    connection.query("SELECT p.name, p.description, p.price, p.currency, op.quantity FROM products AS p LEFT OUTER JOIN orders_products AS op ON p.id = op.product_id LEFT OUTER JOIN orders AS o ON op.order_id = o.id WHERE o.user = " + userId + " AND op.order_id = " + orderId + "", function (err, rows) {
      if (err) return abort(connection, done, err);
      if (!rows.length) return abort(connection, done, 'No orders found');

      done(null, rows);
    });
  });
}
