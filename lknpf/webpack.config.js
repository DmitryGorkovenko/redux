var path = require('path');
var webpack = require('webpack');

var PROD = JSON.parse(process.env.PROD_ENV || '0');


module.exports = {
    entry: [
        './src/index'
    ]
    ,output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    }
    ,module: {
        loaders: [
            {
                loaders: ['babel-loader'],
                include: [
                    path.resolve(__dirname, "src"),
                ],
                test: /\.js$/,
                plugins: ['transform-runtime']
            }
        ]
    }
    ,plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ] : []
};
