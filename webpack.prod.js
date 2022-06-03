const TerserPlugin = require('terser-webpack-plugin'),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	{ merge } = require('webpack-merge'),
	common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [
			// CSS, PostCSS, and Sass
			{
				test: /\.s?[ac]ss|css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		})
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin()
		]
	}
})
