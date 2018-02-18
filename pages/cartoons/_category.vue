<template lang="pug">
div
	h2 {{ $route.params }} 55
	div(class="tags-container")
		div(v-for="(item, index) in cartoonTags" :key="index") 
			a(href="" @click.prevent="tag(item)") {{ item.name }}
	main(class="main-section")
		transition-group(name="zoomUp" tag="div" class="list-group")
			div(v-for="(item, index) in ContentItems" :key="index")
				div(class="post-background" v-lazy:background-image="item.thumbnail")
					p 
						nuxt-link(:to="'/cartoons/' + item.category.slug") {{ item.category.name }}
					h1 
						nuxt-link(:to="'/cartoon/' + item.slug") {{ item.title }}
	div
		button(class="button" @click="getMore") Дальше
</template>
<script>
import { mapState } from 'vuex'

export default {
	name: 'tag',
	fetch ({ params, store }) {
		console.log(params.tag)
		return Promise.all([
			store.dispatch(`getItems`, params),
			store.dispatch('getCartoonsTags')
		])
	},
	data: () => ({
		pagination: 1
	}),
	methods: {
		async tag (item) {
			await this.$store.dispatch('setCurrentTag', { category: this.$route.params.category, tag: item.name })
		},
		getMore () {
			this.$store.dispatch('getMoreItems', { pagination: this.pagination, category: this.$route.params.category })
			this.pagination++
		}
	},
	computed: {
		...mapState({
			ContentItems: 'cartoons',
			cartoonTags: 'cartoonTagsArray',
			cartoonCurrentTag: 'cartoonCurrentTag'
		})
	}
}
</script>
<style lang="stylus" scoped>
.tags-container
	display flex
.main-section
	.list-group
		display flex
		flex-wrap wrap
		width 100%
		& > div
			height 350px
			margin 15px
			border 1px solid #cccccc
			width calc(100% / 3 - 34px)
			&:first-child, &:nth-child(7n)
				width calc(100% / 3 * 2 - 34px)
.post-background
	width 100%
	height 100%
	display flex
	flex-direction column
	justify-content flex-end
	h1, p
		color white
		margin 0
		padding 20px
		padding-top 0
</style>
