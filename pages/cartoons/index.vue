<template lang="pug">
div
	Grid(:items="ContentItems" name="cartoon")
</template>
<script>
import { mapState } from 'vuex'
import Grid from '../../components/Grid'

export default {
	head: () => ({
		title: `Мультики — ${process.env.siteTitle}`
	}),
	fetch ({ params, store }) {
		console.log(params.tag)
		return Promise.all([
			store.dispatch(`getСartoons`)
		])
	},
	computed: {
		...mapState({
			ContentItems: 'cartoons'
		})
	},
	components: {
		Grid
	}
}
</script>
<style lang="stylus" scoped>
</style>
