"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 *
 * @description bug
 * @augments
 * @example
 *
 */

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");

const configPath = {
    JSM: "./src/js",
};

const jsModules = [
    "app",
    "main",
    "index",
];

const entryObj = {};

jsModules.forEach(
    (key, i) => {
        entryObj[key] = `${configPath.JSM}/${key}`;
        // entryObj[key] = `${configPath}/${key}.js`;
    }
);

const extractSCSS = new ExtractTextPlugin({
    filename: (getPath) => {
        // relative path
        return getPath("css/[name].min.css");
        // return getPath("css/[name].[hash:8].min.css?[hash:8]");
    },
    // allChunks: true,
});

module.exports = {
    entry: Object.assign({}, entryObj),
    // entry: {
    //     app: "./src/js/app.js",
    //     main: "./src/js/main.js",
    //     indx: "./src/js/index.js",
    // },
    output: {
        path: path.resolve(__dirname, "build/"),
        filename: "js/[name].min.js",
        // filename: "js/[name].[hash:8].min.js"
    },
    resolve: {
        extensions: [".js", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
            },
            {
                test: /\.((s*)css|sass)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                url: false,
                                // url: true,
                                minimize: true,
                                sourceMap: true,
                                modules: true,
                                importLoaders: 1,
                                localIdentName: "gildata_[local]",
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            }
                        }
                    ],
                    fallback: "style-loader",
                }),
            },
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
            extractComments: true,
            parallel: 4,
            cache: true,
        }),
        extractSCSS,
        new HtmlWebpackPlugin({
            // inject: false,
            hash: true,
            minify: true,
            chunks: ["app"],
            template: "./src/html/app.html",
            filename: "./pages/app.html"
            // filename: "./pages/[name].html"
        }),
        new HtmlWebpackPlugin({
            // inject: false,
            hash: true,
            minify: true,
            chunks: ["main"],
            template: "./src/html/main.html",
            filename: "./pages/main.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/html/index.html",
            filename: "./index.html",
            chunks: ["index"],
            // chunks: ["app", "main"],// load modules order ??? fifo
            hash: true,
            // minify: true,
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
            },
        }),
        new CopyWebpackPlugin([
            {
                from: "./src/imgs",
                to: "./imgs/",
                ignore: ["*.md"]
            }
        ]),
    ]
};
