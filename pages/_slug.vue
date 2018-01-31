<template lang="pug">
	div
		p {{ $route.params }}
		div {{ user }}
</template>
<script>
import axios from '~/plugins/axios'

export default {
	name: 'slug',
	async asyncData({ params }) {
		console.log(params.slug)
		const { data } = await axios.get('/cartoon/' + params.slug)
		return { user: data }
	},
	mounted() {
		console.log(this.user)
	}
}
</script>

