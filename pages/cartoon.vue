<template lang="pug">
	div(class="container")
		Categories(name="carttoons" :categories="categories")
		div(v-for="(item, index) in cartoonCategories" :key="index")
			nuxt-link(:to="'/cartoons/' + item.slug") {{ item.name }}
		nuxt-child
</template>
<script>
import { mapState } from 'vuex'
import axios from '~/plugins/axios'
import Categories from '../components/Categories'

export default {
	async asyncData () {
		const { data } = await axios.get('/api/cartoons/categories')
		return {
			categories: data
		}
	},
	computed: {
		...mapState({
			ContentItems: 'cartoons'
		})
	},
	components: {
		Categories
	},
	layout: 'blog'
}
</script>
<style lang="stylus" scoped>
.container
	width 1150px
	margin 0 auto
</style>
