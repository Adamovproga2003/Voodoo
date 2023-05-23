const webpack = require('webpack')

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ['@svgr/webpack'],
			},
		],
	},
}
