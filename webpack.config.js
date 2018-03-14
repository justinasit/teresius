var webpack = require('webpack'),
    path = require('path');
 
module.exports = {
    entry: {
        main: ['./src/main.js', './src/sass/base.scss']
    },
    output: {
        path: path.join(__dirname, 'public/dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                  presets: ['babel-preset-env']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'style.css',
                            outputPath: ''
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpeg|ttf|...)$/,
                use: [
                   { loader: 'file-loader' } 
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
         minimize: true,
         compress: false
        }),
    ]
};
