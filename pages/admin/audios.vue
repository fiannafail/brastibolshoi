<template lang="pug">
	div
		h2 Аудио
		div(class="audio-container")
			Audio-form(:items="categories")
			ItemsList(:items="audios")
</template>
<script>
import axios from '~/plugins/axios'
import AudioForm from '../../components/admin/AudiosForm'
import ItemsList from '../../components/admin/ItemsList'

export default {
	async asyncData () {
		try {
			const data = await Promise.all([
				axios.get('/api/audios/getcategories'),
				axios.get('/api/audios/getaudios')
			])
			console.log(data)
			return {
				categories: data[0].data,
				audios: data[1].data
			}
		} catch (e) {
			console.log(e)
		}
	},
	components: {
		AudioForm,
		ItemsList
	}
}
</script>
<style lang="stylus" scoped>
.audio-container
	display flex
	align-items: flex-start;
</style>

