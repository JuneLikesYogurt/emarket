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
			<h1>店铺注册</h1>
			<el-form :model="register" ref="register">
				<el-form-item label="用户名" prop="name">
					<el-input v-model="register.name"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="register.password"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button @click="submitRegister">注册</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import api from '../../api/api.js'

export default {
	data() {
		return {
			register: {
				name: '',
				password: ''
			}
		}
	},

	methods: {
		submitRegister() {
			this.$refs.register.validate((valid) => {
				if(valid) {
					this.registerLoading = true;

					let sub = {
						sname: this.register.name,
						spwd: this.register.password
					}

					api.agentRegister(sub).then(res => {
						this.$message.success('创建店铺成功！');
						this.registerLoading = false;
					}).catch((res) => {
						var data = res.datas;
						if(data instanceof Array) {
							this.$message.error(data[0]['message']);
						} else if (data instanceof Object) {
							this.$message.error(data['message']);
						}
						this.registerLoading = false;
					})
				} else {
					return false;
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
