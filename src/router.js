// 引入路由的包
import VueRouter from 'vue-router'

// 导入对应的路由组件
import Login from './components/Login.vue'
import Register from './components/Register.vue'

// 创建路由对象
var router =  new VueRouter({
    routes:[// 配置路由规则
        {path:'/',redirect:'/login'},
        {path:'/login',component:Login},
        {path:'/register',component:Register}
    ]
})

// 暴露路由对象
export default router