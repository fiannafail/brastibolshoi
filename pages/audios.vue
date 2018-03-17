<template lang="pug">
div(class="container")
	Categories(name="audios" :categories="categories")
	div(class="container")
		nuxt-child
</template>
<script>
import axios from '~/plugins/axios'
import Categories from '../components/Categories'

export default {
	async asyncData () {
		try {
			const data = await Promise.all([
				axios.get('/api/audios/getcategories')
			])
			console.log(data)
			return {
				categories: data[0].data
			}
		} catch (e) {
			console.log(e)
		}
	},
	components: {
		Categories
	},
	layout: 'blog'
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/app.styl"

</style>

