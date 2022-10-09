# ESLint Javascript Configuration

⚠️ This repository is not yet production ready. Still work in progress

Personal ESLint configuration for Javascript projects.

* ✔ Extends [Airbnb Style]
* ✔ Provide additional rules for [eslint-plugin-import]
* ✔ Provide personally preferred rules.

## Table of Contents

* [Usage](#usage)
* [Issues](#issues)
* [Roadmap](#roadmap)

## Usage

### 1. Install dependencies

Install the package and it's dependencies

```
npm i -D eslint @metainy/eslint-config-js
```

or

```
npm install git+https://github.com/Metainy/eslint-config-js.git
```

### 2. Extend the package

Extend the configuration inside your ESLint config in `.eslintrc.js`

```js
module.exports = {
    extends: "@metainy/js"
}
```

## Issues

## Roadmap

[Airbnb Style]: https://www.npmjs.com/package/eslint-config-airbnb-base

[eslint-plugin-import]: https://github.com/import-js/eslint-plugin-import

