import Vue from 'vue'
import Router from 'vue-router'
import eMarket from '@/components/eMarket'
import Login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'eMarket', component: eMarket },
    { path: '/login', name: 'Login', component: Login }

  ]
})
