const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlTagsPlugin = require("html-webpack-tags-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    externals: {
        cesium: "Cesium",
    },
    entry: './src/index.js',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    output: {
        //filename: 'bundle.[fullhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js',
        clean: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            //localsConvention: 'camelCase',
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(las|laz)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'lidar_files/[name].[ext]'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'City of Genoa',
            header: 'City of Genoa',
            //favicon: 'src/favicon.ico',
            template: 'src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new Dotenv({
            path: './.env', // Path to .env file (this is the default)
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "node_modules/cesium/Build/Cesium",
                    to: "cesium",
                },
            ],
        }),
        new HtmlTagsPlugin({
            append: false,
            tags: ["cesium/Widgets/widgets.css", "cesium/Cesium.js"],
        }),
        new webpack.DefinePlugin({
            CESIUM_BASE_URL: JSON.stringify("/cesium"),
        }),
    ],
};