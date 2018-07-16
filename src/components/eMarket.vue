<template>
	<div class="main">
		<div class="goods_search">
			<div>
				<el-input
					placeholder="请输入内容"
					prefix-icon="el-icon-search"
					v-model="keyWords">
				</el-input>
				<el-button  @click="getSearch">搜索</el-button>
			</div>
		</div>

		<div class="content">
			<div class="content-card" v-for="(good, i) in goods" :key="i">
				<el-card>
					<img src="../assets/logo.png" style="width: 20em;">
					<div class="card-bottom">
						<h1>{{ good.name }}</h1>
						<div class="card-edit">
							<span class="price">{{ good.price }}</span>
							<span class="edit">查看</span>
						</div>
					</div>
				</el-card>
			</div>
		</div>


	</div>
</template>

<script>
import api from '../api/api.js'

export default {

	data() {
		return {
			keyWords: '',
			search: '',
			goods: [
				// {name: 'aaa',price: '50'},
				// {name: 'bbb',price: '50'},
				// {name: 'c',price: '50'},
				// {name: 'd',price: '50'},
				// {name: 'd',price: '50'},
				// {name: 'd',price: '50'}
			]
		}
	},

	mounted () {
		this.All()
	},

	methods: {
		// All() {
		// 	//查询所有数据
		// 	// let arr = []
		// 	// res.data.List.forEach((item) => {
		// 	// 	arr.push({
		// 	// 		name: item.name,
		// 	// 		price: item.price
		// 	// 	})
		// 	// })

		// 	// this.$api ({
		// 	// 	method: 'post',
		// 	// 	url: 'http://172.16.8.112:8080/mainpage',
		// 	// 	data: {
		// 	// 		name: item.name,
		// 	// 		price: item.name
		// 	// 	}
		// 	// })
		// 	this.$api.post(
		// 		'http://172.16.8.112:8080/mainpage'
		// 	//	{ name: item.name,price: item.price }
		// 	).then((res) => {
		// 		this.good.name = res.data.name,
		// 		this.good.price = res.data.price,
		// 		console.log(res.data)
		// 	}).catch((error) => {
		// 		console.log(error)
		// 	})
		// },
		All () {
			this.loading = true;
			api.showAll().then(res => {
				this.goods = res.datas;
				this.loading = false;
			},err => {
				console.log(err);
			})
		},

		// getSearch() {
		// 	this.$api.post('http://172.16.8.112:8080/title')
		// 	.then((res) => {
		// 		message: this.keyWords
		// 	})		
		// }
		getSearch () {
			this.loading = true;
			let key = thie.keyWords
			api.searchTitle(key).then(res => {
				this.goods = res.datas;
				this.$message.success('查询成功');
				this.loading = false;
			},err => {
				console.log(err);
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css">
.main {
	width: 80%;
	margin: 0 auto;
}

.goods_search {
	width: 50%;
	margin: 0 auto;

	.el-select {
		margin-bottom: 2em;
	}
	.el-input {
		width: 70%;
	} 
	button {
		margin-left: 2em;
	}
}

.content {
	margin-top: 5em;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
}

.content-card {
	margin: 3em;
	img {
		margin: 0 auto;
	}

	.card-bottom {
		margin-top: 1em;
	}
	h1 {
		font-size: 3.2em;
	}
	.card-edit {
		font-size: 2.4em;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		.price {
			color: red;
			font-size: 1.2em;
		}
		.edit {
			color: #25C276;
		}
	}
}

</style>
