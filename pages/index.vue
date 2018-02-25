<template lang="pug">
	div(class="container")
		Header
		nuxt-child
		Grid(:items="Cartoons")
</template>
<script>
import { mapState } from 'vuex'
import socket from '~/plugins/global.js'
import axios from '~/plugins/axios'

import Grid from '../components/Grid'
import Header from '../components/Header'
export default {
	asyncData ({ store }) {
		return Promise.all([
			store.dispatch('getСartoons')
		])
	},
	data: () => ({
		pagination: 1
	}),
	methods: {
		getMore () {
			this.$store.dispatch('getMoreItems', { pagination: this.pagination })
			this.pagination++
		},
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
	},
	computed: {
		...mapState({
			Cartoons: 'cartoons'
		})
	},
	components: {
		Header,
		Grid
	}
}
</script>


<style lang="stylus">
.container
	width 1150px
	margin 0 auto
</style>

