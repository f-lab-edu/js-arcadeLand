const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'production',

    devServer: {
        port: 9000,
        historyApiFallback: true,
    },

    cache: { type: devMode ? 'memory' : 'filesystem' },

    devtool: devMode ? 'inline-source-map' : 'hidden-source-map',

    entry: './src/index.js',

    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/js-arcadeLand/',
    },

    module: {
        rules: [
            {
                test: /\.(svg|jpeg|gif|jpg|png|fbx|glb)$/i,
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
            publicPath: '/js-arcadeLand/',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].chunk.css',
        }),
        new CopyPlugin({
            patterns: [{ from: './resource/arcade_machine/textures/ARCADE_baseColor.webp', to: '[name].webp' }],
        }),

        new BundleAnalyzerPlugin(),
    ],

    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimize: true,
        minimizer: [new TerserPlugin()],
    },

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
};
