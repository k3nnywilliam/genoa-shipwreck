const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
        client: {
            progress: true,
        },
        compress: true,
        port: process.env.PORT,
    },
    plugins: [
        new Dotenv({'./.env'})
      ],
});