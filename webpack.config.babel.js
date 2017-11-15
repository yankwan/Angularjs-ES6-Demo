import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: './src/script/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.css$/, loader: 'css-loader'},
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({})
    ]
}