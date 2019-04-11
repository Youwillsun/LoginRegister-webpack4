import './main.js'// 入口文件
import './css/css-clear.css'// 样式清除文件
import $ from 'jquery'// 引入jquery
import 'bootstrap/dist/css/bootstrap.css'// 引入bootstrap

//引入vue
import Vue from 'vue'
//引入路由包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
// 导入自己的路由模块
import router from './router.js'
// 引入根组件
import LoginRegister from './LoginRegister.vue'

// vm实例
var vm = new Vue({
    el:'#app',
    // 渲染根组件到页面上
    render:c => c(LoginRegister),
    router //挂载路由对象
})