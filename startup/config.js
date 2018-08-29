const config = require('config');

module.exports = function() {
  if (!config.get('jwtPrivateKeyTK')) {
    throw new Error('FATAL ERROR: jwtPrivateKeyTK is not defined.');
  }
}