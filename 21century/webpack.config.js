var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    devtool: 'false',
    entry: {
        main: './src/js/app.jsx',
       // vendors: ['react', 'react-dom']
    },

    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',  
        'react-router': 'ReactRouter'
    },

    module: {
        loaders: [
            { test: /\.scss|css$/, loader: ExtractTextPlugin.extract('css-loader?modules!sass-loader?modules'), exclude: __dirname + '/node_modules/' },
            { test: /\.jsx|js$/, loader: 'babel-loader', query: { presets: ['react', 'es2015'] }, exclude: __dirname + '/node_modules/'}
        ]
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendors",
            filename: "vendors.js"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$|\.jsx$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]

};