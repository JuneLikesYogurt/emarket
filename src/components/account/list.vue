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
						@click="edit(scope.$index)">删除</el-button>
				</template>
			</el-table-column>

		</el-table>
	</div>
</template>

<script>
export default {
	data () {
		return {
			list: [{
				name: '色彩雫24色',
				shop: '卖狗皮膏药',
				num: '1',
				price: '150'
			}, {
				name: 'java教材',
				shop: '卖狗皮膏药',
				num: '2',
				price: '88'

			}, {
				name: 'java教材',
				shop: '卖狗皮膏药',
				num: '2',
				price: '88'

			}, {
				name: 'java教材',
				shop: '卖狗皮膏药',
				num: '2',
				price: '88'

			}, {
				name: 'java教材',
				shop: '卖狗皮膏药',
				num: '2',
				price: '88'

			}]
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