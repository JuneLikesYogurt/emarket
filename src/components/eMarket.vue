<template>
	<div class="main">
		<div class="search">
			<el-input
				placeholder="请输入内容"
				prefix-icon="el-icon-search"
				v-model="search">
			</el-input>
		</div>

		<div class="content">
			<!-- <div class="content-card" v-for="(item, i) in goods" :key="i"> -->
			<div class="content-card">
				<el-card>
					<img src="../assets/logo.png" style="width: 20em;">
					<div class="card-bottom">
						<h1>{{ name }}</h1>
						<div class="card-edit">
							<time>time</time>
							<span class="edit">查看</span>
						</div>
					</div>
				</el-card>
			</div>
		</div>


	</div>
</template>

<script>
export default {

	data() {
		return {
			search: ''
			//goods: []
		}
	},

	mounted () {
		this.showAll()
	},

	methods: {
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css">
.main {
	width: 80%;
	margin: 0 auto;
	margin-top: 6em;
}

.search {
	width: 50%;
	margin: 0 auto;
}

.content {
	margin-top: 8em;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.content-card {
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
		
		.edit {
			color: #25C276;
		}
	}
}

</style>
