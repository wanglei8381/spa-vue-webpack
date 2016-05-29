var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: "./src/main.js",
    output: {
        path: "./build",
        publicPath: "./build/",
        filename: "build.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")},
            { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")},
            { test: /\.styl$/, loader: "style!css!stylus" },
            { test: /\.js$/, loader: 'babel' },
            { test: /\.html$/, loader: "html" }
        ]
    },
    resolve:{
        extensions:['','.js','.json']
    },
    plugins: [
        //提取文件的公共部分
        new webpack.optimize.CommonsChunkPlugin('commons','common.js'),
        //将css放在单独的文件中
        new ExtractTextPlugin("css/[name].css")
    ],
    devtool: "source-map",
    contentBase: '/'
}