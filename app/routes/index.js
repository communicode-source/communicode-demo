const routes = require('express').Router();
const users  = require('./users');

routes.use('/api/', users);

routes.get('/', (req, res) => {
  res.status(200).renderFile('test.html');
});

// More routing.
routes.get('/api', (req, res) => {
  res.status(200).json({ message: 'Connection Made!' });
});

module.exports = routes;
