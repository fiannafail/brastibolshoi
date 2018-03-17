<template lang="pug">
	main(class="post-container")
		div
			div(class="video")
				youtube(:video-id="videoId" :player-vars="playerVars" width="100%" height="480")
			no-ssr
				carousel(class="multiseries"
					v-if="post.parentTitleId !== ''" 
					:paginationEnabled="false" 
					:perPage="4" 
					:navigationEnabled="true"
					:navigationNextLabel="nextLabel()"
					:navigationPrevLabel="prevLabel()"
					)
					slide(v-for="(item, index) in multiseries" :key="index")
						a(:href="`/cartoon/${item.slug}`")
							div(class="thumbnail" v-bind:style="{ backgroundImage: `url(${item.thumbnail})` }")
							p {{ item.title }}
			div(class="description block")
				p {{ post.description }}
			div(class="tags block")
				h2 Сборники мультфильмам по темам
				span(v-for="(item, index) in tags" :key="index") 
					nuxt-link(:to="`/cartoons/tag/${slugify(item.name)}`") {{ item.name }}
		aside(class="post-aside")
			div(class="block")
				div(class="head")
				h2 Глазами ребенка
				p(class="underheader") Что может быть непонятно
				p {{ post.unclear }}
			div(class="block-2 block")
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
import { Carousel, Slide } from 'vue-carousel'
import axios from '~/plugins/axios'
import '~/plugins/vue-youtube'

export default {
	async asyncData ({ params }) {
		const data = await Promise.all([
			axios.get('/api/cartoons/tags'),
			axios.get(`/api/getcartoonbyslug/${params.cartoon}`)
		])
		console.log(data[1].data)
		const id = data[1].data.parentTitleId !== '' ? await axios.get(`/api/cartoons/multiseries/${data[1].data.parentTitleId}`) : ''
		return {
			tags: data[0].data,
			post: data[1].data,
			multiseries: id.data
		}
	},
	head () {
		return {
			title: this.post.title + ' - ' + process.env.siteTitle
		}
	},
	methods: {
		nextLabel () {
			return `<div class="next-arrow"></div>`
		},
		prevLabel () {
			return `<div class="prev-arrow"></div>`
		},
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
	components: {
		Carousel,
		Slide
	},
	computed: {
		videoId () {
			return this.$youtube.getIdFromUrl(this.post.video)
		}
	},
	layout: 'blog'
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/app.styl"
.post-container
 	display flex
	 margin-top: 45px
	&:first-child
		flex 2
	&:nth-child(2)
		flex 1
.post-aside
 	&>div
	 	margin-bottom: 30px
	 	border-radius 10px
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
.description
	line-height: 26px
	letter-spacing: 0.6px
.tags
	h2
		padding-left: 7px
		color #1a1512
	span
		padding 10px 18px
		display inline-block
		border-radius: 3px
		font-size: 14px
		border 1px solid rgba(151, 151, 151, 0.35)
		margin 7.5px
		a
			color #595653
.block
	padding 20px
	margin 15px
	border 1px #ccc solid
	border-radius: 10px
	margin-bottom: 30px
.video
	margin 15px
	margin-bottom: 30px
.multiseries
	display flex
	height 210px
	max-width: 640px
	left 60px
	padding 0 10px
	a
		color #595653
	p
		font-size: 14px
		text-align: center
.thumbnail
	width 125px
	height 125px
	background-size: cover
	background-repeat: no-repeat
	border-radius: 100px
	background-position: 50%
.VueCarousel-slide
	max-width: 125px
	margin 15px
</style>
