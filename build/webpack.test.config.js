var path = require("path")
var webpack = require("webpack")
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {

    return path.join(__dirname, '..', dir)
}

var webpackConfig = {

    module: {

        rules: [

            // babel-loader
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },

            // 为了统计代码覆盖率，对 js 文件加入 istanbul-instrumenter-loader
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                include: /src|packages/,
                enforce: 'post',
                use: [{
                    loader: "istanbul-instrumenter-loader",
                    options: {
                        esModules: true
                    },
                }]
            },

            // vue loader
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        // 为了统计代码覆盖率，对 vue 文件加入 istanbul-instrumenter-loader
                        preLoaders: {
                            js: 'istanbul-instrumenter-loader?esModules=true'
                        }
                    }
                }]
            },

            // css loader
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'vue-style-loader'
                })
            },

            // img loader
            {
                test: /\.(png|gif|jpe?g)(\?\S*)?$/,
                use: [{loader: 'url-loader'}]
            },

            // font loader
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                use: [{loader: 'url-loader'}]
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'), // 调用组件的时候方便点
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
}

module.exports = webpackConfig