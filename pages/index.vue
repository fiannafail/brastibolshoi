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
		<div>
			<button class="button" @click="redis">redis</button>
			<button class="button" @click="mongo">mongo</button>
		</div>
	</section>
</template>
<script>
import socket from '~/plugins/global.js'
import axios from '~/plugins/axios'

export default {
	created() {

	},
	methods: {
		send() {
			socket.emit('send-message', 'kek')
		},
		async redis () {
			try {
				const data = await axios.get('/redis')
				console.log(data)
			} catch (e) {
				console.log(e)
			}
		},
		async mongo () {
			try {
				const data = await axios.get('/mongo')
				console.log(data)
			} catch (e) {
				console.log(e)
			}
		}
	}
}
</script>


<style scoped>
.title {
	margin: 50px 0;
}
</style>

