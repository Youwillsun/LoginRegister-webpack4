// 配置文件
const path = require('path');// 引用node中的path
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')// 引用vue-loader插件
const webpack = require('webpack')

module.exports = {
    mode:'development',// 开发者模式
    entry:'./src/main.js',// 入口文件路径
    output:{// 输出文件
        filename:'bundle.js',// 输出文件名
        path:path.join(__dirname,'./dist')// 输出文件路径
    },
    devServer:{// 插件配置
        contentBase:'./src',// 默认打开文件路径
        open:true,// 默认打开浏览器
        port:3000,// 端口号3000
        hot:true// 开启热更新
    },
    module:{
        rules:[// 配置规则
            {test:/\.css$/,use:['style-loader','css-loader']}, // 配置css文件规则
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},// 配置scss文件规则
            {test:/\.(jpg|png|svg|webp|gif)$/,use:'file-loader'},// 配置图片文件规则
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'file-loader'},// 配置字体文件规则
            {// 配置babel转换高级的ES6语法
                test:/\.js$/,
                exclude:/node_modules/, //  排除node_modules文件夹
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']// 预置插件
                    }
                }
            },
            {test:/\.vue$/,use:'vue-loader'}// 配置.vue文件规则
        ]
    },
    plugins:[// 插件配置
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin({verbose:true}),// 每次打包前，清除旧文件
        new VueLoaderPlugin(),// 这一行必须有，不然那vue文件会出错
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery"
        })
    ]
}