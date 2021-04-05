const path = require('path');


function viewPath(view) {
  const base = '../public/';
  return path.join(__dirname, base, view);
}

module.exports = {
  viewPath,
};
