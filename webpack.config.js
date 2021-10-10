const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

let mode = 'development'
let target = 'web'

if (process.env.NODE_ENV === 'production') {
    mode = 'production'
    target = 'browserslist'
}

module.exports = {
    mode: mode,
    target: target,
    devtool: 'inline-source-map',
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
        open: true,
    },

    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(jpe?g|png|ttf|txt|eot|gif|otf|svg|ico|woff(2)?)$/,
                type: 'asset/resource',
            },

            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            // inlineSource: '.(js|css)'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
}