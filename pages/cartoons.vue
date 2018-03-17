<template lang="pug">
	div(class="container")
		Categories(name="cartoons" :categories="cartoonCategories")
		nuxt-child
</template>
<script>
import { mapState } from 'vuex'
import axios from '~/plugins/axios'
import Categories from '../components/Categories'
import 'vue2-animate/dist/vue2-animate.min.css'

export default {
	async asyncData () {
		try {
			const data = await Promise.all([
				axios.get('/api/cartoons/categories')
			])
			console.log(data)
			return {
				cartoonCategories: data[0].data
			}
		} catch (e) {
			console.log(e)
		}
	},
	components: {
		Categories
	},
	computed: {
		...mapState({
			ContentItems: 'cartoons'
		})
	},
	layout: 'blog'
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/app.styl"
.tags-container
	display flex
	a	
		display block
		margin 15px
		border-radius 3px
		border solid 1px rgba(151, 151, 151, 0.35)
		padding 10px 8px
		color #595653
		font-family 'PT Sans'
		font-size 14px
		transition .4s
	.current a
		background-color: $global-color
		color white
		border solid 1px $global-color
		transition .4s
</style>

