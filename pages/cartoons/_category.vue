<template lang="pug">
div
	div(class="meta")
		h1 Мультики для детей 
			span {{ items[0].category.name }}
		p {{ items[0].category.description }}
	div(class="tags-container")
		div(v-for="(item, index) in cartoonTags" :key="index" v-bind:class="{ current: currentTag === index }") 
			a(href="" @click.prevent="tag(item, index)") {{ item.name }}
	Grid(:items="visibleItems")
		button(class="button" @click="getMore" slot="getMore" v-if="visibleItems.length !== items.length") Дальше
</template>
<script>
import axios from '~/plugins/axios'
import { mapState } from 'vuex'
import Grid from '../../components/Grid'

export default {
	name: 'tag',
	async asyncData ({ params }) {
		console.log(params.category)
		const data = await Promise.all([
			axios.get(`/api/cartoons/category/${params.category}`),
			axios.get('/api/cartoons/tags')
		])
		const items = data[0].data
		const visibleItems = data[0].data.slice(0, 10)
		return {
			items: items,
			visibleItems: visibleItems,
			cartoonTags: data[1].data
		}
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
			console.log(item)
			const { data } = await axios.get(`/api/gettagbyname/${this.$route.params.category}/${item.name}`)
			console.log()
			this.visibleItems = data.cartoons
		},
		getMore () {
			const items = this.items.slice(this.pagination * 10, this.pagination * 10 * 2)
			console.log(items)
			this.visibleItems = [...this.visibleItems, ...items]
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
	},
	layout: 'blog'
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/app.styl"
.meta
	padding 15px
	h1
		margin-bottom: 12px
		margin-top: 35px
	p
		margin 10px 0
		color #807b77
		letter-spacing: 1.1px
		font-size: 15px
		line-height: 22px
h1
	color #1a1512
	span
		color $global-color
.tags-container
	padding 0 5px
	display flex
	a	
		display block
		margin 10px
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
