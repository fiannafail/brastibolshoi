<template lang="pug">
	div(class="others-container")
		OthersForm(:categories="categories")
		ItemsList(:items="items")
</template>
<script>
import axios from '~/plugins/axios'
import OthersForm from '../../components/admin/OthersForm'
import ItemsList from '../../components/admin/ItemsList'

export default {
	async asyncData () {
		const data = await Promise.all([
			axios.get('/api/others/getcategories'),
			axios.get('/api/others/getothers')
		])
		return {
			categories: data[0].data,
			items: data[1].data
		}
	},
	components: {
		OthersForm,
		ItemsList
	}
}
</script>
<style lang="stylus" scoped>
.others-container
	display flex
</style>
