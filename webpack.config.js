const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src', 'index.js')
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                exclude: /(bower_components)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        }
                    },
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader'],
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    },
                },
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: 'body',
            hash: true
        }),
        new MiniCssExtractPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        hot: true,
        historyApiFallback: true
    },
};