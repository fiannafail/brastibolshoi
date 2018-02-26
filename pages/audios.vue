<template lang="pug">
div(class="container")
	Header(:categories="categories" name="audios")
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
		Header
	}
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/app.styl"

</style>

