import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import UserInfo from '@/components/UserInfo'
import LogUp from '@/components/LogUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logup',
      name: 'LogUp',
      compenent: LogUp
    },
    {
      path: '/',
      name: 'UserInfo',
      component: UserInfo
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
