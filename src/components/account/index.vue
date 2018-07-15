<template>
	<div class="account">
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
</template>

<script>
export default {
	data() {
		return {
			list: [{
				name: '色彩雫24色',
				shop: '卖狗皮膏药',
				price: '150'
			}, {
				name: 'java教材',
				shop: '卖狗皮膏药',
				price: '88'

			}, {
				name: 'java教材',
				shop: '卖狗皮膏药',
				price: '88'

			}, {
				name: 'java教材',
				shop: '卖狗皮膏药',
				price: '88'

			}, {
				name: 'java教材',
				shop: '卖狗皮膏药',
				price: '88'

			}],
			name: '娃哈哈'
		}
	}
}
</script>

<style lang="scss" type="text/css">
.account {
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