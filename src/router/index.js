import Vue from 'vue'
import Router from 'vue-router'

//主页、登录、注册
import eMarket from '@/components/eMarket'
import AccountLogin from '@/components/login/account_login'
import AccountRegister from '@/components/login/account_register'
import AgentLogin from '@/components/login/agent_login'
import AgentRegister from '@/components/login/agent_register'

//用户
import Account from '@/components/account/index'
import List from '@/components/account/list'

//店铺
import  Agent from '@/components/agent/index'
import Edit from '@/components/agent/edit'
import Add from '@/components/agent/add'

//商品详情
import Detail from '@/components/common/detail'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'eMarket', component: eMarket },
    { path: '/agent_login', name: 'AgentLogin', component: AgentLogin },
    { path: '/agent_register', name: 'AgentRegister', component: AgentRegister },
    { path: '/account_login', name: 'AccountLogin', component: AccountLogin },
    { path: '/account_register', name: 'AccountRegister', component: AccountRegister },


    { path: '/account', name: 'Account', component: Account },
    { path: '/list', name: 'List', component: List },

    { path: '/agent', name: 'Agent', component: Agent },
    { path: '/edit', name: 'Edit', component: Edit },
    { path: '/add', name: 'Add', component: Add },
    { path: '/detail', name: 'Detail', component: Detail}
  ]
})
