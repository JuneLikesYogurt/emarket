<template>
	<div class="login_content">	
		<div class="header">
			<h1><router-link to="/">Emarket</router-link></h1>
			<div class="nav_login">
				<h2><router-link to="/account_login">登录</router-link></h2>
				<h2><router-link to="/account_register">注册</router-link></h2>
			</div>
		</div>	
		<div class="login">
			<h1>店铺登录</h1>
			<el-form :model="login" ref="login">
				<el-form-item label="用户名" prop="name">
					<el-input v-model="login.name"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="name">
					<el-input type="password" v-model="login.password"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button @click="submitLogin">登录</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import api from '../../api/api'

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
						sname: this.login.name,
						spwd: this.login.password
					}

					api.agentLogin(log).then(res => {
						//this.$router.push('/')
						this.$router.push({ path:'/agent', query: {sid: res.data.sid } })
					})
				}
			})
		}
	}
}
</script>

<style lang="scss" type="text/css">
.header {
	padding: 0 8em;
	margin-bottom: 6em;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	h1 {
		font-size: 5em;
		display: inline-block;
	}

	.nav_login, .person {
		display: inline-block;
		font-size: 2em;
		margin-top: 1em;
	}
	.nav_login {
		h2 {
			margin-right: 4em;
			display: inline-block;
		}
	}
}

.login_content {
	margin: 0 auto;

	.login {
		width: 40em;
		margin: 0.8em auto;
	}
}
</style>
