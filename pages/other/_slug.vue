<template lang="pug">
div(class="container")
	Header(:categories="categories" name="others")
	article(class="post-container" v-html="post.content")
</template>
<script>
import axios from '~/plugins/axios'
import Header from '../../components/Header'

export default {
	async asyncData ({ params }) {
		try {
			const data = await Promise.all([
				axios.get(`/api/others/${params.slug}`),
				axios.get('/api/others/getcategories')
			])
			return {
				post: data[0].data,
				categories: data[1].data
			}
		} catch (e) {
			console.log(e)
		}
	},
	components: {
		Header
	}
}
</script>
<style lang="stylus">
.post-container
	width 730px
	margin 60px auto
	padding 30px
	border 1px #cccccc solid
	box-sizing: border-box
	border-radius: 10px
	img
		width 100%
</style>
