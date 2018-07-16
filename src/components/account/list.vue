<template>
	<div class="list">
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
</template>

<script>
import api from '../../api/api.js'

export default {
	data () {
		return {
			// list: [{
			// 	name: '色彩雫24色',
			// 	shop: '卖狗皮膏药',
			// 	num: '1',
			// 	price: '150'
			// }, {
			// 	name: 'java教材',
			// 	shop: '卖狗皮膏药',
			// 	num: '2',
			// 	price: '88'

			// }, {
			// 	name: 'java教材',
			// 	shop: '卖狗皮膏药',
			// 	num: '2',
			// 	price: '88'

			// }, {
			// 	name: 'java教材',
			// 	shop: '卖狗皮膏药',
			// 	num: '2',
			// 	price: '88'

			// }, {
			// 	name: 'java教材',
			// 	shop: '卖狗皮膏药',
			// 	num: '2',
			// 	price: '88'

			// }]
			list: ''
		}
	},

	mounted () {
		this.showList()
	},

	methods: {
		showList () {
			this.loading = true;

			let uid = '1'

			api.showList(uid).then(res => {
				this.goods = res.datas;
				this.loading = false;
			},err => {
				console.log(err);
			})
		}
	}
}
</script>

<style lang="scss" type="text/css">
.list {
	width: 70%;
	margin: 0 auto;
}
</style>