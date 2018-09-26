'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const ENV_TYPE = process.env.NODE_ENV

// 静态资源的CDN地址配置
const assetsPublicPathLists = {
	dev: '/',
	test: 'https://image0.cdn.cn/',	// 测试环境CDN地址(必须以/结束)
	beta: 'https://image0-test.cdn.cn/',	// 内侧环境CDN地址(必须以/结束)
	prod: 'https://static0.cdn.cn/'	// 线上正式环境CDN地址(必须以/结束)
}
const assetsPublicPath = assetsPublicPathLists[ENV_TYPE]
// 静态资源存放目录
const assetsSubDirectory = 'static'

console.log('**********************************************************')
console.log('当前打包环境为：' + ENV_TYPE)
console.log('当前静态资源 CDN 地址为：' + assetsPublicPath)
console.log('编译输出的静态资源目录名为：' + assetsSubDirectory)
console.log('**********************************************************')

module.exports = {
	dev: {	// development环境
		assetsSubDirectory: assetsSubDirectory,
		assetsPublicPath: '/',
		// proxyTable: {
		// 	'/api': {
		// 		target: 'http://73f4a40d.ngrok.io', //这里最后面不用加/
		// 		pathRewrite: { '^/api': '' }
		// 	}
		// },

		// Various Dev Server settings
		host: '0.0.0.0', // can be overwritten by process.env.HOST
		port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
		autoOpenBrowser: false,
		errorOverlay: true,
		notifyOnErrors: true,
		poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

		// Use Eslint Loader?
		// If true, your code will be linted during bundling and
		// linting errors and warnings will be shown in the console.
		useEslint: true,
		// If true, eslint errors and warnings will also be shown in the error overlay
		// in the browser.
		showEslintErrorsInOverlay: false,

		/**
		 * Source Maps
		 */

		// https://webpack.js.org/configuration/devtool/#development
		devtool: 'cheap-module-eval-source-map',

		// If you have problems debugging vue-files in devtools,
		// set this to false - it *may* help
		// https://vue-loader.vuejs.org/en/options.html#cachebusting
		cacheBusting: true,

		cssSourceMap: true
	},

	build: {	// production 环境
		index: path.resolve(__dirname, '../dist/index.html'),	// 编译输入的 index.html 文件
		assetsRoot: path.resolve(__dirname, '../dist'), // 编译输出的项目根目录
		assetsSubDirectory: assetsSubDirectory,	// 编译输出的静态资源目录
		assetsPublicPath: assetsPublicPath,	// 编译发布的根目录，可配置为资源服务器域名或 CDN 域名

		productionSourceMap: true,	// 是否开启 cssSourceMap
		// https://webpack.js.org/configuration/devtool/#production
		devtool: '#source-map',

		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: false,	// 是否开启 gzip
		productionGzipExtensions: ['js', 'css'], // 需要使用 gzip 压缩的文件扩展名

		// Run the build command with an extra argument to
		// View the bundle analyzer report after build finishes:
		// `npm run build --report`
		// Set to `true` or `false` to always turn it on or off
		bundleAnalyzerReport: process.env.npm_config_report
	}
}
