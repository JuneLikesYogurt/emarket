<template>
	<div class="detail">
		<div class="header">
			<h1><router-link to="/">Emarket</router-link></h1>
			<div class="person" >
				<h2><router-link to="/account">个人中心</router-link></h2>
			</div>
		</div>

		<div class="detial_content">
			<div class="img">
				<img src="../../assets/logo.png" style="width: 25em">
			</div>
			<div class="content">
				<h1>{{ name }}</h1>
				<p> {{ content }}</p>
				<div class="act">
					<div class="mes">
						<h1>库存：{{ num }}</h1>
						<h1>价格：{{ price }}</h1>
					</div>
					
					<div class="button">
						<el-button @click="addToList">加入购物车</el-button>
						<el-button @click="directBuy">购买</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import api from '../../api/api.js'

export default {
	data () {
		return {
			// name: '23333',
			// content: ' 风沙过 日月映照日夜不熄的圣火光明处 动静随心暗偷换生死袖手酒中仙 醉倚桃花又惹积雪落满头无闲愁 只我癫狂不为浮名身后留',
			// num: '100',
			name: '',
			content: '',
			price: '',
			num: ''
		}
	},

	mounted () {
		this.getId(),
		this.show()
	},

	methods: {
		getId () {
			let gid = this.$route.query.gid
			console.log(gid)
			if(gid) {
				this.hasLoginIn = true
			}
		},

		show () {
			this.loading = true;
			let id = {
				id: '3'
			}
			api.detail(id).then(res => {
					this.name = res.data.model.gname,
					this.content = res.data.model.msg,
					this.price = res.data.model.price,
					this.num = res.data.model.num
					// pic: good.pic
				})
				// console.log(res)
				this.loading = false;
		},
		//加入购物车
		addToList () {
			this.loading = true;
			let id = {
				gid: '3',
				uid: '2'
			}

			api.addToList(id).then(res => {
				this.$router.push('/')
			})
		},
		directBuy () {
			this.loading = true;
			let id = {
				gid: '3',
				uid: '2'
			}

			api.directBuy(id).then(res => {
				this.$router.push('/detail')
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