var express    = require('express');
var path       = require("path");
var app        = express();

var bodyParser = require('body-parser');
var logger     = require('morgan');
var mongoose   = require('mongoose');

// DB Stuff.

const database = require('./app/config/database.js');
mongoose.connect(database.url);
mongoose.connection.on('error', function() {
  console.info("Could not run mongodb, did you forget to run mongod?");
});

// Middleware stuff.

app.use(logger('dev'));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'web')));


app.all('/*', function(req, res, next){
  // Allows cross site scripting.
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,OPTIONS');
  // Set Custom Headers
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  next();
})


// Routing stuff.

// Load our routes here.
var routes = require('./app/routes');
app.use('/', routes);

// Watch the magic happen... (Starting the actual HTTP(S) server).
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
