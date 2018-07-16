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
					<el-button @click="submitLogin">登录</el-button>
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
		return {
			login: {
				name: '',
				password: ''
			}
		}
	},

	methods: {
		submitLogin() {
			this.$refs.login.validate((valid) => {
				if(valid) {
					this.loginLoading = true;

					let log = {
						uname: this.register.name,
						upwd: this.register.password
					}

					api.accountLogin(log).then(res => {
						this.$message.success('登录成功');
						this.loginLoading = false;
					})
				}
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
