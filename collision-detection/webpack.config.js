const path = require('path');

module.exports = {
    context: __dirname,
    entry: "./js/app.js",
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: [
                    /\.js?$/
                ],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }
        ]
    },
    devtool: 'source-maps',
    resolve: {
        extensions: [".js", "*"]
    }
};