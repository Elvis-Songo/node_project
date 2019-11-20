const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
const isDevServer = process.argv.find(v => v.includes('webpack-dev-server'));


module.exports = {
	context: __dirname,
	devServer: {
		compress: true,
		inline: true,
		historyApiFallback: true,
		host: 'local.example.com',
		https: true,
		disableHostCheck: true,
		port: 80,
		open: true
	},
	entry: './src/index.js',
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'main.js',
		publicPath: '/',
	},
    resolve: {
        alias: {
                'settings': isDevServer ? path.resolve(__dirname, 'src', 'settings.js') : path.resolve(__dirname, 'src', 'settings-prod.js')
            }
    },
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
			},
			{
				test: /\.css?$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|j?g|svg|gif)?$/,
				use: 'file-loader'
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
		})
	],
};
