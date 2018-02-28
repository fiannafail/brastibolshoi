<template lang="pug">
div(class="container")
	Header(:categories="categories" name="others" class="header")
	div(class="container")
		Grid(:items="others" name="other" categoryName="otherscategory")
		nuxt-child
</template>
<script>
import axios from '~/plugins/axios'
import Header from '../components/Header'
import Grid from '../components/Grid'

export default {
	async asyncData () {
		try {
			const data = await Promise.all([
				axios.get('/api/others/getcategories'),
				axios.get('/api/others/getothers')
			])
			return {
				categories: data[0].data,
				others: data[1].data
			}
		} catch (e) {
			console.log(e)
		}
	},
	components: {
		Header,
		Grid
	}
}
</script>
<style lang="stylus" scoped>
.header
	li
		width 25%
</style>

