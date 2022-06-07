module.exports = {
	root : true,
	env : {
		node : true,
		jest : true,
		es2020 : true
	},
	extends : [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'eslint:recommended'
	],
	ignorePatterns : ['/dist/**'],
	rules : {
		'no-console' : ['error', { allow : ['warn', 'error'] }],
		'no-debugger' : 'error',
		'no-var' : 'off',
		semi : ['error', 'always'],
		indent : [1, 'tab'],
		'space-before-function-paren' : [
			'warn',
			{
				anonymous : 'always',
				named : 'never'
			}
		],
		'key-spacing' : [
			'warn',
			{
				beforeColon : true
			}
		],
		'operator-linebreak' : ['error', 'after'],
		'no-nested-ternary' : 'error',
		quotes : ['error', 'single'],
		'arrow-parens' : ['error', 'always'],
		'react/jsx-uses-react' : 'off',
		'react/react-in-jsx-scope' : 'off',
		'no-redeclare' : 'off'
	},
	settings : {
		react : {
			version : 'detect'
		}
	},
	parser : 'babel-eslint'
};