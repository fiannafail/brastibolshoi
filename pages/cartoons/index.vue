<template lang="pug">
div
	Grid(:items="visibleItems" name="cartoon" categoryName="category")
		button(class="button" @click="getMore" slot="getMore" v-if="visibleItems.length !== items.length") Дальше
</template>
<script>
import axios from '~/plugins/axios'
import Grid from '../../components/Grid'

export default {
	head: () => ({
		title: `Мультики — ${process.env.siteTitle}`
	}),
	async asyncData () {
		const data = await Promise.all([
			axios.get('/api/cartoons')
		])
		const items = data[0].data
		const visibleItems = data[0].data.slice(0, 10)
		return {
			items: items,
			visibleItems: visibleItems
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
	data: () => ({
		pagination: 1
	}),
	components: {
		Grid
	},
	layout: 'blog'
}
</script>
<style lang="stylus" scoped>
</style>
