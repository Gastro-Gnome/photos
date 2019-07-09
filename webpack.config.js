const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
<<<<<<< HEAD
=======
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
>>>>>>> 3a840249ad8fbc4a24f4e9051478e93d5e03744d
        },
      },
    ],
  },
};
