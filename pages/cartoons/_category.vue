<template lang="pug">
div
	div(class="tags-container")
		div(v-for="(item, index) in cartoonTags" :key="index" v-bind:class="{ current: currentTag === index }") 
			a(href="" @click.prevent="tag(item, index)") {{ item.name }}
	Grid(:items="ContentItems")
</template>
<script>
import { mapState } from 'vuex'
import Grid from '../../components/Grid'

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
		currentTag: null,
		pagination: 1
	}),
	head: () => ({
		title: `Мультики — ${process.env.siteTitle}`
	}),
	methods: {
		async tag (item, index) {
			await this.$store.dispatch('setCurrentTag', { category: this.$route.params.category, tag: item.name })
			this.currentTag = index
		},
		getMore () {
			this.$store.dispatch('getMoreItems', { pagination: this.pagination, category: this.$route.params.category })
			this.pagination++
		}
	},
	destroyed () {
		console.log('up')
	},
	computed: {
		...mapState({
			ContentItems: 'cartoons',
			cartoonTags: 'cartoonTagsArray',
			cartoonCurrentTag: 'cartoonCurrentTag'
		})
	},
	components: {
		Grid
	}
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
	background-color $global-color
	color white
	border solid 1px $global-color
	transition .4s
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
