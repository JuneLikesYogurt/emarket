// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VeeValidate, {Validator} from 'vee-validate'
import axios from 'axios'
// import qs from 'qs'
// import Api from './api/index.js'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.axios = axios		

router.beforeEach((to, from, next) => {
    if (to.matched.some(v => v.meta.requireAuth)) {
        if (localStorage.getItem(tokenStr)) {
            next()
        } else {
            next({
                path: '/account_login',
                query: {redirect: to.fullPath}
            })
        }
    } else {
        next()
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
