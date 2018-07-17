<template>
	<div id="app">
		<!-- <img src="./assets/logo.png"> -->
		<!-- <app-head></app-head> -->
		<!-- <router-view @userSignIn="userSignIn">
		</router-view> -->
		<router-view/>
	</div>
</template>

<script>
import AppHead from '@/components/common/head'

export default {
	// name: 'App',

	// components: {
	// 	AppHead
	// }
}
</script>

<style>
body, html {
	min-width: 1000px;
	margin: 0;
	padding: 0;
	font-size: 62.5%;
}
ul {
	list-style: none;
	padding: 0;
	margin: 0;
}
a {
	display: inline-block;
	text-decoration: none;
	color: #409EFF;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #409EFF;
}
</style>
