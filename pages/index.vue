<template>
	<section class="container">
		<img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
		<h1 class="title">
			Universal Vue.js Application Framework
		</h1>
		<button @click="send">signin</button>
				<nuxt-link class="button" to="/article1">
			About page
		</nuxt-link>
		<nuxt-link class="button" to="/about">
			About page
		</nuxt-link>
	</section>
</template>
<script>
import socket from '~/plugins/global.js'

export default {
	created() {

	},
	methods: {
		send() {
			socket.emit('send-message', 'kek')
		}
	}
}
</script>


<style scoped>
.title {
	margin: 50px 0;
}
</style>

