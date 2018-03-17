<template lang="pug">
div
	main(class="main-section")
		div(class="list-group")
			div(v-for="(item, index) in items" :key="index")
				div(class="post-background" v-lazy:background-image="item.thumbnail")
					p
						nuxt-link(:to="item.category ? `/cartoons/` + item.category.slug : item.otherscategory ? '/others/' + item.otherscategory.slug : item.audioscategory ? '/audios/' + item.audioscategory.slug : 'undefined'") sadasd
					h1 
						nuxt-link(:to="item.category ? `/cartoon/` + item.slug : item.otherscategory ? '/other/' + item.slug : item.audioscategory ? '/audio/' + item.slug : 'undefined'") {{ item.title }}
	div(class="button-container")
		slot(name="getMore")
</template>
<script>
export default {
	props: ['items', 'name', 'categoryName'],
	data: () => ({
		pagination: 1
	}),
	methods: {
		async tag (item) {
			await this.$store.dispatch('setCurrentTag', { category: this.$route.params.category, tag: item.name })
		},
		getMore () {
			console.log({ pagination: this.pagination, category: this.$route.params.category })
			this.$store.dispatch('getMoreItems', { pagination: this.pagination, category: this.$route.params.category })
			this.pagination++
		}
	}
}
</script>
<style lang="stylus" scoped>
.button-container
	display flex
	justify-content space-around
	margin 25px 0
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
	background-size: cover
	background-position: center
	width 100%
	height 100%
	display flex
	flex-direction column
	justify-content flex-end
	h1, p
		margin 0
		padding 20px
		padding-top 0
		font-family 'PT Sans'
	p
		padding-bottom 5px
	a
		color white
.getMore
	background-color: #fa8925;
	font-size: 22px
	font-weight: 700
	cursor pointer
	padding 17px 35px
	color white
	border none
	border-radius: 100px
	letter-spacing: 1px
</style>
