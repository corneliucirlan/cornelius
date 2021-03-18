const path = require('path'),
	webpack = require('webpack'),
	HTMLWebpackPlugin = require('html-webpack-plugin'),
	FaviconsWebpackPlugin = require('favicons-webpack-plugin'),
	autoprefixer = require("autoprefixer")

module.exports = {
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
			filename: 'index.html'
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					autoprefixer()
				],
			},
		}),
		new FaviconsWebpackPlugin(path.resolve(__dirname, './src/img/logo.svg'))
	],

	module: {
		rules: [
			// Javascript
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']	
			},

			// Images
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},

			// Fonts and SVGs
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
		]
	}
}
