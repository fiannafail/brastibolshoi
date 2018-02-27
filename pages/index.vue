<template lang="pug">
	div(class="container")
		Header
		nuxt-child
		Grid(:items="Cartoons")
</template>
<script>
import { mapState } from 'vuex'

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
	head () {
		return {
			title: process.env.siteTitle
		}
	},
	methods: {
		getMore () {
			this.$store.dispatch('getMoreItems', { pagination: this.pagination })
			this.pagination++
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
@import "~assets/css/app.styl"
.container
	width 1150px
	margin 0 auto
</style>

