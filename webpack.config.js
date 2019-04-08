// 配置文件
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode:'development',
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'./dist')
    },
    devServer:{
        contentBase:'./src',
        open:true,
        port:3000,
        hot:true
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.(jpg|png|svg|webp|gif)$/,use:'file-loader'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'file-loader'},
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin({verbose:true}),
        new VueLoaderPlugin()
    ]
}