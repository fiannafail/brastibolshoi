<template lang="pug">
	div(class="container")
		nuxt-child
		Grid(:items="visibleItems")
			button(class="getMore" @click="getMore" slot="getMore" v-if="visibleItems.length !== items.length") Дальше
</template>
<script>
import axios from '~/plugins/axios'
import Grid from '../components/Grid'
export default {
	async asyncData () {
		const data = await Promise.all([
			axios.get('/api/all/items')
		])
		const items = data[0].data
		const visibleItems = data[0].data.slice(0, 10)
		return {
			items: items,
			visibleItems: visibleItems
		}
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
			const items = this.items.slice(this.pagination * 10, this.pagination * 10 * 2)
			console.log(items)
			this.visibleItems = [...this.visibleItems, ...items]
			this.pagination++
		}
	},
	components: {
		Grid
	},
	layout: 'blog'
}
</script>


<style lang="stylus">
@import "~assets/css/app.styl"
.container
	width 1150px
	margin 0 auto
</style>

