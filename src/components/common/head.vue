<template>
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
</template>

<script>
export default {
	data () {
		return {
			hasLoginIn: false
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
</style>