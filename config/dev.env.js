'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
	NODE_ENV: '"dev"',
	/* api 接口地址 */
	BASE_URL: '"https://test-api.com"'
})
