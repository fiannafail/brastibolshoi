<template lang="pug">
div
	p {{ tagDescription }}
	Grid(:items="data")
</template>
<script>
import axios from '~/plugins/axios'
import Grid from '../../../components/Grid'

export default {
	async asyncData({ params }) {
		const data = await Promise.all([
			axios.get(`/api/getcartoonsbytag/${params.tag}`)
		])
		const description = data[0].data.tag.split(', ')
		console.log(data)
		return {
			data: data[0].data.cartoons,
			tagDescription: description[0]
		}
	},
	mounted () {
		console.log(this.data)
	},
	head: {
		title: `Мультики - ${process.env.siteTitle}`
	},
	components: {
		Grid
	}
}
</script>

