const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

let config = {
    context: path.join(__dirname, './src'),
    entry: {
        app: './index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    // 解决 fs 组件 can't resolve 的情况（node_modules重装后还是报错）
    node: {
        fs: 'empty',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory',
                include: [
                    path.join(__dirname, './src'),
                    path.join(__dirname, './node_modules/webpack-dev-server/client')
                ]
            },
            {
                test: /\.(png|jpe?g|gif|ico)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'assets/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js'],
        alias: {
            '@': path.join(__dirname, './src'),
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false'))
        }),
    ],
    performance: {
        hints: false,
    },
};

if (isDev) {
    config = merge(config, {
        mode: 'development',
        module: {
            rules: [
                // {
                //     test: /\.(js|vue)$/,
                //     loader: 'eslint-loader',
                //     enforce: 'pre',
                //     include: [path.join(__dirname, 'src')],
                //     options: {
                //         formatter: require('eslint-friendly-formatter'),
                //         emitWarning: true
                //     }
                // },
                {
                    test: /\.css$/,
                    use: ['css-loader', 'postcss-loader']
                },
                {
                    test: /\.(scss|sass)$/,
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                }
            ]
        },
        devtool: 'eval-cheap-module-source-map',
        devServer: {
            hot: true,
            contentBase: './src',
            historyApiFallback: true,
            noInfo: true,
            // host: 'http://localhost',
            // port: 3000,
            host: '0.0.0.0',
            port: 3000,
            // host: devServerHost,
            // port: devServerPort,
            publicPath: '/',
            proxy: [
                {
                    context: ['/api/', ],
                    target: 'http://dev.xgqfrms.xyz',
                    changeOrigin: true,
                    onError (err) {
                        console.log('proxy error:', err);
                    }
                },
                {
                    context: ['/mock/'],
                    target: 'http://localhost:9000',
                    changeOrigin: true
                },
            ],
            clientLogLevel: 'warning',
            overlay: { warnings: false, errors: true },
            watchOptions: { poll: false }
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template: './index.html',
                inject: true,
                favicon: './assets/favicon.ico'
            })
        ]
    });
}

if (isProd) {
    config = merge(config, {
        mode: 'production',
        devtool: 'cheap-module-source-map',
        output: {
            publicPath: '/',
            filename: 'js/[name].[chunkhash:8].js',
            chunkFilename: 'js/[name].[chunkhash:8].js'
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
                },
                {
                    test: /\.(scss|sass)$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css'
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './index.html',
                inject: true,
                favicon: './assets/favicon.ico',
                minify: {
                    minifyJS: true,
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseInlineTagWhitespace: true,
                    removeRedundantAttributes: true,
                    removeAttributeQuotes: true
                },
            }),
            // new ScriptExtHtmlWebpackPlugin({
            //     inline: /runtime\..*\.js$/
            // }),
            // new webpack.NamedChunksPlugin(chunk => {
            //     if (chunk.name) {
            //         return chunk.name;
            //     }
            //     const seen = new Set();
            //     const nameLength = 5;
            //     const modules = Array.from(chunk.modulesIterable);
            //     if (modules.length > 1) {
            //         const hash = require('hash-sum');
            //         const joinedHash = hash(modules.map(m => m.id).join('_'));
            //         let len = nameLength;
            //         while (seen.has(joinedHash.substr(0, len))) {
            //             len++;
            //         }
            //         seen.add(joinedHash.substr(0, len));
            //         return `chunk-${joinedHash.substr(0, len)}`;
            //     } else {
            //         return modules[0].id;
            //     }
            // }),
            // new webpack.HashedModuleIdsPlugin(),
            // new CopyWebpackPlugin([
            //     {
            //         from: path.join(__dirname, 'src/assets'),
            //         to: path.join(__dirname, 'dist/assets')
            //     },
            //     {
            //         from: path.join(__dirname, 'src/libs'),
            //         to: path.join(__dirname, 'dist/libs')
            //     },
            //     {
            //         from: path.join(__dirname, 'src/static'),
            //         to: path.join(__dirname, 'dist/static')
            //     }
            // ]),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
        ],
        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    // vendors: {
                    //     chunks: 'initial',
                    //     name: 'chunk-vendors',
                    //     test: /[\\/]node_modules[\\/]/,
                    //     priority: 10
                    // },
                    // utils: {
                    //     name: 'chunk-utils',
                    //     test: path.join(__dirname, 'src/utils'),
                    //     minSize: 100,
                    //     minChunks: 1,
                    //     priority: 11,
                    //     reuseExistingChunk: true
                    // },
                    // components: {
                    //     chunks: 'initial',
                    //     name: 'chunk-components',
                    //     test: path.resolve(__dirname, 'src/components'),
                    //     minSize: 100,
                    //     minChunks: 1,
                    //     priority: 12,
                    //     reuseExistingChunk: true
                    // },
                }
            },
            runtimeChunk: 'single',
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        mangle: {
                            safari10: true
                        },
                        output: {
                            // 保留 comments
                            comments: true,
                        },
                        // extractComments: true,
                        compress: {
                            // remove warnings
                            warnings: false,
                            // remove console.log
                            pure_funcs: ['console.log'],
                        },
                    },
                    sourceMap: false,
                    cache: true,
                    parallel: true
                }),
                new OptimizeCSSAssetsPlugin()
            ]
        },
    },
    {
        stats: {
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }
    },);
}

module.exports = config;
