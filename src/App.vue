<template>
	<div id="app">
		<!-- <img src="./assets/logo.png"> -->
		<app-head></app-head>
		<router-view/>
	</div>
</template>

<script>
import AppHead from '@/components/common/head'

export default {
	name: 'App',

	components: {
		AppHead
	}

}
</script>

<style>
body, html {
	min-width: 900px;
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
	color: #F5C127;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #F5C127;
}
</style>
