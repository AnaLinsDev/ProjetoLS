const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};


// npx webpack 
// para atualizar o bundle.js com o index.js, lib.js e cards.js