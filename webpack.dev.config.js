const webpack = require('webpack');
const { Config } = require('webpack-config');
const path = require('path');

const mainConfig = new Config().extend('webpack.config');
mainConfig.module.rules = [];

const devConfigExtension = {
    entry: {
        app: [
            'webpack-dev-server/client?http://0.0.0.0:8080',
            'webpack/hot/only-dev-server',
        ]
    },

    output: {
        filename: '[name].js',
        publicPath: "http://0.0.0.0:8080/"
    },

    devtool: 'eval-source-map',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    emitErrors: true
                },
                include: path.join(__dirname, "App")
            },
            {
                test: /\.tsx?$/,
                loaders: [
                    "react-hot-loader",
                    "babel-loader?cacheDirectory",
                    "awesome-typescript-loader?tsconfig=tsconfig.webpack.json&useCache=true"
                ]
            },
            {
                test: /\.css$/,
                loaders: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                exclude: /\.component\.less$/,
                loaders: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.component\.less$/,
                loaders: [
                    "style-loader",
                    "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
                    "less-loader"
                ]
            },
            {
                test: /\.(jpg|png|woff|eot|ttf|svg|gif)$/,
                loader: "file-loader?name=[name].[ext]"
            }
        ]
    },

    plugins: [
        // Used for hot-reload
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            DEBUG: true
        })
    ]
};

module.exports = mainConfig.merge(devConfigExtension);