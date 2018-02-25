<template lang="pug">
	div(class="container")
		Header
			ul(v-if="$route.params.tag === undefined")
				li(
					v-for="(item, index) in cartoonCategories" 
					:key="index" 
					v-bind:class="{ current: $route.params.category === item.slug }"
					)
					span
						nuxt-link(:to="'/cartoons/' + item.slug" replace ) {{ item.name }}
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

.current
	color $global-color
	transition .5s
	a
		color $global-color
		font-weight bold
		transition .5s
ul
	margin 0 auto
	padding 25px
	box-sizing border-box
	width 487px
	column-count 3
	border solid 1px rgba(151, 151, 151, 0.3)
li
	list-style-type unset
	list-style-position inside
	color #01b4bc
	a
		font-family 'PT Sans'
		color #595653
</style>

