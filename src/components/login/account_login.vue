<template>
	<div class="login_content">		
		<div class="login">
			<h1>用户登录</h1>
			<el-form :model="login">
				<el-form-item label="用户名" prop="name">
					<el-input v-model="login.name"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="name">
					<el-input v-model="login.password"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button @click="submitLogin()">登录</el-button>
				</el-form-item>
			</el-form>
			<h1><router-link to="/agent_login">店铺登录</router-link></h1>
		</div>
	</div>
</template>

<script>
import { Login } from '../../api/api'

export default {
	data() {
		// let checkName = (rule, value, callback) => {
		// 	if (value === '') {
		// 		callback(new Error('请输入用户名'))
		// 	} else {
		// 		callback()
		// 	}
		// }
		// let checkPass = (rule, value, callback) => {
		// 	if(value === '') {
		// 		callback(new Error('请输入密码'))
		// 	} else {
		// 		callback()
		// 	}
		// }
		return {
			login: {
				name: '',
				password: ''
			}
			// rules: {
			// 	name: [
			// 		{ validator: checkName, trigger: 'blur' }
			// 	],
			// 	password: [
			// 		{ validator: checkPass, trigger: 'blur' }
			// 	]
			// }
		}
	},

	// mounted() {
	// 	this.show()
	// },

	methods: {
		// show () {
		// 	this.$api.post('http://172.16.8.112:8080/hello')
		// },

		submitLogin() {
			this.loading = true;
			api.accountLogin(this.login).then(res => {
				this.loading = false;
			},err => {
				console.log(err);
			})
		}

		// submitLogin() {
		// 	this.$refs.login.validate((valid) => {
		// 		if(valid) {
		// 			let loginParams = { name:login.name, password: login.password}

		// 			Login(loginParams).then(data => {
		// 				let { msg, code, token } = data
		// 				if(code == '200'){
		// 					sessionStorage.setItem('access-token', token)
		// 					this.$router.push({ path: '/'})
		// 				}
		// 			})
		// 		} else {
		// 			console.log('error login')
		// 			return false
		// 		}
		// 	})
		// }
	}
}
</script>

<style lang="scss" type="text/css">
.login_content {
	width: 40em;
	margin: 6em auto;

	div,button {
		margin: 0.8em auto;
	}
}
</style>
