<template lang="pug">
	div
		Grid(:items="items" name="other" categoryName="otherscategory")
</template>
<script>
import axios from '~/plugins/axios'
import Grid from '../../components/Grid'

export default {
	async asyncData ({ params }) {
		try {
			const data = await Promise.all([
				axios.get(`/api/others/getbycategory/${params.category}`)
			])
			return {
				items: data[0].data
			}
		} catch (e) {
			console.log(e)
		}
	},
	head() {
		return {
			title: this.items[0] ? this.items[0].otherscategory.name + ' — ' + process.env.siteTitle : `Не найдено — ${process.env.siteTitle}`
		}
	},
	components: {
		Grid
	}
}
</script>
