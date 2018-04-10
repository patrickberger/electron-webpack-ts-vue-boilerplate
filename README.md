# Electron Webpack / Typescript / Vue.js Boilerplate

[![dependencies Status](https://david-dm.org/patrickberger/electron-webpack-ts-vue-boilerplate/status.png)](https://david-dm.org/patrickberger/electron-webpack-ts-vue-boilerplate) [![devDependencies Status](https://david-dm.org/patrickberger/electron-webpack-ts-vue-boilerplate/dev-status.png)](https://david-dm.org/patrickberger/electron-webpack-ts-vue-boilerplate?type=dev) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php)

## Introduction

This is just another [Electron](https://electronjs.org/) boilerplate. I created this because anything I found over the internet failed to compile using current version of [webpack](https://webpack.js.org/) due to a bug.

* [webpack/webpack-sources#28](https://github.com/webpack/webpack-sources/issues/28)
* [webpack/webpack-sources/pull/27](https://github.com/webpack/webpack-sources/pull/27#issuecomment-341891811)

This specific boilerplate provides

* Webpack support using [electron-webpack](https://webpack.electron.build/)
* Vue.js support using [vue](https://github.com/vuejs/vue) and [electron-webpack-vue](https://github.com/electron-userland/electron-webpack/tree/master/packages/electron-webpack-vue)  add-on
* Typescript support using [typescript](https://github.com/Microsoft/TypeScript), [tslint](https://github.com/palantir/tslint), [ts-loader](https://github.com/TypeStrong/ts-loader) and [electron-webpack-ts](https://github.com/electron-userland/electron-webpack/tree/master/packages/electron-webpack-ts) add-on
* Less support using [less](https://www.npmjs.com/package/less) and  [less-loader](https://www.npmjs.com/package/less-loader)

## Installation

It is highly recommended to use [Yarn](https://yarnpkg.com/) package manager instead of NPM. As of today installing packages using NPM will result in failing webpack compilation.

``` bash
# Clone the repository ...
$ git clone https://github.com/patrickberger/electron-webpack-ts-vue-boilerplate

# ... and install dependencies.
yarn
```

Available scripts:

``` bash
# Run in development mode.
yarn dev

# Compile.
yarn compile

# Build an installer for your current platform.
yarn build
```
