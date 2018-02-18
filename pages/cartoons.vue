<template lang="pug">
	div(class="container")
		Header
			div(v-for="(item, index) in cartoonCategories" :key="index")
				span
					nuxt-link(:to="'/cartoons/' + item.slug" replace) {{ item.name }}
		p {{ $route.params }} 44
		nuxt-child
</template>
<script>
import { mapState } from 'vuex'
import Header from '../components/Header'
import 'vue2-animate/dist/vue2-animate.min.css'

export default {
	name: 'slug',
	fetch ({ params, store }) {
		return Promise.all([
			store.dispatch('getcartoonsCats')
		])
	},
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
@import "~assets/css/app.styl"
.container
	width 1150px
	margin 0 auto
</style>

