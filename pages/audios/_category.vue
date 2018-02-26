<template lang="pug">
	AudiosList(:items="audios")
</template>
<script>
import axios from '~/plugins/axios'
import AudiosList from '../../components/AudiosList'

export default {
	async asyncData ({ params }) {
		try {
			const data = await Promise.all([
				axios.get(`/api/audios/category/${params.category}`)
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
		AudiosList
	}
}

</script>
