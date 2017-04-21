const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/js/index.jsx',
    ],
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".jsx", ".js", ".scss"],
        alias: {
            actions: resolve(__dirname, './src/js/actions'),
            components: resolve(__dirname, './src/js/components'),
            constants: resolve(__dirname, './src/js/constants'),
            containers: resolve(__dirname, './src/js/containers'),
            utilities: resolve(__dirname, './src/js/utilities'),
            views: resolve(__dirname, './src/js/views'),
            styles: resolve(__dirname, './src/scss')
        }
    },
    devtool: 'eval',
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'dist'),
        publicPath: '/',
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: 'eslint-loader',
            },
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[path]___[local]___[hash:base64:3]'},
                    { loader: 'resolve-url-loader?sourceMap'},
                    { loader: 'sass-loader?sourceMap'},
                    { loader: 'postcss-loader?sourceMap' }
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new WebpackNotifierPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
};
