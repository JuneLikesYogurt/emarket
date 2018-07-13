<template>
	<div>
		<h1>{{ name }}</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name:''
		}
	},

	mounted() {
		this.show()
	},

	methods: {
		show () {
			// this.$api.get('http://localhost:8080/login')
			// .then(res => {
			// 	this.name = 'test'
			// })
			this.$api.post('user/login.do(地址)', {
			    "参数名": "参数值"
			}, response => {
			     if (response.status >= 200 && response.status < 300) {
			        console.log(response.data)//请求成功，response为成功信息参数
			     } else {
			        console.log(response.message)//请求失败，response为失败信息
			     }
			})
		}
	}
}
</script>

<style>
	
</style>
