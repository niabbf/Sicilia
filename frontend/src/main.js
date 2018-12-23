// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Logo from '@/components/Logo'
import TaskCard from '@/components/TaskCard'
import UserInfo from '@/components/UserInfo'
import UserTask from '@/components/UserTask'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import { carbon, createTheme } from 'muse-ui-carbon-theme/src'

import '@/permission'

Vue.config.productionTip = false
Vue.use(MuseUI)
// use MuseUI carbon theme
MuseUI.theme.add('carbon', carbon).addCreateTheme(createTheme).use('carbon')

// load components
Vue.component('logo', Logo)
Vue.component('taskCard', TaskCard)
Vue.component('userInfo', UserInfo)
Vue.component('userTask', UserTask)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
