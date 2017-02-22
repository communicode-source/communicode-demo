const users = require('express').Router();

users.route('/hello')

  .get((req, res) => {
    res.status(200).json({ message: "Hello, World (from users)!" });
  });

users.route('/hello/new')

  .get((req, res) => {
    res.status(200).json({ message: "Hello, World (from different route)!" });
  });

module.exports = users;
