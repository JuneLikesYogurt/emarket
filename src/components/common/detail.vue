<template>
	<div class="detail">
		<div class="img">
			<img src="../../assets/logo.png" style="width: 25em">
		</div>
		<div class="content">
			<h1>{{ name }}</h1>
			<p> {{ content }}</p>
			<div class="act">
				<h1>库存：{{ num }}</h1>
				<div class="button">
					<el-button>加入购物车</el-button>
					<el-button>购买</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			name: '23333',
			content: ' 风沙过 日月映照日夜不熄的圣火光明处 动静随心暗偷换生死袖手酒中仙 醉倚桃花又惹积雪落满头无闲愁 只我癫狂不为浮名身后留',
			num: '100'
		}
	}
}
</script>
 
<style lang="scss" type="text/css">
.detail {
	width: 60%;
	margin: 0 auto;

	.img {
		display: inline-block;
		margin: 0 auto;
	}

	.content {
		margin-top: 5em;
		h1 {
			font-size: 4em;
		}
		p {
			font-size: 2.5em;
		}
		.act {
			margin-top: 3em;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			h1 {
				font-size: 3.8em;
				font-weight: lighter;
				color: #25C276;
			}
		}
	}
}
</style>