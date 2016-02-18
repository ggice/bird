var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, "dist"),
		publicPath: "dist/",
    filename: 'build.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue-loader'}
    ]
  }
};
