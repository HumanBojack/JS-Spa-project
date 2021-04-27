const path = require('path');
module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: ''
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 1234
	},
	mode: 'development'
}
// On a pas encore mis dotenv pour avoir la variable d'environnement, une fois qu'elle sera là, on pourra faire un minimize si prod
// Pour faire un serveur, il suffit de mettre le html dans les plugins pour qu'il soit chargé par webpack.