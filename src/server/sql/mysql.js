var mysql = require('mysql')
var async = require('async')


// MySQL setup for multiple connections.
exports.MODE_PRODUCTION = 'mode_production'

var state = {
  pool: null,
  mode: null,
}

// Configure this settings:
var PRODUCTION_DB = 'marshel'

exports.connect = function(mode, done) {
  if (mode === exports.MODE_PRODUCTION) {
    state.pool = mysql.createPoolCluster()

    state.pool.add('WRITE', {
      host: 'localhost',
      user: 'lol1',
      password: '0V0VpXySZPu3T54n',
      database: PRODUCTION_DB
    })

    state.pool.add('READ1', {
      host: 'localhost',
      user: 'lol2',
      password: '75N2Ts6APmPWaOs5',
      database: PRODUCTION_DB
    })
  }

  state.mode = mode
  done()
}

exports.READ = 'read'
exports.WRITE = 'write'

// Do not change this functions
exports.get = function(type, done) {
  var pool = state.pool;
  if (!pool) return done(new Error('Missing database connection.'));

  if (type === exports.WRITE) {
    state.pool.getConnection('WRITE', function (err, connection) {
      if (err) return done(err);
      done(null, connection);
    });
  } else {
    state.pool.getConnection('READ*', function (err, connection) {
      if (err) return done(err);
      done(null, connection);
    });
  }
}
