<template>
	<div class="main">
		<div class="header">
			<h1><router-link to="/">Emarket</router-link></h1>
			<div class="nav_login" v-if="!hasLoginIn">
				<h2><router-link to="/account_login">登录</router-link></h2>
				<h2><router-link to="/account_register">注册</router-link></h2>
			</div>
			<div class="person" v-else>
				<h2><router-link to="/account">个人中心</router-link></h2>
			</div>
		</div>
		<div class="main-content">
			<div class="goods_search">
				<div>
					<el-input
						placeholder="请输入内容"
						prefix-icon="el-icon-search"
						v-model="KeyWords">
					</el-input>
					<el-button  @click="getSearch">搜索</el-button>
				</div>
			</div>

			<div class="content">
				<div class="content-card" v-for="(good, i) in goods" :key="i">
					<el-card>
						<img src="../assets/logo.png" style="width: 20em;">
						<div class="card-bottom">
							<span class="name">{{ good.name }}</span class="name">
							<div class="card-edit">
								<span class="price">{{ good.price }}</span>
								<span class="edit" @click="getDescribe">查看</span>
							</div>
						</div>
					</el-card>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import api from '../api/api.js'

export default {

	data() {
		return {
			KeyWords: '',
			search: '',
			goods: [],
			uid: '',
			hasLoginIn: false
		}
	},

	mounted () {
		this.All(),
		this.getId()
	},

	methods: {
		getId () {
			let uid = this.$route.query.uid
			console.log(uid)
			if(uid) {
				this.hasLoginIn = true
			}
		},

		All () {
			this.loading = true;
			api.showAll().then(res => {
				let arr = []
				res.data.List.forEach((good) => {
					arr.push({
						name: good.gname,
						price: good.price
						// pic: good.pic
					})
				})
				this.goods = arr
				// this.$message.success('查询成功')
				this.loading = false;
			},err => {
				console.log(err);
			})
		},

		getSearch () {
			this.loading = true;
			let key = {
				str: this.KeyWords
			}
			api.searchTitle(key).then(res => {
				if(!res.meta.code) {
					this.goods = []
					res.data.List.forEach((item) => {
						this.goods.push({
							name: item.gname,
							price: item.price
							// pic: item.pic
						})
					})
					this.$message.success('查询成功')
				} else {
					this.$message.warning('查询失败')
				}
				this.loading = false;
			},err => {
				this.$message.warning('查询失败')
				console.log(err);
			})
		},

		getDescribe () {
			this.$router.push({ path:'/detail', query: {gid: res.data.gid } })
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css">
.main-content {
	width: 80%;
	margin: 0 auto;
}

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
	.name {
		font-size: 3.2em;
	}
	.card-edit {
		margin-top: 0.5em;
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
