const path = require('path');

module.exports = {
  entry: './jsSrc/trying.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};