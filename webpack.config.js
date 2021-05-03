const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');
module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: ''
	},
	plugins: [
	new HtmlWebPackPlugin({
		template: './src/index.html',
		filename: './index.html'
	}),
	new MiniCssExtractPlugin({
		filename: 'bundle.css'
	}),
	new Dotenv()],
	module: {
		rules: [
		{
			test: /\.html$/,
			use: [
			{
				loader: 'html-loader',
				options: { 
					minimize: process.env.NODE_ENV != 'development',
				},

			}]
		},
		{
			test: /\.(sa|sc|c)ss$/,
			use: [
				{
					loader: MiniCssExtractPlugin.loader,
				},
				{
					loader: 'css-loader'
				},
				{
					loader: 'postcss-loader'
				},
				{
					loader: 'sass-loader',
					options: {
						implementation: require('sass')
					}
				}
			]
		},
		{
			test: /\.(woff2?|ttf|otf|eot)$/,
			use: [
			{
				loader: 'file-loader',
				options: {
					outputPath: 'fonts'
				}
			}]
		}]
	},
	resolve: {
		alias: {
			images: path.resolve(__dirname, 'dist/images')
		}
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 1234
	},
	mode: 'development'
}
// On a pas encore mis dotenv pour avoir la variable d'environnement, une fois qu'elle sera là, on pourra faire un minimize si prod
