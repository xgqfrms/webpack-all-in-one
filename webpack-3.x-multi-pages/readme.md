# webpack best practical

> webpack3-multi-pages

```sh
# webpack 4.x bug ???
# webpack 3.x OK
$ npm i -D webpack@3.x

$ npm i -D html-webpack-plugin
$ npm i -D extract-text-webpack-plugin
$ npm i -D copy-webpack-plugin clean-webpack-plugin

$ npm i -D node-sass css-loader sass-loader style-loader
$ npm i -D url-loader file-loader

$ npm i -D uglifyjs-webpack-plugin uglify-js
$ npm i -D uglify-es


$ npm i -D babel-loader babel-core
# .babelrc
$ npm i -D babel-preset-env

# rmrf
$ npm i -D rimraf


# dev-tools
$ npm i -g browser-sync
$ npm i -g json-server

```

## npm link

```sh

$ npm link

```

> ok

```json

{
    "bin": {
        "app": "app",
        "dev": "dev",
        "html": "html",
        "rmrf": "rmrf"
    },
}

```

> bug

```json

{
    "bin": {
        "app": "./scripts/cmd/app.cmd",
        "dev": "./scripts/cmd/dev",
        "html": "./scripts/cmd/html",
        "rmrf": "./scripts/cmd/rmrf"
    },
}

```

## bug

"webpack": "^4.16.5",

```js

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

```

```js
// minify html
    new HtmlWebpackPlugin({
        template: "src/index.html",
        chunksSortMode: "none",
        minify: {
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true,
            removeTagWhitespace: true,
            removeRedundantAttributes: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
        }
    }),
```
