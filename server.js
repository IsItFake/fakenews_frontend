const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.dev.config');

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
    hot: true,
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: {
        color: true,
        hash: true,
        version: false,
        timings: true,
        asserts: false,
        chunks: false,
        chunkModules: false,
        modules: false,
        cached: false,
        reasons: false,
        source: false,
        errorDetails: true,
        chunkOrigins: false,
        children: false
    }
});

server.listen(8080, '0.0.0.0', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('listening');
});