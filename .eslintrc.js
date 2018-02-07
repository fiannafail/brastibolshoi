module.exports = {
	root: true,
	parser: 'babel-eslint',
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		"ecmaVersion": 8,
		"sourceType": "module"
	},
	extends: 'standart',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// add your custom rules here
	rules: {
		'space-before-function-paren': [
			2,
			{
				anonymous: 'always',
				named: 'never'
			}
		],
		'switch-colon-spacing': 0,
		'space-before-function-paren': 0,
		'indent': [2, "tab"],
		'no-tabs': 0,
		'no-useless-escape': 0
	},
	globals: {}
}
