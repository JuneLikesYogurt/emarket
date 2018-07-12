<template>
	<div class="header">
		<h1><router-link to="/">Emarket</router-link></h1>
		<div class="login">
			<h2><router-link to="/login">登录</router-link></h2>
			<h2>注册</h2>
		</div>
		<div class="person">
			<h2>个人中心</h2>
		</div>
	</div>
</template>

<style lang="scss" type="text/css">
.header {
	padding: 0 8em;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	h1 {
		font-size: 5em;
		display: inline-block;
	}

	.login, .person {
		display: inline-block;
		font-size: 2em;
		margin-top: 1em;
	}
	.login {
		h2 {
			margin-right: 4em;
			display: inline-block;
		}
	}
}
</style>