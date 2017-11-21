import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

export default {
    entry: './src/script/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            { 
                test: /\.scss$/, 
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    // 使用css modules
                    use: [{
                            loader: "css-loader",
                            options: {
                                modules: true,
                                localIdentName: '[local]--[hash:base64:5]',
                                sourceMap: true
                            }
                        }, 'sass-loader']
                  })
            },// ['style-loader', 'css-loader', 'sass-loader']
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: ['ng-annotate-loader','babel-loader']
            },
            {
                test: /\.html$/,
                exclude: path.resolve(__dirname, './src/script/index.html'),
                use: [
                    { loader:'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './src')) },
                    { loader: 'html-loader' }
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'AngulrJS In ES6',
            minify: {
                collapseWhitespace: true
            },
            inject: 'body',
            hash: true,
            template: path.resolve(__dirname, './src/script/index.html')
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            disable: false,
            allChunks: true
        }),
        new UglifyJsPlugin()
    ]
}