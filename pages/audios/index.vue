<template lang="pug">
div(class="container")
	Header
	div(class="container")
		AudiosList(:items="audios")
</template>
<script>
import axios from '~/plugins/axios'
import Header from '../../components/Header'
import AudiosList from '../../components/AudiosList'

export default {
	async asyncData () {
		try {
			const data = await Promise.all([
				axios.get('/api/audios/getaudios')
			])
			console.log(data)
			return {
				audios: data[0].data
			}
		} catch (e) {
			console.log(e)
		}
	},
	components: {
		Header,
		AudiosList
	}
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/app.styl"
</style>

