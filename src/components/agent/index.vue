<template>
	<div class="account">

		<div class="header">
			<h1><router-link to="/">Emarket</router-link></h1>
		</div>
		
		<div class="account_content">
			<div class="person_mes">
				<p>亲爱的店家<span>{{ name }}</span>你好哇!</p>
			</div>
			<el-button><router-link to="/add">新增物品</router-link></el-button>		
			<el-table
				:data="list"
				stripe>
				<el-table-column
					prop="name"
					label="商品名称">
				</el-table-column>
				<el-table-column
					prop="num"
					label="库存">
				</el-table-column>
				<el-table-column
					prop="price"
					label="价格">
				</el-table-column>
				<el-table-column
					label="操作">
					<template slot-scope="scope">
						<el-button
							siz="mini"
							@click="edit(scope.$index)">编辑</el-button>
						<el-button
							siz="mini"
							type="danger"
							@click="deleteGood(scope.$index)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
import api from '../../api/api'

export default {
	data() {
		return {
			list: [],
			name: ''
		}
	},

	mounted() {
		this.shop_goods()
	},

	methods: {
		shop_goods () {
			this.loading = true;
			let uid = {
				id: '1'
			}
			api.shop_goods(uid).then(res => {
				this.list = []
				res.data.List.forEach((item) => {
					this.list.push({
						name: item.gname,
						num: item.num,
						price: item.price
					})
				})
				this.name = res.data.List[0].sname
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

	.el-table--fit {
		margin-top: 2em;
	}
}
</style>