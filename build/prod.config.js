const merge = require('webpack-merge')
const path = require('path')
const webpackConfig = require('./webpack.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
module.exports = merge(webpackConfig, {
    mode: 'production',
    // devtool:'#source-map',
    module: {
        rules: [{

            test: /\.(css|less)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../'
                }

            }, 'css-loader', 'less-loader', {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: [

                        require('autoprefixer')
                    ]
                }
            }]

        }]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'chunk-vendors',
                    test: /[\\\/]node_modules[\\\/]/,
                    priority: -10,
                    chunks: 'initial'
                },
                common: {
                    name: 'chunk-common',
                    minChunks: 2,
                    priority: -20,
                    chunks: 'initial',
                    reuseExistingChunk: true
                }
            }
        },
        minimizer: [new TerserPlugin({
            terserOptions: {
                compress: {
                    drop_console: true
                }
            }
        })],
    },

    plugins: [
        new OptimizeCssPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].bundle.css',
            chunkFilename: 'css/[name].chunks.css'
        }),
        // new CopyWebpackPlugin([{
        //     from: path.resolve(__dirname, '../public/index.html'),
        //     to: path.resolve(__dirname, '../dist')
        // }]),
        // new ImageminPlugin({
        //     pngquant:{
        //         quality:'95-100'
        //     }
        // }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!img']
        })


    ]

})