import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router/index.js'
import store from '@/store/index'
import './api/mock'
import Cookie from 'js-cookie'
Vue.use(ElementUI);

Vue.config.productionTip = false


//  添加全局前置导航守卫
router.beforeEach((to,from,next)=>{
  //判断token存不存在
     const token = Cookie.get('token')
     //token不存在，说明当前用户是未登录，应该跳转至登录页
     if(!token&&to.name!=='login'){
           next({name:'login'})
     }else if(token&&to.name === 'login'){//token存在，说明用户已经登录，此时可以跳转至首页(如果想要进入登录页，则强制进入home首页)
           next({name:"Home"})
     }else{
         next();
     }
})

new Vue({
  store,
  router,
  render: h => h(App),
  created(){
      store.commit('addMenu',router)
  }
}).$mount('#app')
