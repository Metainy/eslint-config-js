# ESLint Javascript Configuration

Personal ESLint configuration for Javascript projects.

* ✔ Extends [Airbnb Style]
* ✔ Provide additional rules for [eslint-plugin-import]
* ✔ Provide personally preferred rules.

## Table of Contents

* [Usage](#usage)
* [Issues](#issues)
* [Roadmap](#roadmap)

## Usage

### Install dependencies

Install the package and it's dependencies.

```
npm install -D eslint @metainy/eslint-config-js
```

or

```
npm install -D git+https://github.com/Metainy/eslint-config-js.git
```

### Extend the package

Create an `.eslintrc` file in the root of your project and extend the configuration.

```js
module.exports = {
    extends: "@metainy/js"
}
```

## Issues

## Roadmap

[Airbnb Style]: https://www.npmjs.com/package/eslint-config-airbnb-base

[eslint-plugin-import]: https://github.com/import-js/eslint-plugin-import
