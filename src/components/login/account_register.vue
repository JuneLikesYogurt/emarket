<template>
	<div class="login_content">
		<h1>用户注册</h1>
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

		<h1><router-link to="/agent_register">店铺注册</router-link></h1>
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
						uname: this.register.name,
						upwd: this.register.password
					}

					api.accountRegister(sub).then(res => {
						this.$message.success('创建用户成功！');
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
.login_content {
	width: 40em;
	margin: 6em auto;

	div,button {
		margin: 0.8em auto;
	}
}
</style>
