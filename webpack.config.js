const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    devtool: 'source-map',
    module:{
        rules: [
            {test: /\.jsx$/, use: {loader: 'babel-loader'}},
            {test: /\.js$/, use: {loader: 'babel-loader'}},
            {test: /\.css$/i, loader: 'style-loader!css-loader'},
            {test: /\.scss$/i, use: [{loader: 'style-loader'},{loader: 'css-loader'},{loader: 'sass-loader'}]},
            {test: /\.svg$/, use: [{loader: 'react-svg-loader', options: {JSX: true}}]}
        ]
    },
    resolve:{
        extensions: ['.js','.jsx','.scss']
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};