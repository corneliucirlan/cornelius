const path = require('path'),
	webpack = require('webpack'),
	{ merge } = require('webpack-merge'),
	common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, './dist'),
		open: true,
		compress: true,
		hot: true,
		port: 8080,
	},
	module: {
		rules: [
			// CSS, PostCSS, and Sass
			{
				test: /\.s?[ac]ss|css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			},
		]
	},
	plugins: [
	    new webpack.HotModuleReplacementPlugin()
	]
})
