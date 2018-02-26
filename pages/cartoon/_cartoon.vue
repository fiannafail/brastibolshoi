<template lang="pug">
	main(class="post-container")
		div
			youtube(:video-id="videoId" :player-vars="playerVars" width="100%" height="480")
		aside(class="post-aside")
			div
				div(class="head")
				h2 Глазами ребенка
				p(class="underheader") Что может быть непонятно
				p {{ post.unclear }}
			div(class="block-2")
				div(class="head second")
				h2 Сводка
				p(class="underheader") {{ post.title }}
				p
					span(class="bold") Для возраста: 
					span {{ post.category.name }}
				p 
					span(class="bold") Год: 
					span {{ post.year }}
				p
					span(class="bold") Автор: 
					span {{ post.author }}
				p 
					span(class="bold") О чем: 
					span(v-for="(item, index) in post.tags" :key="index")
							nuxt-link(:to="`/cartoons/tag/${slugify(item.name)}`") {{ item.name }}, 
</template>
<script>
import slugify from 'slug-generator'
import axios from '~/plugins/axios'
import '~/plugins/vue-youtube'

export default {
	async asyncData ({ params }) {
		const { data } = await axios.get(`/api/getcartoonbyslug/${params.cartoon}`)
		return { post: data }
	},
	methods: {
		slugify (item) {
			return slugify(item)
		},
		async getTag (item) {
			try {
				// const { data } = await axios.get(`/api/cartoons/gettag/${item.name}`)
				// const tag = data.split(', ')
				this.$router.replace({ path: `/cartoons/tag/${slugify(item.name)}` })
			} catch (e) {
				console.log(e)
			}
		}
	},
	data: () => ({
		tag: null,
		playerVars: {
			width: 800
		}
	}),
	mounted () {
	},
	computed: {
		videoId () {
			return this.$youtube.getIdFromUrl(this.post.video)
		}
	}
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/app.styl"
.post-container
 	display flex
	&:first-child
		flex 2
	&:nth-child(2)
		flex 1
	&>div
		margin 15px
.post-aside
 	&>div
	 	margin-bottom: 30px
	 	padding 30px
	 	border-radius 10px
	 	border: 1px #cccccc solid
		p
			margin 4px 0
			line-height: 1.8
		h2
			margin 6px 0
			color: #1a1512
			margin-top 12px
		.underheader, h2
			text-align center
		.underheader
			font-size: 14px
		.head
			background-image: url('../../assets/img/hat.svg')
			display block
			width 41px
			height 36px
			margin 0 auto
			&.second
				background-image: url('../../assets/img/building.svg')
		.bold
			font-weight: 700
.block-2
	margin-bottom: 4px
</style>
