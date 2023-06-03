const path = require('path');
module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
     assetModuleFilename: "[name][ext]"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource'
      }
    ]
  }
};
