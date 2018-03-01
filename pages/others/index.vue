<template lang="pug">
div
	Grid(:items="others" name="other" categoryName="otherscategory")
</template>
<script>
import axios from '~/plugins/axios'
import Grid from '../../components/Grid'

export default {
	async asyncData () {
		try {
			const data = await Promise.all([
				axios.get('/api/others/getothers')
			])
			return {
				others: data[0].data
			}
		} catch (e) {
			console.log(e)
		}
	},
	components: {
		Grid
	}
}
</script>
<style lang="stylus" scoped>
.header
	li
		width 25%
</style>

