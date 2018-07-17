// import axios from 'axios'

// const baseURL = "http://172.16.8.112:8080"

// export const Login = params => { return axios.post('/login', params).then(res =>res.data)}

import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.params = {}
// axios.defaults.withCredentials = true

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // config => {
    // 	const token = getCookie('session');
    // 	config.data = JSON.stringify(config.data);
    // 	config.headers = {
    // 		'Content-Type': 'application/x-www-form-urlencoded'
    // 	}
    // }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


  //封装获取数据
export const oGet = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, params)
            .then(res => {
                resolve(res.data)
            }, err => {
                reject(err)
            }).catch(err => {
                reject(err)
            })
    })
};
//封装发送数据
export const oPost = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data)
            }, err => {
                reject(err)
            }).catch(err => {
                reject(err)
            })
    })
}
//封装修改数据
export const oUpdate = (url ,param,params) => {
    return new Promise((resolve , reject) => {
        axios.patch(url ,param, params)
            .then(res => {
                resolve(res.data)
            }, err => {
                reject(err)
            }).catch(err => {
                reject(err)
            })
    })
}
//封装删除数据
export const oRemove = (url , params) => {
    return new Promise((resolve,reject) => {
        axios.delete(url,params)
            .then(res => {
                resolve(res.data)
            },err => {
                reject(err)
            }).catch(err => {
                reject(err)
            })
    })
}


export default {
    //用户登录注册
	accountRegister(params) {
		return oPost('http://172.16.8.112:8080/register',params)
	},
    accountLogin(params) {
        return oPost('http://172.16.8.112:8080/log_in',params)
    },

    //店铺登录注册
	agentRegister(params) {
        // return oPost('http://172.16.8.112:8080/shop_register',params)    //102
		return oPost('http://192.168.3.186:8080/shop_register',params)    //地下室
	},
    agentLogin(params) {
        return oPost('http://172.16.8.112:8080/shop_log_in',params)   
    },

    //首页显示所有信息
	showAll() {
        return oPost('http://172.16.8.112:8080/goods/get_all')
		// return oPost('http://192.168.3.186:8080/goods/get_all')
	},
    //首页查询
	searchTitle (params) {
        // return oPost('http://192.168.3.186:8080/goods/search_by_name',params)
		return oPost('http://172.16.8.112:8080/goods/search_by_name',params)
	},
    detail (params) {
        return oPost('http://172.16.8.112:8080/goods/detail',params)
    },

    //购物车
    showList(params) {
        // return oGet('http://192.168.3.186:8080',params)
        return oPost('http://172.16.8.112:8080/glist/search_all',params)
    },
    addToList(params) {
        return oPost('http://172.16.8.112:8080/glist/add',params)
    },
    directBuy(params) {
        return oPost('http://172.16.8.112:8080/glist/buy_direct',params)
    },

    //店家新增商品
    addGood(params) {
        // return oPost('http://192.168.3.186:8080/goods/add',params)
        return oPost('http://172.16.8.112:8080/goods/add',params)
    },

    //个人中心
    account_bought(params) {
        // return oPost('http://192.168.3.186:8080/',params)
        return oPost('http://172.16.8.112:8080/has_buy',params)
    },

    //店铺中心
    shop_goods(params) {
        return oPost('http://172.16.8.112:8080/shop_goods',params)
    }
}