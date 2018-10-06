import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import UserInfo from '@/components/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/userinfo',
      name: 'UserInfo',
      component: UserInfo,
      meta: {
        // need login to access
        requireAuth: true
      }
    }
  ]
})
