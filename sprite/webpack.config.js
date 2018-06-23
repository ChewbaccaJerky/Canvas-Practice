const path = require('path');

const ASSET_PATH = process.env.ASSET_PATH || './assets';

module.exports = {
    entry: "./javascript/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
        publicPath: ASSET_PATH 
    }
};
