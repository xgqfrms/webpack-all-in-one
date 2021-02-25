# webpack 4.x console.log


```sh
$ yarn add -D uglify-webpack-plugin

$ npm i -D uglify-webpack-plugin

```


```js
// webpack.config.js
module.exports = {
    // ...
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    compress: {
                        pure_funcs: ['console.log'],
                    },
                },
            }),
        ],
    },
    // ...
}


// webpack.config.js
module.exports = {
    // ...
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),
        ],
    },
    // ...
}

```
