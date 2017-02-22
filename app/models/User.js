// app/models/User.js

// Require mongoose
var mongoose = require("mongoose");

var User = mongoose.schema({
  email: String,
  accountType: Boolean,
  fName: String
});

module.exports = mongoose.model('User', User);
