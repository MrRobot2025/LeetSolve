module.exports = {
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es2021: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"no-console": "off",
		"no-unused-vars": "off",
		"react/prop-types": "off"
	},
	
};
