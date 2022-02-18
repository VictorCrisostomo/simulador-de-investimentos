const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        },
        devMiddleware: {
            index: false
        },
        port: 8000,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    module:{
        rules: [

            {
              test: /\.css$/,
              use: [
                  'style-loader', 'css-loader'
              ]  
            },
            {
              test: /\.scss$/,
              use: [
                  'style-loader', 'css-loader', 'sass-loader', 'postcss-loader'
              ]  
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            filename: 'index.html',
            title: 'EQI | Simulador de investimentos'
        })
    ]
}