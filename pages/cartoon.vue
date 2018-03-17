<template lang="pug">
div(class="container")
	Header
		div(v-for="(item, index) in cartoonCategories" :key="index")
			nuxt-link(:to="'/cartoons/' + item.slug") {{ item.name }}
	nuxt-child
</template>
<script>
import { mapState } from 'vuex'
import Header from '../components/Header'

export default {
	fetch ({ store }) {
		return Promise.all([
			store.dispatch('getcartoonsCats')
		])
	},
	computed: {
		...mapState({
			ContentItems: 'cartoons',
			cartoonCategories: 'cartoonCategoriesArray'
		})
	},
	components: {
		Header
	},
	layout: 'blog'
}
</script>
<style lang="stylus" scoped>
.container
	width 1150px
	margin 0 auto
</style>
