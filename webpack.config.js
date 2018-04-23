var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require("path");

module.exports = {
    entry: './src/App.js',
    output: {
        //path: path.resolve(__dirname, "dist"),
        filename: './dist/app.bundle.js'
    },
    module: {
        rules: [
            
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                     },
                    {
                        loader: "css-loader",
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {       
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: 'file-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true,
        openPage: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'P2Endure e-Marketplace',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './src/index.html',
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
}