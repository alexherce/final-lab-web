const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookeParser =  require('cookie-parser');
const session = require('express-session');
const uuidv4 = require('uuid/v4');
const os = require('os');

const db = require('./sql/mysql');
const routes = require('./routes/index');

const app = express();

// Connect to MySQL on start
db.connect(db.MODE_PRODUCTION, function(err) {
  if (err) {
    console.log('ERROR: Unable to connect to MySQL!')
  } else {
    console.log('Connected to MySQL...')
  }
})

app.use(express.static('dist'));
app.use(cookeParser());

app.use(session({
  genid: function(req) {
    return uuidv4(); // use UUIDs for session IDs
  },
  secret: 'a really very cool super store',
  name: 'id',
  saveUninitialized: false
}));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Add routes
app.use('/api/', routes);

app.listen(8080, () => console.log('Listening on port 8080!'));
