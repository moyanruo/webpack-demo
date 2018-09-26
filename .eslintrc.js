module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'module',
		parser: 'babel-eslint'
	},
	extends: [
		'standard'
	],
	plugins: [
		'html'
	],
	env: {
		browser: true,
		jquery: true,
		es6: true,
		commonjs: true
	},
	rules: {
		// allow async-await
		'generator-star-spacing': 'off',
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV !== 'dev' ? 'error' : 'off',
		'no-tabs': 'off',
		'indent': ['error', 'tab'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'never']
	}
}
