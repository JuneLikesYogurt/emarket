<template>
	<div class="account">
		<div class="header">
			<h1><router-link to="/">Emarket</router-link></h1>
			<div class="person">
				<h2><router-link to="/account">个人中心</router-link></h2>
			</div>
		</div>
		
		<div class="account_content">
			<div class="person_mes">
				<p>亲爱的<span>{{ name }}</span>你好哇!</p>
			</div>

			<el-button><router-link to="/list">进入购物车</router-link></el-button>
			
			<el-table
				:data="list"
				stripe>
				<el-table-column
					prop="name"
					label="商品名称">
				</el-table-column>
				<el-table-column
					prop="shop"
					label="店铺名">
				</el-table-column>
				<el-table-column
					prop="price"
					label="价格">
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
import api from '../../api/api.js'

export default {
	data() {
		return {
			list: [],
			name: ''
		}
	},

	mounted() {
		this.account_bought()
	},

	methods: {
		account_bought () {
			this.loading = true;
			let uid = {
				id: '2'
			}
			api.account_bought(uid).then(res => {
				this.list = []
				res.data.List.forEach((item) => {
					this.list.push({
						name: item.gname,
						shop: item.sname,
						price: item.price
					})
				})
				this.name = res.data.user.uname
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

.account_content {
	width: 60%;
	margin: 0 auto;

	.person_mes {
		font-size: 3em;
		margin-bottom: 2em;
		span {
			font-size: 2em;
			margin: 0 0.5em;
			color: #4EEE8B;
		}
	}

	a{

	}

	.el-table--fit {
		margin-top: 2em;
	}
}
</style>