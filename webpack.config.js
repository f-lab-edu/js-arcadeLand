const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'development',
    devServer: {
        port: 9000,
        historyApiFallback: true,
    },
    devtool: 'eval-cheap-source-map',
    entry: './src/index.js',
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(svg|jpeg|gif|jpg|png)$/i,
                type: 'asset/resource',
            },
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
            { test: /\.s[ac]ss$/i, use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].chunk.css',
        }),
        new CopyPlugin({
            patterns: [{ from: 'resource/arcade_machine' }, { from: 'resource/avatar' }],
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
