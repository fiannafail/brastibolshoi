<template lang="pug">
	div(class="container")
		Header
			div(v-for="(item, index) in cartoonCategories" :key="index")
				span {{ item.name }}
		p {{ $route.params }}
		div {{ ContentItems }}
</template>
<script>
import { mapState } from 'vuex'

import Header from '../components/Header'

export default {
	name: 'slug',
	fetch ({ params, store }) {
		let items = ''
		if (store.state[params.slug] === null) {
			items = store.dispatch(`get${params.slug}`)
		}
		return Promise.all([
			store.dispatch(`get${params.slug}Cats`),
			items
		])
	},
	data: () => ({
	}),
	components: {
		Header
	},
	computed: {
		...mapState({
			ContentItems: 'cartoons',
			cartoonCategories: 'cartoonCategoriesArray'
		})
	}
}
</script>
<style lang="stylus" scoped>
.container
	width 1150px
	margin 0 auto
</style>

