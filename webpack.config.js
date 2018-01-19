var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/music.js',
  output: {
    filename: 'final.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  	rules: [
	  	{
	  		test: /\.css$/,
	  		use: [
		  		'style-loader',
		  		'css-loader'
	  		]
	  	}
  	]
  }
};