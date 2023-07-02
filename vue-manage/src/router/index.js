 import Vue from 'vue'
 import VueRouter from 'vue-router'
 import Home from '@/views/Home'
 import User from '@/views/User'
 import Main from '@/views/Main'
 import PageOne from '@/views/PageOne'
 import PageTwo from '@/views/PageTwo'
 import Mall from '@/views/Mall'
 import Login from '@/views/Login'

 //创建路由组件
 //将路由与组件映射
//  3.创建router实例
 Vue.use(VueRouter)

 const routes=[
    //主路由
    {
        path:"/",
        component:Main,
        name:'Main',
        redirect:'/Home',//重定向
        children:[
            //子路由
            // {//首页
            //     name:'Home',
            //     path:'/Home',
            //     component:Home
            // },
            // {//用户管理
            //     name:'User',
            //     path:'/User',
            //     component:User
            // },
            // {//商品管理
            //     name:'Mall',
            //     path:'/Mall',
            //     component:Mall,   
            // },
            // {//页面一
            //     name:'PageOne',
            //     path:'/PageOne',
            //     component:PageOne
            // },
            // {//页面二
            //     name:'PageTwo',
            //     path:'/PageTwo',
            //     component:PageTwo
            // },
        ]
    },
    {
        path:'/login',
        name:"login",
        component:Login
    }
  
 ]
const router = new VueRouter({
    routes, // `routes: routes` 的缩写
  })
  export default router

