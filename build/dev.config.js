const webpackConfig = require('./webpack.config')
const merge = require('webpack-merge')
const portfinder = require('portfinder');
const path = require('path')
module.exports = portfinder.getPortPromise().then((port) => {
    return merge(webpackConfig, {
        mode: 'development',
        devtool: 'cheap-module-eval-source-map',
        module: {
            rules: [{
                test: /\.(css|less)/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    }
                ]
            }]
        },
        devServer: {
            host: 'localhost',
            port: port,
            open: true,
            hot: true,
            contentBase: path.resolve(__dirname, '../dist')

        }
    })
})