<template lang="pug">
div(class="container")
	Header(:categories="categories" name="audios" class="header")
	div(class="container")
		nuxt-child
</template>
<script>
import axios from '~/plugins/axios'
import Header from '../components/Header'

export default {
	async asyncData () {
		try {
			const data = await Promise.all([
				axios.get('/api/others/getcategories')
			])
			return {
				categories: data[0].data
			}
		} catch (e) {
			console.log(e)
		}
	},
	components: {
		Header
	}
}
</script>
<style lang="stylus" scoped>
.header
	li
		width 25%
</style>

