<template lang="pug">
	div
		OthersForm(:categories="categories")
</template>
<script>
import axios from '~/plugins/axios'
import OthersForm from '../../components/admin/OthersForm'

export default {
	async asyncData () {
		const data = await Promise.all([
			axios.get('/api/others/getcategories')
		])
		return {
			categories: data[0].data
		}
	},
	components: {
		OthersForm
	}
}
</script>
