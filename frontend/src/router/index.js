import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import HomePage from '@/components/HomePage'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/',
      name: 'Default',
      component: HomePage
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage,
      meta: {
        // need login to access
        requireAuth: true
      }
    }
  ]
})
