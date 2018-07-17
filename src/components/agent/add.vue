<template>
	<div class="add">
		
		<div class="header">
			<h1><router-link to="/">Emarket</router-link></h1>
		</div>
		
		<div class="add_content">
			<el-form :model="addGood" ref="addGood">
				<el-form-item label="商品名">
					<el-input v-model="addGood.name"></el-input>
				</el-form-item>
				<el-form-item label="商品描述">
					<el-input type="textarea" v-model="addGood.content"></el-input>
				</el-form-item>
				<el-form-item label="库存数目">
					<el-input v-model="addGood.storage"></el-input>
				</el-form-item>
				<el-form-item label="价格">
					<el-input v-model="addGood.price"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">新增商品</el-button>
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
			addGood: {
				name: '',
				content: '',
				storage: '',
				price: ''
			}
		}
	},

	methods: {
		onSubmit() {
			this.$refs.addGood.validate((valid) => {
				if(valid) {
					this.addLoading = true;

					//let sid = '1'
					
					let add = {
						sid: '1',
						gname: this.addGood.name,
						price: this.addGood.price,
						pic: '123456',
						num: this.addGood.storage,
						msg: this.addGood.content
					}

					api.addGood(add).then(res => {
						// this.$message.success('新增商品成功')
						if(!res.data.code) {
							this.$message.success('新增商品成功')
						} else {
							this.$message.warning('新增商品失败')
						}
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

.add_content {
	width: 50%;
	margin: 0 auto;
}
</style>