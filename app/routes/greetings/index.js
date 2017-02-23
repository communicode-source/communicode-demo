var greetings = require('express').Router();

greetings.route('/hello')

  .get((req, res) => {
    res.status(200).json({message: "Hello, World!"});
  });

greetings.route('/:id')

  .get((req, res) => {
    var id = req.params.id;
    res.status(200).json({ id: id, name: "Hello" });
  });

module.exports = greetings;
