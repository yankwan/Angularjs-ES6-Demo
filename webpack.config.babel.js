import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    entry: './src/script/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.scss$/, 
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", 'sass-loader']
                  })
            },// ['style-loader', 'css-loader', 'sass-loader']
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'AngulrJS In ES6',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            disable: false,
            allChunks: true
        })
    ]
}