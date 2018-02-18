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
</template>
<script>
import axios from '~/plugins/axios'
import '~/plugins/vue-youtube'

export default {
	async asyncData ({ params }) {
		const { data } = await axios.get(`/api/getcartoonbyslug/${params.cartoon}`)
		return { post: data }
	},
	data: () => ({
		playerVars: {
			width: 800
		}
	}),
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
