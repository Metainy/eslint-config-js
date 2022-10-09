const base = require("./lib/base.js");
const imports = require("./lib/imports.js");

module.exports = {
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es2021: true
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    extends: ["airbnb-base"],
    rules: {
        ...base,
        ...imports
    }
};
