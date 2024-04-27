const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: '/src/yv/index.yv',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js', '.yv']
    },
    module: {
        rules: [
            {
                test: /\.yv$/,
                use: [
                    {
                        loader: 'yv-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/html/index.html'
        }),
        new webpack.ProvidePlugin({
            Yarnova: ['yarnova']
        })
    ],
    devServer: {
        open: true,
        port: 9000
    }
}
