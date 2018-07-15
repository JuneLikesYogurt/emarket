// import axios from 'axios'

// const baseURL = "http://172.16.8.112:8080"

// export const Login = params => { return axios.post('/login', params).then(res =>res.data)}

import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000
// axios.defaults.withCredentials = true
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.params = {}

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
    return res;
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
	accountRegister(params) {
		return oPost('http://172.16.8.112:8080/register',params)
		// return oPost('http://172.16.8.112:8080/hello',params)
	},

	agentRegister(params) {
		return oPost('http://172.16.8.112:8080',params)
	},

	showAll() {
		return oGet('http://172.16.8.112:8080')
	},

	searchTitle (params) {
		return oGet('http://172.16.8.112:8080',params)
	}
}