import router from './router'
import { getToken } from '@/auth'

//  white list for guest
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  if (getToken()) {
    // no need for login
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
