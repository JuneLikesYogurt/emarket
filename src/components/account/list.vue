<template>
	<div class="list">

		<div class="header">
			<h1><router-link to="/">Emarket</router-link></h1>
			<div class="person">
				<h2><router-link to="/account">个人中心</router-link></h2>
			</div>
		</div>
		
		<div class="list_content">
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

				<el-table-column
					label="操作">
					<template slot-scope="scope">
						<el-button
							siz="mini"
							@click="edit(scope.$index)">购买</el-button>
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
import api from '../../api/api.js'

export default {
	data () {
		return {
			list: []
		}
	},

	mounted () {
		this.showList()
	},

	methods: {
		showList () {
			this.loading = true;

			let id = {
				id: '2'
			}

			api.showList(id).then(res => {
				this.list = []
				res.data.List.forEach((item) => {
					this.list.push({
						name: item.gname,
						shop: item.sname,
						num: item.num,
						price: item.price
					})
				})
			},err => {
				this.loading = false;
				console.log(err);
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

.list_content {
	width: 70%;
	margin: 0 auto;
}
</style>