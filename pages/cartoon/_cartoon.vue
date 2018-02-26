<template lang="pug">
	main(class="post-container")
		div
			youtube(:video-id="videoId" :player-vars="playerVars" width="100%" height="480")
		aside(class="post-aside")
			div
				h2 Глазами ребенка
				p Что может быть непонятно
				p {{ post.unclear }}
			div
				h2 Сводка
				p {{ post.title }}
				p Для возраста: {{ post.category.name }}
				p Год: {{ post.year }}
				p Автор: {{ post.author }}
				p О чем:
					span(v-for="(item, index) in post.tags" :key="index") 
						span(@click.prevent="getTag(item)") {{ item.name }}
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
.post-container
 	display flex
	&:first-child
		flex 2
	&:nth-child(2)
		flex 1
.post-aside
 	&>div
	 	padding 20px
	 	border-radius 10px
	 	border 1px #ccc solid
		box-sizing border-box
</style>
