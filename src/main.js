// 入口文件
import './main.js'
import Vue from 'vue'
import LoginRegister from './LoginRegister.vue'

var vm = new Vue({
    el:'#app',
    render:c => c(LoginRegister)
})