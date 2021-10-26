const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require("webpack")
const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //folder build-an nya
        filename: 'main.js', //harus sama dengan di public/index.html
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        open: true //open browser ketika di run
    },
    module: {
        //bundle semua extension
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                // test: /\.css?$/,
                test: /\.(css|sass|scss)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.json?$/,
                use: ['json-loader']
            },
            {
                test: /\.(png|j?g|gif)?$/,
                use: 'file-loader'
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            }
        ]
    },
    //untuk membaca file dari component yang diimport ke App.js
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            filename: 'index.html',
            favicon: './public/favicon.ico',
            manifest: './public/manifest.json',
        }),
        new webpack.ProvidePlugin({
            "React": "react" //untuk menandai bahwa ini file React
        })
    ]
};