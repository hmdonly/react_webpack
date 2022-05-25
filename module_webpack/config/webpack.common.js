const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.join(__dirname, '..', 'dist')
	},
	module: {
		rules: [
		  {
			test: /\.?js$/,
			exclude: /node_modules/,
			use: {
			  loader: "babel-loader",
			  options: {
				presets: ['@babel/preset-env', '@babel/preset-react']
			  }
			}
		  },
		]
	  },
	  plugins: [
		new HtmlWebpackPlugin({
			template: path.join("src","index.html"),
		  }),
	  ],
};