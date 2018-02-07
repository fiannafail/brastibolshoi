<template lang="pug">
	div(class="container")
		Header
		main(class="main-section")
			div(v-for="(item, index) in Cartoons" :key="index")
				div(class="post-background" v-bind:style="{ backgroundImage: 'url(' + item.thumbnail + ')' }")
					h1 {{ item.title }}
</template>
<script>
import { mapState } from 'vuex'
import socket from '~/plugins/global.js'
import axios from '~/plugins/axios'

import Header from '../components/Header'
export default {
	asyncData ({ store }) {
		return Promise.all([
			store.dispatch('getcartoons')
		])
	},
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
	},
	computed: {
		...mapState({
			Cartoons: 'cartoons'
		})
	},
	components: {
		Header
	}
}
</script>


<style lang="stylus" scoped>
.container
	width 1150px
	margin 0 auto

.main-section
	display flex
	flex-wrap wrap
	& > div
		height 350px
		margin 15px
		border 1px solid #cccccc
		width calc(100% / 3 - 34px)
		&:first-child
			width calc(100% / 3 * 2 - 34px)
.post-background
	width 100%
	height 100%
</style>

