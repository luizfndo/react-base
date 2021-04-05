const { viewPath } = require('../helpers');

function index(req, res) {
  res.sendFile(viewPath('index.html'));
}

module.exports = index;
