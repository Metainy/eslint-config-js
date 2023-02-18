module.exports = {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "max-len": ["error", { "code": 120 }],
    "indent": ["error", 4, { "SwitchCase": 1 }],
    "quotes": ["error", "double"],
    "no-unused-vars": ["error", { vars: "all", args: "none", ignoreRestSiblings: false }],
    "one-var-declaration-per-line": "off",
    "arrow-body-style": "off",
    "no-constructor-return": "warn",
    "consistent-return": "off",
    "no-plusplus": "off",
    "quote-props": ["error", "consistent"],
    "dot-notation": "off",
    "no-template-curly-in-string": "warn",
    "no-trailing-spaces": ["error", { "skipBlankLines": true, "ignoreComments": true }],
    "no-multiple-empty-lines": ["error", { max: 2 }],
    "lines-around-comment": ["error", { "beforeBlockComment": true }],
    "padded-blocks": "off",
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "*", "next": "function" },
        { "blankLine": "always", "prev": "function", "next": "*" },
        { "blankLine": "always", "prev": "*", "next": "block-like" },
        { "blankLine": "always", "prev": "block-like", "next": "*" }
    ]
};
