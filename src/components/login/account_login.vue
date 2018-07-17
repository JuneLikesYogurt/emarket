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
			<h1>用户登录</h1>
			<el-form :model="login" ref="login">
				<el-form-item label="用户名" prop="uname">
					<el-input v-model="login.uname"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="login.password"></el-input>
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
import api from '../../api/api'

export default {
	data() {
		return {
			login: {
				uname: '',
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
						uname: this.login.uname,
						upwd: this.login.password
					}

					api.accountLogin(log).then(res => {
						this.$router.push({ path:'/', query: {uid: res.data.uid } })
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
