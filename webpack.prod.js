const path = require('path')
const webpack = require('webpack')


const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
    entry: './src/client/index.js',
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    mode: 'production',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: '8080'
    },
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    {
                    loader: MiniCssExtractPlugin.loader
                    },
                    {
                    // Interprets `@import` and `url()` like `import/require()` and will resolve them
                    loader: 'css-loader'
                    },
                    {
                    // Loader for webpack to process CSS with PostCSS
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                        return [
                            require('autoprefixer')
                        ];
                        }
                    }
                    },
                    {
                    // Loads a SASS/SCSS file and compiles it to CSS
                    loader: 'sass-loader'
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({filename: '[name].css'
        }),
        new WorkboxPlugin.GenerateSW(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}