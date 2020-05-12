module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true,
        "es2017": true,
        "es2020": true,
        "mocha": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:mocha/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:node/recommended",
        "plugin:promise/recommended",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "plugins": [
        "mocha",
        "import",
        "node",
        "promise"
    ],
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "no-unused-vars": "warn",
        "no-empty": "warn",
        "node/no-extraneous-require": "off",
        "node/no-unpublished-require": "off",
        "no-var":"error",
        // "prefer-const":"error"
    }
}
