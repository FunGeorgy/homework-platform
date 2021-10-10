module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    overrides: [{
        files: ["*.js"],
        parser: "@babel/eslint-parser",
        // plugins: ["@typescript-eslint"],
        // extends: [
        //   'plugin:react/recommended',
        //   'plugin:@typescript-eslint/recommended',
        //   'plugin:prettier/recommended'
        // ]
    }],
    "rules": {}
};