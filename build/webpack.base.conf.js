'use strict'
const path = require('path')
const config = require('../config')

function resolve (dir) {
	return path.join(__dirname, '..', dir)
}
// js|vue 文件 eslint 规则配置
const createLintingRule = () => ({
	test: /\.(js|vue)$/,
	loader: 'eslint-loader',
	enforce: 'pre',
	include: [resolve('src'), resolve('test')],
	options: {
		formatter: require('eslint-friendly-formatter'),
		emitWarning: !config.dev.showEslintErrorsInOverlay
	}
})

module.exports = {
	// resolve 合并路径
	context: path.resolve(__dirname, '../'),
	// 入口配置
	entry: {
		app: './src/index.js'
	},
	// 出口配置
	output: {
		// path 绝对路径 __dirname:项目的绝对目录
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: process.env.NODE_ENV !== 'dev'
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath
	},
	// 配置查找模块的路径和扩展名和别名
	resolve: {
		extensions: ['.js', '.html', '.json', '.scss', '.css'],
		alias: {
			'@': resolve('src'),
			'images': resolve('src/assets/images')
		}
	},
	// 加载器配置
	module: {
		rules: [
			...(config.dev.useEslint ? [createLintingRule()] : []),
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
			},
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				test: /\.(jpg|png|ico|jpeg|gif)$/,
				use: [{
					loader: 'file-loader',
					options: {
						path: config.build.assetsRoot,
						name: '[name].[ext]',
						publicPath: `${process.env.NODE_ENV !== 'dev'
							? config.build.assetsPublicPath
							: config.dev.assetsPublicPath}${process.env.NODE_ENV !== 'dev'
							? config.build.assetsSubDirectory
							: config.dev.assetsSubDirectory}/images/`,
						outputPath: `${process.env.NODE_ENV !== 'dev'
							? config.build.assetsSubDirectory
							: config.dev.assetsSubDirectory}/images/`
					}
				}]
			},
			{
				test: /\.(eot|svg|ttf|woff)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						publicPath: `${process.env.NODE_ENV !== 'dev'
							? config.build.assetsPublicPath
							: config.dev.assetsPublicPath}${process.env.NODE_ENV !== 'dev'
							? config.build.assetsSubDirectory
							: config.dev.assetsSubDirectory}/fonts/`,
						outputPath: `${process.env.NODE_ENV !== 'dev'
							? config.build.assetsSubDirectory
							: config.dev.assetsSubDirectory}/fonts/`
					}
				}]
			},
			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
					options: {
						minimize: true
					}
				}]
			}
		]
	},
	node: {
		// prevent webpack from injecting useless setImmediate polyfill because Vue
		// source contains it (although only uses it if it's native).
		setImmediate: false,
		// prevent webpack from injecting mocks to Node native modules
		// that does not make sense for the client
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	}
}
